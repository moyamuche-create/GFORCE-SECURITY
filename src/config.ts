import 'dotenv/config';

export const config = {
  apiKey: process.env.OPENAI_API_KEY ?? '',
  model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
  baseUrl: process.env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1'
};

export function ensureModelConfig() {
  if (!config.apiKey) {
    throw new Error(
      'Missing OPENAI_API_KEY. Copy .env.example to .env and add your API key.'
    );
  }
}
