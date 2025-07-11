import { deserializeAddress } from "@meshsdk/core";
import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";
import { getAddressBalance, getAddressUtxos, getAddressTransactions, getAccount, getAccountRewards, getAccountUtxos } from "@/app/_utils/blockfrost";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "deserializeAddress",
      "Deserialize an address into a structured object",
      {
        address: z.string(),
      },
      ({ address }) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(deserializeAddress(address), null, 2),
          },
        ],
      })
    );
    server.tool(
      "getAddressBalance",
      "Get the balance of an address on a given network (0: preprod, 1: mainnet)",
      {
        address: z.string(),
        network: z.number(),
      },
      async ({ address, network }) => {
        const result = await getAddressBalance(address, network);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }
    );
    server.tool(
      "getAddressUtxos",
      "Get the UTXOs for an address on a given network (0: preprod, 1: mainnet)",
      {
        address: z.string(),
        network: z.number(),
      },
      async ({ address, network }) => {
        const result = await getAddressUtxos(address, network);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }
    );
    server.tool(
      "getAddressTransactions",
      "Get the transactions for an address on a given network (0: preprod, 1: mainnet)",
      {
          address: z.string(),
          network: z.number(),
      },
      async ({ address, network }) => {
          const result = await getAddressTransactions(address, network);
          return {
              content: [
                  {
                      type: "text",
                      text: JSON.stringify(result, null, 2),
                  }
              ]
          };
      }
    );
    server.tool(
      "getAccount",
      "Get the account info for a stake address on a given network (0: preprod, 1: mainnet)",
      {
        stake_address: z.string(),
        network: z.number(),
      },
      async ({ stake_address, network }) => {
        const result = await getAccount(stake_address, network);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }
    );
    server.tool(
      "getAccountRewards",
      "Get the rewards for a stake address on a given network (0: preprod, 1: mainnet)",
      {
        stake_address: z.string(),
        network: z.number(),
      },
      async ({ stake_address, network }) => {
        const result = await getAccountRewards(stake_address, network);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }
    );
    server.tool(
      "getAccountUtxos",
      "Get the UTXOs for a stake address on a given network (0: preprod, 1: mainnet)",
      {
        stake_address: z.string(),
        network: z.number(),
      },
      async ({ stake_address, network }) => {
        const result = await getAccountUtxos(stake_address, network);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }
    );
  },
  {
    capabilities: {
      tools: {
        deserializeAddress: {
          description: "Deserialize an address into a structured object",
          parameters: {
            address: z.string(),
          },
        },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
