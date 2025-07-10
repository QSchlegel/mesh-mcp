export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-md"></div>
              <span className="text-xl font-semibold">Mesh MCP</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                API Tools
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Setup
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Examples
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Mesh MCP Server
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A Model Context Protocol server for seamless blockchain interactions with Cardano using MeshJS
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity">
              Get Started
            </button>
            <button className="border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              View Documentation
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick setup with MCP protocol for instant blockchain capabilities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built with security-first principles and battle-tested MeshJS
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Developer Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean APIs and comprehensive documentation for easy development
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-black dark:bg-white rounded"></div>
              <span className="font-semibold">Mesh MCP</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                MeshJS
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Mesh MCP. Built with MeshJS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
