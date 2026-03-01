export type ReadWithAIProvider = "chatgpt" | "claude" | "perplexity";

const PROVIDER_URL_BUILDERS: Record<
  ReadWithAIProvider,
  (encodedPrompt: string) => string
> = {
  chatgpt: (encodedPrompt) =>
    `https://chatgpt.com/?q=${encodedPrompt}`,
  claude: (encodedPrompt) =>
    `https://claude.ai/new?q=${encodedPrompt}`,
  perplexity: (encodedPrompt) =>
    `https://www.perplexity.ai/?q=${encodedPrompt}`,
};

const MAX_PREFILL_PROMPT_CHARS = 900;
const TRUNCATION_SUFFIX = " ... [Prompt truncated for URL length. Use copied full prompt.]";

export function toPrefillPrompt(prompt: string): string {
  const compact = prompt.replace(/\s+/g, " ").trim();
  if (compact.length <= MAX_PREFILL_PROMPT_CHARS) {
    return compact;
  }

  const headLength = Math.max(0, MAX_PREFILL_PROMPT_CHARS - TRUNCATION_SUFFIX.length);
  return `${compact.slice(0, headLength).trim()}${TRUNCATION_SUFFIX}`;
}

export function buildReadWithAIUrl(
  provider: ReadWithAIProvider,
  prompt: string
): string {
  const builder = PROVIDER_URL_BUILDERS[provider];
  return builder(encodeURIComponent(toPrefillPrompt(prompt)));
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
