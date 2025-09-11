export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        {/* Moving Neural Nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* AI Matrix Effect - Scrolling Code */}
      <div className="absolute right-0 top-0 h-full w-32 overflow-hidden opacity-10">
        <div className="animate-scroll-slow font-mono text-xs text-green-400 whitespace-nowrap">
          {Array.from({length: 50}, (_, i) => (
            <div key={i} className="py-1">
              {Math.random() > 0.5 ? 'AI_MODEL_TRAIN()' : 'NEURAL_PROCESS()'}
            </div>
          ))}
        </div>
      </div>
      
      {/* Glitch Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-cyan-400 opacity-30 animate-glitch"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-0.5 bg-pink-400 opacity-30 animate-glitch delay-700"></div>
      </div>
      
      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer">
          SIGNALSTACK
        </div>
        <div className="flex space-x-10">
          <a href="#thinking" className="text-gray-400 hover:text-cyan-400 font-black text-lg tracking-[0.3em] transition-all duration-300 hover:scale-110 hover:glow relative group">
            THINKING
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#projects" className="text-gray-400 hover:text-purple-400 font-black text-lg tracking-[0.3em] transition-all duration-300 hover:scale-110 relative group">
            PROJECTS
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#about" className="text-gray-400 hover:text-pink-400 font-black text-lg tracking-[0.3em] transition-all duration-300 hover:scale-110 relative group">
            ABOUT
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#connect" className="text-gray-400 hover:text-green-400 font-black text-lg tracking-[0.3em] transition-all duration-300 hover:scale-110 relative group">
            CONNECT
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-40 text-center">
        <div className="mb-16">
          <h1 className="text-[12rem] font-black leading-none mb-12 tracking-tighter">
            <span className="block text-white hover:scale-105 transition-transform duration-500">BUILDING</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse hover:animate-none hover:bg-gradient-to-l transition-all duration-700">
              AI FUTURES
            </span>
          </h1>
        </div>
        
        {/* AI-Powered Taglines */}
        <div className="text-3xl text-gray-300 mb-20 max-w-5xl mx-auto leading-relaxed space-y-6">
          <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300">
            <span className="text-cyan-400 font-black text-4xl animate-pulse">[SIGNAL]</span>
            <span className="text-white font-light">Pattern recognition in AI chaos</span>
          </div>
          <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300 delay-200">
            <span className="text-purple-400 font-black text-4xl animate-pulse">[STACK]</span>
            <span className="text-white font-light">Building products that understand humans</span>
          </div>
          <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300 delay-400">
            <span className="text-pink-400 font-black text-4xl animate-pulse">[FUTURE]</span>
            <span className="text-white font-light">Where intuition meets intelligence</span>
          </div>
        </div>
        {/* AI-Powered Action Buttons */}
        <div className="flex justify-center space-x-12 mb-8">
          <button className="group relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-16 py-6 rounded-3xl font-black text-2xl tracking-widest hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 border-2 border-transparent hover:border-cyan-400">
            <span className="relative z-10">EXPLORE INSIGHTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </button>
          <button className="group relative border-4 border-gradient bg-black text-white px-16 py-6 rounded-3xl font-black text-2xl tracking-widest hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 border-purple-400 hover:border-cyan-400">
            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">VIEW PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          </button>
        </div>
        
        {/* AI Status Indicator */}
        <div className="flex items-center justify-center space-x-3 text-green-400 font-mono text-lg">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span>AI_SYSTEMS_ONLINE</span>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* AI Thinking Preview - Bold Cards */}
      <section id="thinking" className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          AI INSIGHTS & PATTERNS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Human Preference Card - Bold Design */}
          <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              HUMAN PREFERENCE MODELING
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Why "accurate" AI isn't about being right—it's about understanding human values through annotation insights and subjective truth.
            </p>
          </div>

          {/* AI Pattern Recognition - Bold Design */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI PATTERN DECODING
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Identifying breakthrough patterns in AI development that others miss. From market trends to technical architectures.
            </p>
          </div>

          {/* Building in Public - Bold Design */}
          <div className="group bg-gradient-to-br from-green-900/30 to-emerald-800/20 backdrop-blur-xl p-8 rounded-3xl border border-green-500/20 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              BUILDING AI FUTURES
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey from AI research to startup founder. Building products that bridge human intuition and machine intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Bold CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-32 text-center">
        <div className="bg-gradient-to-r from-purple-800/40 via-pink-800/40 to-blue-800/40 backdrop-blur-2xl rounded-3xl p-16 border border-purple-500/30">
          <h2 className="text-4xl font-black mb-6 text-white">READY TO BUILD THE FUTURE?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Seeking AI PM opportunities and visionary co-founders for groundbreaking AI products.
          </p>
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-16 py-6 rounded-2xl font-black text-xl tracking-wide hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50">
            LET'S CONNECT
          </button>
        </div>
      </section>
    </main>
  )
}