# Karthik S Gowda Portfolio

Professional portfolio site with a React frontend, Express backend, and server-side AI chat endpoint.

## Chat Setup

The assistant reads AI provider keys only from server environment variables.

1. Copy `.env.example` to `.env` for local development.
2. Set `GROQ_API_KEY` to the active Groq key.
3. Keep provider keys out of source control and public client code.

For production, configure the same variables in the deployment provider.
