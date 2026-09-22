import { askModel } from './openai.js';

async function main() {
  const input = process.argv.slice(2).join(' ') || 'Summarize how this repository could use AI safely.';

  try {
    const result = await askModel(
      input,
      'You are an expert engineering assistant. Respond clearly and concisely.'
    );

    console.log(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Model call failed: ${message}`);
    process.exit(1);
  }
}

main();
