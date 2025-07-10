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

## MCP: Cardano Tools via MeshSDK

This project exposes Cardano blockchain tools to AI agents and apps using the Model Context Protocol (MCP) and [meshsdk](https://meshsdk.dev/).

### What does it do?
- Provides an MCP server endpoint at `/mcp`.
- Lets AI clients (like Cursor) call Cardano tools such as:
  - `deserializeAddress`: Parse a Cardano address
  - `getAddressBalance`: Get ADA balance for an address
  - `getAddressUtxos`: List UTXOs for an address
  - ...and more

### Example: Use with Cursor
Add this to your Cursor MCP config:
```json
{
  "mcpServers": {
    "cardano-meshsdk": {
      "url": "http://localhost:3000/mcp"
    }
  }
}
```
Now you can ask Cursor to get Cardano balances, UTXOs, etc. via MCP!

### Local development
- Start the server: `npm run dev`
- MCP endpoint: `http://localhost:3000/mcp`

---
For more, see [`app/[transport]/route.ts`](app/[transport]/route.ts) or [meshsdk docs](https://meshsdk.dev/).
