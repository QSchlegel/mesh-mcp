import { v4 as uuidv4 } from "uuid";
import { deserializeAddress } from "@meshsdk/core";
import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";
import { getAddressBalance, getAddressUtxos, getAddressTransactions, getAccount, getAccountRewards, getAccountUtxos } from "@/app/_utils/blockfrost";
import type { ProviderContext } from "@/app/_lib/blockfrostProvider";

// In-memory store for session keys
const sessionKeys = new Map(); // uuid -> { mainnetKey, preprodKey }

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "setupSession",
      "Setup a session with optional Blockfrost keys. Returns a session UUID.",
      {
        mainnetKey: z.string().optional(),
        preprodKey: z.string().optional(),
      },
      ({ mainnetKey, preprodKey }) => {
        const sessionId = uuidv4();
        sessionKeys.set(sessionId, { mainnetKey, preprodKey });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ sessionId }),
            },
          ],
        };
      }
    );
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAddressBalance(address, context);
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAddressUtxos(address, context);
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAddressTransactions(address, context);
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ stake_address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAccount(stake_address, context);
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ stake_address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAccountRewards(stake_address, context);
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
        sessionId: z.string().uuid().optional(),
      },
      async ({ stake_address, network, sessionId }) => {
        let context: ProviderContext = { network };
        if (sessionId && sessionKeys.has(sessionId)) {
          const { mainnetKey, preprodKey } = sessionKeys.get(sessionId);
          context = { network, mainnetKey, preprodKey };
        }
        const result = await getAccountUtxos(stake_address, context);
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
