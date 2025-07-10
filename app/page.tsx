'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import SetupGuides from './components/SetupGuides'
import ApiTools from './components/ApiTools'
import CodeExample from './components/CodeExample'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <SetupGuides />
      <ApiTools />
      <CodeExample />
      <Footer />
    </div>
  )
}
