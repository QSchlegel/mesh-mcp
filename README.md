# Mesh MCP - Connect AI to Cardano Blockchain

A Model Context Protocol (MCP) server that seamlessly integrates Cardano blockchain data with AI assistants. Built with the powerful Mesh SDK, this MCP server enables AI models to query addresses, UTXOs, transactions, and account information directly from the Cardano blockchain.

## 🌟 Features

- **Address Operations**: Query balances, UTXOs, and transaction history
- **Account Management**: Access stake address information and rewards
- **Serialization Tools**: Deserialize Cardano addresses and data structures
- **Multi-Network Support**: Works with both mainnet and preprod testnet
- **Real-time Data**: Live blockchain information via Blockfrost integration
- **AI-Friendly**: Structured JSON responses optimized for AI understanding

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Blockfrost API keys ([Get them here](https://blockfrost.io))
- An MCP-compatible AI assistant (Cursor, Claude Desktop, etc.)

### Installation

1. **Clone and install dependencies**:
```bash
git clone https://github.com/your-org/mesh-mcp.git
cd mesh-mcp
npm install
```

2. **Set up environment variables**:
```bash
# Create .env file
BLOCKFROST_PROJECT_ID_MAINNET=mainnet_your_project_id_here
BLOCKFROST_PROJECT_ID_PREPROD=preprod_your_project_id_here
REDIS_URL=redis://localhost:6379
```

3. **Build and start the server**:
```bash
npm run build
npm run dev
```

## 🔧 IDE Setup Guides

### Cursor IDE

1. **Open Cursor Settings**: Navigate to `Settings → MCP`
2. **Add new MCP server** with this configuration:

```json
{
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
}
```

3. **Test the integration**: Ask Cursor "What is the balance of address addr1..."

### Claude Desktop

1. **Locate your Claude configuration file**:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **Linux**: `~/.config/claude/claude_desktop_config.json`

2. **Add MCP server configuration**:
```json
{
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
}
```

3. **Restart Claude Desktop** to load the new configuration

### VS Code with Continue

1. **Install Continue extension**:
```bash
code --install-extension continue.continue
```

2. **Configure Continue** (`~/.continue/config.json`):
```json
{
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
}
```

3. **Reload VS Code** and start using Continue chat

## 🛠️ Available Tools

### Address Operations

#### `deserializeAddress`
Convert a Cardano address into its structured components.

**Parameters:**
- `address` (string): Cardano address to deserialize

**Example:**
```javascript
// Input
"addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x"

// Output
{
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
}
```

#### `getAddressBalance`
Retrieve ADA balance and native tokens for an address.

**Parameters:**
- `address` (string): Cardano address to query
- `network` (number): Network ID (0: preprod, 1: mainnet)

#### `getAddressUtxos`
Fetch all unspent transaction outputs for an address.

#### `getAddressTransactions`
Get transaction history for a specific address.

### Account Operations

#### `getAccount`
Retrieve account information for a stake address.

**Parameters:**
- `stake_address` (string): Stake address to query
- `network` (number): Network ID (0: preprod, 1: mainnet)

#### `getAccountRewards`
Fetch reward history for a stake address.

#### `getAccountUtxos`
Get UTXOs associated with a stake address.

## 💬 AI Interaction Examples

Once set up, you can ask your AI assistant natural language questions:

### Basic Queries
```
"What's the balance of address addr1... on mainnet?"
"Show me the recent transactions for this address"
"How much staking rewards has stake1... earned?"
```

### Advanced Analysis
```
"Analyze the portfolio of addr1... and calculate the total value"
"Compare the staking rewards of stake1... vs stake2... over the last 5 epochs"
"What's the spending pattern of addr1... over the last month?"
```

## 🧪 Testing Your Setup

Use the MCP Inspector to test your server:

```bash
npx @modelcontextprotocol/inspector@latest \
  node /path/to/mesh-mcp/dist/index.js
```

## 📁 Project Structure

```
mesh-mcp/
├── app/
│   ├── [transport]/
│   │   └── route.ts          # MCP server implementation
│   ├── _lib/
│   │   └── blockfrostProvider.ts
│   ├── _utils/
│   │   └── blockfrost.ts     # Blockchain data utilities
│   ├── components/           # UI components
│   └── page.tsx             # Landing page
├── scripts/
│   └── test-client.mjs      # Test client
└── README.md
```

## 🔗 Key Dependencies

- **[@meshsdk/core](https://meshjs.dev)**: Cardano blockchain SDK
- **[@modelcontextprotocol/sdk](https://modelcontextprotocol.io)**: MCP protocol implementation
- **[@vercel/mcp-adapter](https://vercel.com)**: Vercel MCP adapter for deployment
- **Next.js**: React framework for the web interface
- **Blockfrost**: Cardano blockchain data provider

## 🌐 Network Support

- **Mainnet**: Production Cardano network
- **Preprod**: Test network for development

Set the `network` parameter to `1` for mainnet or `0` for preprod in your queries.

## 🚀 Deployment

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Production Deployment

The project is designed to work with various deployment platforms:

- **Vercel**: Deploy directly with the included configuration
- **Docker**: Containerized deployment
- **Traditional hosting**: Build and serve the static files

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BLOCKFROST_PROJECT_ID_MAINNET` | Blockfrost API key for mainnet | Yes |
| `BLOCKFROST_PROJECT_ID_PREPROD` | Blockfrost API key for preprod | Yes |
| `REDIS_URL` | Redis connection string | Optional |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [Mesh SDK Documentation](https://meshjs.dev)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Blockfrost API](https://blockfrost.io)
- [Cardano Developer Portal](https://developers.cardano.org)

## 🆘 Support

- **Documentation**: [meshjs.dev](https://meshjs.dev)
- **Discord**: [Join our community](https://discord.gg/mesh)
- **GitHub Issues**: [Report bugs or request features](https://github.com/your-org/mesh-mcp/issues)
- **Twitter**: [@meshsdk](https://twitter.com/meshsdk)

---

Built with ❤️ for the Cardano ecosystem using [Mesh SDK](https://meshjs.dev)
