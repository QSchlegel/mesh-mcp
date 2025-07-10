# Model Context Protocol (MCP) Setup Guide for Mesh-MCP

This guide explains how to set up the Model Context Protocol (MCP) with Mesh-MCP on popular development environments and AI assistants.

## What is MCP?

The Model Context Protocol (MCP) is an open standard that enables AI assistants to securely connect to external data sources and tools. Mesh-MCP implements this protocol to provide AI models with direct access to Cardano blockchain data.

## 🎯 Quick Setup Overview

1. **Get API Keys**: Sign up at [Blockfrost.io](https://blockfrost.io) to get your API keys
2. **Configure Your IDE**: Add Mesh-MCP to your IDE's MCP configuration
3. **Test Integration**: Ask your AI assistant about Cardano addresses and transactions

## 🔧 IDE-Specific Setup

### Cursor IDE

Cursor has built-in MCP support, making it the easiest to set up.

**Step 1: Access MCP Settings**
- Open Cursor
- Navigate to `Settings → MCP`
- Click "Add new global MCP server"

**Step 2: Add Configuration**
```json
{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/path/to/mesh-mcp/app/[transport]/route.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_project_id_here",
        "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_project_id_here"
      }
    }
  }
}
```

**Step 3: Test**
Ask Cursor: *"What's the balance of address addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x?"*

### Claude Desktop

Claude Desktop supports MCP through configuration files.

**Step 1: Locate Configuration File**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/claude/claude_desktop_config.json`

**Step 2: Edit Configuration**
Create or edit the file with:
```json
{
  "mcpServers": {
    "mesh-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/mesh-mcp/dist/index.js"],
      "env": {
        "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_project_id_here",
        "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_project_id_here"
      }
    }
  }
}
```

**Step 3: Restart Claude Desktop**
Close and reopen the application to load the new configuration.

### VS Code with Continue Extension

VS Code can use MCP through the Continue extension.

**Step 1: Install Continue**
```bash
code --install-extension continue.continue
```

**Step 2: Configure Continue**
Edit `~/.continue/config.json`:
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
        "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_project_id_here",
        "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_project_id_here"
      }
    }
  }
}
```

**Step 3: Reload VS Code**
- Press `Ctrl/Cmd + Shift + P`
- Type "Developer: Reload Window"
- Open Continue chat panel

### JetBrains IDEs (IntelliJ, WebStorm, etc.)

Currently, JetBrains IDEs don't have native MCP support, but you can use MCP through external tools:

**Option 1: Terminal Integration**
Run the MCP inspector in the terminal:
```bash
npx @modelcontextprotocol/inspector@latest node /path/to/mesh-mcp/dist/index.js
```

**Option 2: External AI Assistant**
Use Cursor or Claude Desktop alongside your JetBrains IDE for MCP functionality.

### Windsurf IDE

Windsurf supports MCP through configuration similar to Cursor.

**Step 1: Access Settings**
- Open Windsurf
- Navigate to Settings → MCP

**Step 2: Add Server Configuration**
```json
{
  "mesh-mcp": {
    "command": "node",
    "args": ["/path/to/mesh-mcp/dist/index.js"],
    "env": {
      "BLOCKFROST_PROJECT_ID_MAINNET": "mainnet_your_project_id_here",
      "BLOCKFROST_PROJECT_ID_PREPROD": "preprod_your_project_id_here"
    }
  }
}
```

## 🔑 Getting Blockfrost API Keys

1. **Sign Up**: Visit [blockfrost.io](https://blockfrost.io) and create an account
2. **Create Project**: 
   - Create a new project for mainnet
   - Create another project for preprod testnet
3. **Copy Keys**: Copy the project IDs (they start with `mainnet_` or `preprod_`)

## 🧪 Testing Your Setup

### Basic Test Commands

Once configured, try these questions with your AI assistant:

**Address Operations:**
- *"What's the balance of address addr1..."*
- *"Show me the UTXOs for address addr1..."*
- *"Get the transaction history for address addr1..."*

**Account Operations:**
- *"What's the staking information for stake1..."*
- *"Show me the rewards for stake1..."*

**Address Analysis:**
- *"Deserialize this Cardano address: addr1..."*

### Using MCP Inspector

For debugging and testing:
```bash
npx @modelcontextprotocol/inspector@latest node /path/to/mesh-mcp/dist/index.js
```

This opens a web interface where you can:
- View available tools
- Test tool calls manually
- Debug responses

## 🔧 Common Configuration Issues

### Path Problems
- **Issue**: "Command not found" errors
- **Solution**: Use absolute paths instead of relative paths

### Environment Variables
- **Issue**: API calls failing with authentication errors
- **Solution**: Verify your Blockfrost API keys are correct and have the right prefixes

### Network Configuration
- **Issue**: Wrong network data returned
- **Solution**: Ensure you're using the correct network parameter (0 for preprod, 1 for mainnet)

### File Permissions
- **Issue**: Permission denied when running Node.js
- **Solution**: Check file permissions and ensure Node.js is executable

## 🚀 Advanced Usage

### Custom Tool Queries

Ask complex questions like:
- *"Compare the staking rewards between stake1... and stake2..."*
- *"Analyze the spending pattern of addr1... over the last month"*
- *"What DeFi positions does addr1... have?"*

### Multi-Address Monitoring
- *"Monitor these 5 addresses and tell me if any receive more than 100 ADA"*
- *"Check the balance changes for all addresses in this list"*

### Portfolio Analysis
- *"Calculate the total value of all assets in addr1..."*
- *"What percentage of this address's portfolio is staked?"*

## 📚 Additional Resources

- **MCP Official Documentation**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Mesh SDK Documentation**: [meshjs.dev](https://meshjs.dev)
- **Blockfrost API Docs**: [docs.blockfrost.io](https://docs.blockfrost.io)
- **Cardano Developer Resources**: [developers.cardano.org](https://developers.cardano.org)

## 💡 Pro Tips

1. **Use Descriptive Names**: Name your MCP servers descriptively (e.g., "cardano-mainnet", "cardano-testnet")
2. **Environment Separation**: Use different configurations for development and production
3. **API Rate Limits**: Be aware of Blockfrost rate limits in your queries
4. **Error Handling**: If a query fails, check your API keys and network connectivity
5. **Network Selection**: Always specify the correct network (mainnet vs preprod) in your queries

## 🆘 Troubleshooting

**Connection Issues:**
- Verify file paths are absolute
- Check Node.js is installed and accessible
- Ensure environment variables are set correctly

**Authentication Issues:**
- Verify Blockfrost API keys
- Check key prefixes match the network
- Ensure keys have proper permissions

**Response Issues:**
- Verify network parameter (0 or 1)
- Check address format is valid
- Ensure the address exists on the specified network

---

Need help? Join our [Discord community](https://discord.gg/mesh) or check the [GitHub issues](https://github.com/your-org/mesh-mcp/issues).