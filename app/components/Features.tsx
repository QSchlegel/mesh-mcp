export default function Features() {
  const features = [
    {
      title: "Address Operations",
      description: "Query address balances, UTXOs, and transaction history across Cardano networks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ["Get address balance", "Fetch UTXOs", "Transaction history", "Multi-network support"]
    },
    {
      title: "Account Management",
      description: "Access stake address information, rewards, and delegation details",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: ["Stake address info", "Reward history", "Delegation status", "Account UTXOs"]
    },
    {
      title: "Serialization Tools",
      description: "Deserialize Cardano addresses and handle complex data structures",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["Address deserialization", "Data structure parsing", "Network detection", "Format validation"]
    },
    {
      title: "Network Support",
      description: "Support for both Cardano mainnet and preprod testnet environments",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ["Mainnet support", "Preprod testnet", "Automatic detection", "Environment switching"]
    },
    {
      title: "Real-time Data",
      description: "Access up-to-date blockchain information with reliable data providers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ["Live blockchain data", "Blockfrost integration", "Fast response times", "Reliable uptime"]
    },
    {
      title: "Developer Friendly",
      description: "Built with TypeScript and modern development practices for easy integration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ["TypeScript support", "Modern SDK", "Comprehensive docs", "Easy deployment"]
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cardano Integration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to connect AI models with Cardano blockchain data through 
            the Model Context Protocol.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

              {/* Feature List */}
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">7</div>
            <div className="text-gray-300">Available Tools</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-gray-300">Networks Supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">&lt; 100ms</div>
            <div className="text-gray-300">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}