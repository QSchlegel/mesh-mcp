export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Model Context Protocol for Cardano
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connect AI to
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cardano Blockchain
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Mesh MCP provides seamless integration between AI models and Cardano blockchain data. 
            Query addresses, UTXOs, transactions, and accounts directly from your AI assistant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Quick Setup Guide
            </button>
            <button className="border border-blue-500/30 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300">
              View Documentation
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Instant blockchain queries with optimized caching and efficient data structures.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-gray-300">Works with Cursor, Claude, and other MCP-compatible AI assistants out of the box.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-300">Built on proven Mesh SDK with enterprise-grade security and reliability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}