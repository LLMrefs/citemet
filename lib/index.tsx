import {
  createAIModeShareURL,
  createChatGPTShareURL,
  createClaudeShareURL,
  createGeminiShareURL,
  createGrokShareURL,
  createMetaShareURL,
  createMistralShareURL,
  createPerplexityShareURL,
} from './ai-share-url';
import type { CreateAIShareURLOpts } from './types';

export const createAIShareURLs = (opts: CreateAIShareURLOpts) => ({
  chatgpt: createChatGPTShareURL(opts),
  perplexity: createPerplexityShareURL(opts),
  claude: createClaudeShareURL(opts),
  aiMode: createAIModeShareURL(opts),
  gemini: createGeminiShareURL(opts),
  grok: createGrokShareURL(opts),
  meta: createMetaShareURL(opts),
  mistral: createMistralShareURL(opts),
});

export const citemet = {
  createAIShareURLs,
};

export default citemet;
