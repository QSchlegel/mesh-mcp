'use client'

import { useState } from 'react'

export default function ApiTools() {
  const [selectedTool, setSelectedTool] = useState('deserializeAddress')

  const tools = {
    deserializeAddress: {
      title: 'Deserialize Address',
      description: 'Convert a Cardano address into its structured components',
      parameters: [
        { name: 'address', type: 'string', description: 'Cardano address to deserialize' }
      ],
      example: {
        input: 'addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x',
        output: `{
  "baseAddress": {
    "networkId": 1,
    "paymentCredential": {
      "type": "Key",
      "hash": "a178de9c5e3b5b2f"
    },
    "stakeCredential": {
      "type": "Key", 
      "hash": "c4b9265645faf2047"
    }
  }
}`
      }
    },
    getAddressBalance: {
      title: 'Get Address Balance',
      description: 'Retrieve the ADA balance and native tokens for a given address',
      parameters: [
        { name: 'address', type: 'string', description: 'Cardano address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'address: "addr1...", network: 1',
        output: `{
  "lovelace": "2000000",
  "assets": [
    {
      "unit": "b0d07d45fe9514f80213f4020e5a61241458be626841cde717cb38a76e7574636f696e",
      "quantity": "12"
    }
  ]
}`
      }
    },
    getAddressUtxos: {
      title: 'Get Address UTXOs',
      description: 'Fetch all unspent transaction outputs for an address',
      parameters: [
        { name: 'address', type: 'string', description: 'Cardano address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'address: "addr1...", network: 1',
        output: `[
  {
    "txHash": "a1b2c3d4...",
    "outputIndex": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "2000000"
      }
    ]
  }
]`
      }
    },
    getAddressTransactions: {
      title: 'Get Address Transactions',
      description: 'Get transaction history for a specific address',
      parameters: [
        { name: 'address', type: 'string', description: 'Cardano address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'address: "addr1...", network: 1',
        output: `[
  {
    "txHash": "e3b2c1a0...",
    "blockHeight": 8234567,
    "blockTime": 1640995200,
    "txIndex": 5
  }
]`
      }
    },
    getAccount: {
      title: 'Get Account Info',
      description: 'Retrieve account information for a stake address',
      parameters: [
        { name: 'stake_address', type: 'string', description: 'Stake address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'stake_address: "stake1...", network: 1',
        output: `{
  "active": true,
  "poolId": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy",
  "controlledAmount": "15000000000",
  "rewardsSum": "1234567"
}`
      }
    },
    getAccountRewards: {
      title: 'Get Account Rewards',
      description: 'Fetch reward history for a stake address',
      parameters: [
        { name: 'stake_address', type: 'string', description: 'Stake address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'stake_address: "stake1...", network: 1',
        output: `[
  {
    "epoch": 365,
    "amount": "1234567",
    "poolId": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
  }
]`
      }
    },
    getAccountUtxos: {
      title: 'Get Account UTXOs',
      description: 'Get UTXOs associated with a stake address',
      parameters: [
        { name: 'stake_address', type: 'string', description: 'Stake address to query' },
        { name: 'network', type: 'number', description: 'Network ID (0: preprod, 1: mainnet)' }
      ],
      example: {
        input: 'stake_address: "stake1...", network: 1',
        output: `[
  {
    "address": "addr1...",
    "txHash": "a1b2c3d4...",
    "outputIndex": 0,
    "amount": [
      {
        "unit": "lovelace",
        "quantity": "5000000"
      }
    ]
  }
]`
      }
    }
  }

  return (
    <section id="api-tools" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Available
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              API Tools
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore all available MCP tools for interacting with the Cardano blockchain. 
            Each tool provides structured data that AI models can easily understand and work with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tool List */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Tools</h3>
            <div className="space-y-2">
              {Object.entries(tools).map(([key, tool]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTool(key)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedTool === key
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="font-medium">{tool.title}</div>
                  <div className="text-sm opacity-80 mt-1">{tool.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tool Details */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {tools[selectedTool as keyof typeof tools].title}
              </h3>
              <p className="text-gray-300 mb-8">
                {tools[selectedTool as keyof typeof tools].description}
              </p>

              {/* Parameters */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                <div className="space-y-3">
                  {tools[selectedTool as keyof typeof tools].parameters.map((param, index) => (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-blue-400">{param.name}</span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {param.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{param.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Example</h4>
                
                {/* Input */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Input</h5>
                  <div className="bg-slate-900/70 border border-blue-500/30 rounded-lg p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{tools[selectedTool as keyof typeof tools].example.input}</code>
                    </pre>
                  </div>
                </div>

                {/* Output */}
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Output</h5>
                  <div className="bg-slate-900/70 border border-blue-500/30 rounded-lg p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{tools[selectedTool as keyof typeof tools].example.output}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Try it note */}
              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h6 className="text-blue-300 font-medium">Try it with AI</h6>
                    <p className="text-gray-300 text-sm mt-1">
                      Once set up, you can ask your AI assistant: 
                      <br />
                      <span className="font-mono text-blue-400">
                        &ldquo;What&rsquo;s the balance of address addr1...&rdquo;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-300">Total Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-300">Networks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">JSON</div>
              <div className="text-gray-300">Response Format</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Real-time</div>
              <div className="text-gray-300">Data Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}