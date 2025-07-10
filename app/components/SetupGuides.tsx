'use client'

import { useState } from 'react'

export default function SetupGuides() {
  const [activeTab, setActiveTab] = useState('cursor')

  const guides = {
    cursor: {
      title: 'Cursor IDE',
      description: 'Set up Mesh MCP with Cursor for AI-powered Cardano development',
      steps: [
        {
          title: 'Open Cursor Settings',
          description: 'Navigate to Settings → MCP in Cursor',
          code: 'Cursor → Settings → MCP → Add new global MCP server'
        },
        {
          title: 'Add MCP Configuration',
          description: 'Add the following configuration to your MCP settings:',
          code: `{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/path/to/mesh-mcp/app/[transport]/route.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "your-mainnet-key",
        "BLOCKFROST_PROJECT_ID_PREPROD": "your-preprod-key"
      }
    }
  }
}`
        },
        {
          title: 'Environment Variables',
          description: 'Set up your Blockfrost API keys in environment variables:',
          code: `# Get your API keys from https://blockfrost.io
BLOCKFROST_PROJECT_ID_MAINNET=mainnet_your_project_id_here
BLOCKFROST_PROJECT_ID_PREPROD=preprod_your_project_id_here`
        },
        {
          title: 'Test the Integration',
          description: 'Open Cursor Chat and try asking about Cardano addresses:',
          code: 'Ask: "What is the balance of address addr1..."'
        }
      ]
    },
    claude: {
      title: 'Claude Desktop',
      description: 'Connect Mesh MCP with Claude Desktop application',
      steps: [
        {
          title: 'Locate Claude Configuration',
          description: 'Find your Claude Desktop configuration file:',
          code: `# macOS
~/Library/Application Support/Claude/claude_desktop_config.json

# Windows
%APPDATA%\\Claude\\claude_desktop_config.json

# Linux
~/.config/claude/claude_desktop_config.json`
        },
        {
          title: 'Add MCP Server Configuration',
          description: 'Edit the configuration file to include Mesh MCP:',
          code: `{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/mesh-mcp/dist/index.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "your-mainnet-key",
        "BLOCKFROST_PROJECT_ID_PREPROD": "your-preprod-key"
      }
    }
  }
}`
        },
        {
          title: 'Restart Claude Desktop',
          description: 'Restart the Claude Desktop application to load the new configuration.',
          code: 'Close and reopen Claude Desktop application'
        },
        {
          title: 'Verify Connection',
          description: 'Check that Mesh MCP tools are available in Claude:',
          code: 'You should see Cardano tools in the MCP section of Claude'
        }
      ]
    },
    vscode: {
      title: 'VS Code with Continue',
      description: 'Use Mesh MCP with VS Code through the Continue extension',
      steps: [
        {
          title: 'Install Continue Extension',
          description: 'Install the Continue extension from VS Code marketplace',
          code: 'code --install-extension continue.continue'
        },
        {
          title: 'Configure Continue',
          description: 'Edit your Continue configuration (~/.continue/config.json):',
          code: `{
  "models": [
    {
      "title": "Claude with MCP",
      "provider": "anthropic",
      "model": "claude-3-sonnet-20241022",
      "apiKey": "your-anthropic-api-key"
    }
  ],
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/path/to/mesh-mcp/dist/index.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "your-mainnet-key",
        "BLOCKFROST_PROJECT_ID_PREPROD": "your-preprod-key"
      }
    }
  }
}`
        },
        {
          title: 'Reload VS Code',
          description: 'Reload VS Code to apply the new configuration',
          code: 'Ctrl/Cmd + Shift + P → "Developer: Reload Window"'
        },
        {
          title: 'Test Integration',
          description: 'Use Continue chat to interact with Cardano blockchain',
          code: 'Open Continue chat and ask about Cardano addresses or transactions'
        }
      ]
    },
    local: {
      title: 'Local Development',
      description: 'Run Mesh MCP server locally for development and testing',
      steps: [
        {
          title: 'Clone the Repository',
          description: 'Clone the Mesh MCP repository and install dependencies:',
          code: `git clone https://github.com/your-org/mesh-mcp.git
cd mesh-mcp
npm install`
        },
        {
          title: 'Set Environment Variables',
          description: 'Create a .env file with your Blockfrost API keys:',
          code: `BLOCKFROST_PROJECT_ID_MAINNET=mainnet_your_project_id_here
BLOCKFROST_PROJECT_ID_PREPROD=preprod_your_project_id_here
REDIS_URL=redis://localhost:6379`
        },
        {
          title: 'Build and Start Server',
          description: 'Build the project and start the MCP server:',
          code: `npm run build
npm run dev
# Server will be available at http://localhost:3000`
        },
        {
          title: 'Test with MCP Inspector',
          description: 'Use the MCP Inspector to test your server:',
          code: `npx @modelcontextprotocol/inspector@latest \\
  node /path/to/mesh-mcp/dist/index.js`
        }
      ]
    }
  }

  const tabs = [
    { key: 'cursor', label: 'Cursor', icon: '⚡' },
    { key: 'claude', label: 'Claude Desktop', icon: '🤖' },
    { key: 'vscode', label: 'VS Code', icon: '💻' },
    { key: 'local', label: 'Local Dev', icon: '🛠️' }
  ]

  return (
    <section id="setup" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Setup Guide for
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Popular IDEs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these step-by-step guides to integrate Mesh MCP with your favorite development environment.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Guide Content */}
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {guides[activeTab as keyof typeof guides].title}
            </h3>
            <p className="text-gray-300 text-lg">
              {guides[activeTab as keyof typeof guides].description}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {guides[activeTab as keyof typeof guides].steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  {/* Code Block */}
                  <div className="bg-slate-900/70 border border-blue-500/30 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">📚 Additional Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://blockfrost.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Get Blockfrost API Keys
              </a>
              <a href="https://meshjs.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Mesh SDK Documentation
              </a>
              <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                → MCP Official Documentation
              </a>
              <a href="#api-tools" className="text-blue-400 hover:text-blue-300 transition-colors">
                → Available API Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}