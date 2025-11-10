import { formatPrompt } from './format-prompt';
import type { CreateAIShareURLOpts } from './types';

export type CreateAIShareURL = (opts: CreateAIShareURLOpts) => string;

export const createChatGPTShareURL: CreateAIShareURL = (opts) => {
  return `https://chatgpt.com/?hints=search&prompt=${formatPrompt(opts)}`;
};

export const createPerplexityShareURL: CreateAIShareURL = (opts) => {
  return `https://www.perplexity.ai/search/new?q=${formatPrompt(opts)}`;
};

export const createClaudeShareURL: CreateAIShareURL = (opts) => {
  return `https://claude.ai/new?q=${formatPrompt(opts)}`;
};

export const createAIModeShareURL: CreateAIShareURL = (opts) => {
  return `https://www.google.com/search?udm=50&aep=11&q=${formatPrompt(opts)}`;
};

export const createGeminiShareURL: CreateAIShareURL = (opts) => {
  return `https://gemini.google.com/app?prompt_text=${formatPrompt(opts)}&prompt_action=autosubmit`;
};

export const createGrokShareURL: CreateAIShareURL = (opts) => {
  return `https://x.com/i/grok?text=${formatPrompt(opts)}`;
};

export const createMetaShareURL: CreateAIShareURL = (opts) => {
  return `https://www.meta.ai/?prompt=${formatPrompt(opts)}`;
};

export const createMistralShareURL: CreateAIShareURL = (opts) => {
  return `https://chat.mistral.ai/chat?q=${formatPrompt(opts)}`;
};
