'use client'

import { useState } from 'react'

export default function CodeExample() {
  const [activeExample, setActiveExample] = useState('basic')

  const examples = {
    basic: {
      title: 'Basic Setup',
      description: 'Simple MCP server configuration',
      code: `import { createMcpHandler } from "@vercel/mcp-adapter";
import { deserializeAddress } from "@meshsdk/core";
import { getAddressBalance } from "@/app/_utils/blockfrost";
import z from "zod";

const handler = createMcpHandler((server) => {
  // Deserialize Cardano addresses
  server.tool(
    "deserializeAddress",
    "Deserialize an address into a structured object",
    { address: z.string() },
    ({ address }) => ({
      content: [{
        type: "text",
        text: JSON.stringify(deserializeAddress(address), null, 2),
      }],
    })
  );

  // Get address balance
  server.tool(
    "getAddressBalance",
    "Get the balance of an address on a given network",
    { 
      address: z.string(),
      network: z.number()
    },
    async ({ address, network }) => {
      const result = await getAddressBalance(address, network);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(result, null, 2),
        }],
      };
    }
  );
});

export { handler as GET, handler as POST };`
    },
    ai_interaction: {
      title: 'AI Interaction Examples',
      description: 'How to use with AI assistants',
      code: `// Example conversations with your AI assistant

// 1. Check address balance
User: "What's the balance of addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x on mainnet?"

AI: I'll check the balance for that address on Cardano mainnet.
[Uses getAddressBalance tool]

Result: The address has 2.5 ADA and several native tokens including...

// 2. Get transaction history
User: "Show me the recent transactions for this address"

AI: [Uses getAddressTransactions tool]
The address has recent transactions including:
- Transaction hash: e3b2c1a0...
- Block height: 8,234,567
- Amount: 1.5 ADA

// 3. Check stake rewards
User: "How much staking rewards has stake1u8a9qstrmj4rvc3k5z8fems7f0j2vzremv9jq4zjgksu9cq7vs5gp earned?"

AI: [Uses getAccountRewards tool]
This stake address has earned:
- Total rewards: 12.34 ADA
- Latest epoch reward: 0.15 ADA`
    },
    configuration: {
      title: 'IDE Configuration',
      description: 'Complete setup for different IDEs',
      code: `// Cursor MCP Configuration
// File: cursor_config.json
{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/path/to/mesh-mcp/dist/index.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_key_here",
        "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_key_here"
      }
    }
  }
}

// Claude Desktop Configuration
// File: claude_desktop_config.json
{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node", 
      "args": ["/absolute/path/to/mesh-mcp/dist/index.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_key_here",
        "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_key_here"
      }
    }
  }
}

// Environment Variables (.env)
BLOCKFROST_PROJECT_ID_MAINNET=mainnet_your_project_id_here
BLOCKFROST_PROJECT_ID_PREPROD=preprod_your_project_id_here
REDIS_URL=redis://localhost:6379

// Test Connection
npx @modelcontextprotocol/inspector@latest \\
  node /path/to/mesh-mcp/dist/index.js`
    },
    advanced: {
      title: 'Advanced Usage',
      description: 'Complex queries and data analysis',
      code: `// Advanced AI queries you can make

// 1. Portfolio Analysis
"Analyze the portfolio of addr1... and calculate the total value in USD"

// The AI will:
// - Get address balance
// - Identify all native tokens
// - Calculate ADA value
// - Provide portfolio breakdown

// 2. Staking Performance
"Compare the staking rewards of stake1... vs stake2... over the last 5 epochs"

// The AI will:
// - Get account rewards for both addresses
// - Calculate average rewards per epoch
// - Compare performance metrics

// 3. Transaction Pattern Analysis  
"What's the spending pattern of addr1... over the last month?"

// The AI will:
// - Get transaction history
// - Analyze transaction amounts and frequency
// - Identify spending patterns

// 4. Multi-Address Monitoring
"Monitor these 5 addresses and alert me if any receive more than 100 ADA"

// The AI will:
// - Check balances for all addresses
// - Compare with previous balances
// - Identify significant changes

// 5. DeFi Position Tracking
"What DeFi positions does addr1... have across different protocols?"

// The AI will:
// - Analyze UTXOs for smart contract interactions
// - Identify protocol-specific tokens
// - Calculate position values`
    }
  }

  const tabs = [
    { key: 'basic', label: 'Basic Setup', icon: '🚀' },
    { key: 'ai_interaction', label: 'AI Interaction', icon: '💬' },
    { key: 'configuration', label: 'Configuration', icon: '⚙️' },
    { key: 'advanced', label: 'Advanced', icon: '🔥' }
  ]

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Code Examples &
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Usage Patterns
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how to implement and use Mesh MCP with practical examples and real-world usage patterns.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveExample(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeExample === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Code Example */}
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-2">
              {examples[activeExample as keyof typeof examples].title}
            </h3>
            <p className="text-gray-300">
              {examples[activeExample as keyof typeof examples].description}
            </p>
          </div>

          {/* Code */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button 
                className="bg-slate-700 hover:bg-slate-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
                onClick={() => navigator.clipboard.writeText(examples[activeExample as keyof typeof examples].code)}
              >
                Copy
              </button>
            </div>
            <div className="bg-slate-900/70 p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300">
                <code>{examples[activeExample as keyof typeof examples].code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow our setup guide to integrate Mesh MCP with your preferred IDE and start building 
              AI-powered Cardano applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Start Setup Guide
              </button>
              <button className="border border-blue-500/30 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}