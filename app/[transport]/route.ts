import { deserializeAddress } from "@meshsdk/core";
import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler( server => {
    server.tool(
        "deserializeAddress",
        "Deserialize an address into a structured object",
        {
            address: z.string(),
        },
        ({address}) => ({
            content:[
                {
                    type: "text",
                    text: JSON.stringify(deserializeAddress(address), null, 2),
                }
            ]
        })
    )
},{
    capabilities: {
        tools: {
            deserializeAddress: {
                description: "Deserialize an address into a structured object",
                parameters: {
                    address: z.string(),
                },
            },
        },
    }
}, {
    redisUrl: process.env.REDIS_URL,
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs:true,
    maxDuration: 60,
}
);

export { handler as GET, handler as POST, handler as DELETE };