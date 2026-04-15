import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt, detectWidget } from "@/app/lib/ai-knowledge";

const client = new Anthropic();

type Message = {
  role: "user" | "assistant";
  content: string;
};

function errorMessage(err: unknown): string {
  if (err instanceof Anthropic.APIError) {
    if (err.status === 400 && String(err.message).includes("credit balance")) {
      return "The AI assistant is temporarily unavailable — the API credits need to be topped up. Try again soon.";
    }
    if (err.status === 401) {
      return "AI assistant configuration issue — please check back later.";
    }
    if (err.status === 529) {
      return "Claude is overloaded right now. Give it a moment and try again.";
    }
  }
  return "Something went sideways on my end — give it another try.";
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: Message[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response("Invalid request", { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content ?? "";
    const conversationDepth = messages.length;

    const isComplex =
      lastMessage.length > 200 ||
      /\b(compar|explain in detail|your opinion|what do you think|philosoph|what.s the difference between|walk me through|deep dive)\b/i.test(lastMessage) ||
      conversationDepth > 8;

    const model = isComplex ? "claude-sonnet-4-6" : "claude-haiku-4-5-20251001";
    const widget = detectWidget(lastMessage);
    const systemPrompt = buildSystemPrompt();

    // Start the stream — this throws immediately on auth/billing errors
    let stream: Awaited<ReturnType<typeof client.messages.stream>>;
    try {
      stream = await client.messages.stream({
        model,
        max_tokens: 800,
        system: [
          {
            type: "text",
            text: systemPrompt,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      });
    } catch (err) {
      console.error("Anthropic API error:", err);
      const msg = errorMessage(err);
      return new Response(msg, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }

          if (widget) {
            controller.enqueue(
              encoder.encode(`\n\n__WIDGET__:${JSON.stringify(widget)}`)
            );
          }
        } catch (err) {
          console.error("Stream error:", err);
          controller.enqueue(encoder.encode(errorMessage(err)));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
