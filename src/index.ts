import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { server } from './mcp-server'

// Start the server
async function main() {
  const transport = new StdioServerTransport()

  // 他會攔截所有 stdout，所以你的 code 不能使用任何 console.log
  // 否則會被輸出為 MCP 的 response
  await server.connect(transport)
  console.error('Weather MCP Server running on stdio')
}

main().catch((error) => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})
