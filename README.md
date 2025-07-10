This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Model Context Protocol (MCP) Integration

### What is MCP?

Model Context Protocol (MCP) is a standard interface that allows large language models (LLMs) to communicate with external tools and data sources. MCP enables developers to expose tools and APIs to LLMs in a standardized way, making it easy to connect your application to AI agents, IDEs, and chat apps that support MCP.

- [Official MCP Documentation](https://vercel.com/docs/mcp)

### How This Project Uses MCP

This project implements an MCP server using [`@vercel/mcp-adapter`](https://www.npmjs.com/package/@vercel/mcp-adapter). The server exposes several tools (such as address deserialization, balance lookup, and transaction queries) to any MCP-compatible client.

The main MCP handler is defined in [`app/[transport]/route.ts`](app/[transport]/route.ts). It registers tools and exposes them via the `/mcp` endpoint.

#### Example Tools Exposed

- `deserializeAddress`: Converts a blockchain address into a structured object.
- `getAddressBalance`: Fetches the balance for a given address.
- `getAddressUtxos`: Lists UTXOs for an address.
- ...and more.

### Running and Testing the MCP Server

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   The MCP server will be available at `http://localhost:3000/mcp`.

2. **Test with the MCP Inspector:**
   - Install the inspector:
     ```bash
     npx @modelcontextprotocol/inspector@latest http://localhost:3000
     ```
   - Open [http://127.0.0.1:6274](http://127.0.0.1:6274) in your browser.
   - Connect using the Streamable HTTP transport and the URL `http://localhost:3000/mcp`.

3. **Connect from an MCP Host (e.g., Cursor):**
   - Add your MCP server URL to your host’s configuration:
     ```json
     {
       "mcpServers": {
         "my-server": {
           "url": "http://localhost:3000/mcp"
         }
       }
     }
     ```

### Configuration Notes

- **Redis:** If using the SSE transport, set the `REDIS_URL` environment variable.
- **Endpoints:** The MCP server is available at `/mcp` (see `streamableHttpEndpoint` in `route.ts`).
- **Verbose Logging:** Enabled by default for easier debugging.

### References

- [MCP on Vercel Docs](https://vercel.com/docs/mcp)
- [@vercel/mcp-adapter NPM](https://www.npmjs.com/package/@vercel/mcp-adapter)
- [Model Context Protocol (MCP) with Next.js Template](https://vercel.com/templates/ai/model-context-protocol-mcp-with-next-js)
