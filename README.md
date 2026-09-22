# GFORCE-SECURITY

This repository has been set up with a minimal Node.js + TypeScript integration for OpenAI-compatible model APIs.

## What is included

- `package.json` with TypeScript tooling
- `src/config.ts` for environment configuration
- `src/openai.ts` that calls the model API
- `src/index.ts` as a simple entry point
- `.env.example` for secrets and model settings

## Setup

1. Copy `.env.example` to `.env`
2. Add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_key_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev -- "Explain how this repository could use AI securely"
   ```

## Optional custom endpoint

If you are using a proxy or Azure-compatible endpoint, set:

```bash
OPENAI_BASE_URL=https://your-openai-proxy.example.com/v1
OPENAI_MODEL=gpt-4o-mini
```

## Build

```bash
npm run build
npm start -- "Ask the model anything here"
```

This is the best starting point for an empty repo when you want a clean, production-friendly way to connect to an AI model API without locking the project to a single framework.
