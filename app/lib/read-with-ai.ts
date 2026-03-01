export type ReadWithAIProvider = "chatgpt" | "claude" | "perplexity";

const PROVIDER_URL_BUILDERS: Record<
  ReadWithAIProvider,
  (encodedPrompt: string) => string
> = {
  chatgpt: (encodedPrompt) =>
    `https://chat.openai.com/?q=${encodedPrompt}`,
  claude: (encodedPrompt) =>
    `https://claude.ai/new?q=${encodedPrompt}`,
  perplexity: (encodedPrompt) =>
    `https://www.perplexity.ai/?q=${encodedPrompt}`,
};

export function buildReadWithAIUrl(
  provider: ReadWithAIProvider,
  prompt: string
): string {
  const builder = PROVIDER_URL_BUILDERS[provider];
  return builder(encodeURIComponent(prompt));
}

export function getReadWithAIProviders(): {
  provider: ReadWithAIProvider;
  label: string;
}[] {
  return [
    { provider: "chatgpt", label: "Read with ChatGPT" },
    { provider: "claude", label: "Read with Claude" },
    { provider: "perplexity", label: "Read with Perplexity" },
  ];
}
