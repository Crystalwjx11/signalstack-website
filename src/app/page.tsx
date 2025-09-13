export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative">
      {/* Subtle Paper Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Minimalist Accent Lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 opacity-60"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gray-200"></div>
      
      
      {/* Clean Minimalist Header */}
      <nav className="relative z-10 flex justify-between items-center py-8 px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="text-3xl font-space-grotesk font-bold text-gray-900 hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
          SignalStack
        </div>
        <div className="flex space-x-10">
          <a href="/insights" className="text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-300">
            Insights
          </a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300">
            Projects
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300">
            About
          </a>
          <a href="#connect" className="text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 hover:after:w-full after:transition-all after:duration-300">
            Connect
          </a>
        </div>
      </nav>

      {/* Editorial Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-600 font-inter font-medium text-sm uppercase tracking-wider">AI Experimentation & Pattern Recognition</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold text-gray-900 leading-tight">
                Decoding AI behavior to build human-centric systems
              </h1>
              <p className="text-xl text-gray-600 font-inter leading-relaxed">
                Through experimentation and pattern recognition, I decode the signals that reveal how different AIs think and behave, serving the critical need to build truly human-centric AI systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/projects#demo-section" className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 font-inter font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                View My Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/insights/data-shapes-personality" className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 font-inter font-medium hover:bg-gray-900 hover:text-white transition-all duration-200">
                Read Latest Insights
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-gray-900 mb-2">Pattern Recognition in AI Behavior</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">When AI systems respond differently to the same prompt, I decode these patterns to understand how different training approaches shape AI behavior.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-gray-900 mb-2">Human-Centric Experimentation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Through systematic testing, I explore how AI can better serve diverse human needs across different contexts and cultures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-space-grotesk font-semibold text-gray-900 mb-2">Learning Through Practice</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Every experiment teaches me something new about making AI systems that genuinely understand and serve human needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-emerald-100 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats & Status Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a href="/projects#demo-section" className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-space-grotesk font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 text-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
            <span className="flex items-center justify-center">
              See How I Think
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a href="/insights/data-shapes-personality" className="group border-2 border-purple-500 text-purple-300 px-10 py-4 rounded-xl font-space-grotesk font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-center hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            <span className="flex items-center justify-center">
              LLM Personality Study
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group bg-gradient-to-br from-blue-800/30 to-blue-700/20 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/30 text-center hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="text-3xl font-space-grotesk font-black text-blue-400 mb-2">3</div>
            <div className="text-sm text-gray-300 font-inter font-medium">AI Experiments Running</div>
          </div>
          <div className="group bg-gradient-to-br from-purple-800/30 to-purple-700/20 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30 text-center hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-space-grotesk font-black text-purple-400 mb-2">∞</div>
            <div className="text-sm text-gray-300 font-inter font-medium">Questions Asked Daily</div>
          </div>
          <div className="group bg-gradient-to-br from-amber-800/30 to-amber-700/20 backdrop-blur-lg p-6 rounded-2xl border border-amber-500/30 text-center hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-3xl font-space-grotesk font-black text-amber-400 mb-2">1</div>
            <div className="text-sm text-gray-300 font-inter font-medium">Human-Centric Focus</div>
          </div>
        </div>

        {/* Curiosity Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-blue-400 font-mono text-sm opacity-80">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span>CURIOSITY_DRIVEN_EXPLORATION</span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* My Focus Areas */}
      <section id="thinking" className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-black text-white mb-6 tracking-tight">
            What I'm Exploring
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Decoding the patterns and signals that reveal how AI systems think, behave, and can better serve human needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Human Preferences */}
          <a href="/projects/preference-modeling" className="group relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:rotate-1 block cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Human Preference Modeling
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter text-base">
                Developing frameworks to capture nuanced, context-dependent preferences that make AI responses genuinely helpful. 
                Understanding the complexity behind human judgment and translating it into better AI systems.
              </p>
              <div className="bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-xl p-6 border border-purple-400/20 backdrop-blur-sm">
                <p className="text-purple-300 font-space-grotesk font-semibold mb-3 text-sm uppercase tracking-wider">Key Insight</p>
                <p className="text-purple-100 font-inter leading-relaxed">
                  "Good" varies by person, context, and culture. A helpful AI response for a CEO differs from one for a student, 
                  even when asking the same question. Current preference modeling often misses this nuance.
                </p>
              </div>
            </div>
          </a>

          {/* Subjective Truth */}
          <a href="/insights/data-shapes-personality" className="group relative bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-lg p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:-rotate-1 block cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                AI Quality & Human Values
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter text-base">
                When experts disagree on what's "correct," I decode these signals to understand how human values shape AI quality.
                Every disagreement reveals patterns that help build systems serving real human needs.
              </p>
              <div className="bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20 backdrop-blur-sm">
                <p className="text-blue-300 font-space-grotesk font-semibold mb-3 text-sm uppercase tracking-wider">Real Example</p>
                <p className="text-blue-100 font-inter leading-relaxed">
                  In data annotation, disagreement between experts isn't noise—it's signal. A creative writing prompt 
                  might have 5 equally valid "correct" responses, each reflecting different human values and preferences.
                </p>
              </div>
            </div>
          </a>

          {/* Product Strategy */}
          <a href="/insights/human-centered-ai-strategy" className="group relative bg-gradient-to-br from-green-900/30 to-emerald-800/20 backdrop-blur-lg p-8 rounded-3xl border border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:rotate-1 block cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Human-Centered AI Strategy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter text-base">
                Applying product management principles to AI development. Creating strategies for user-centered AI design 
                where technology adapts to human needs, not the other way around.
              </p>
              <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl p-6 border border-green-400/20 backdrop-blur-sm">
                <p className="text-green-300 font-space-grotesk font-semibold mb-3 text-sm uppercase tracking-wider">Strategy Framework</p>
                <p className="text-green-100 font-inter leading-relaxed">
                  Instead of asking "How can users adapt to our AI?" ask "How can our AI better understand what users actually need?" 
                  This shift transforms everything from product roadmaps to success metrics.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-black text-white mb-6 tracking-tight">
            Featured Work & Insights
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Practical experiments focused on making AI systems that genuinely understand and serve human needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Data Annotation Case Study */}
          <div className="group relative bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-lg p-10 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-900/40 transition-all duration-500 hover:scale-105 hover:-rotate-1 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse mr-4 shadow-lg shadow-cyan-400/50"></div>
                <span className="text-cyan-300 font-jetbrains-mono text-sm font-semibold tracking-wider uppercase">Case Study</span>
              </div>
              <h3 className="text-3xl font-space-grotesk font-black text-white mb-6">
                The Subjectivity of AI Quality
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-inter text-lg">
                Through hands-on data annotation work, I discovered that "good AI" isn't about universal correctness—it's about understanding diverse human perspectives. When experts disagree on the "right" answer, we're seeing human values at work, not data quality issues.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/25 to-blue-500/20 text-cyan-200 rounded-full text-sm font-inter font-medium border border-cyan-400/20">Human Preferences</span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/25 to-blue-500/20 text-cyan-200 rounded-full text-sm font-inter font-medium border border-cyan-400/20">Data Annotation</span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/25 to-blue-500/20 text-cyan-200 rounded-full text-sm font-inter font-medium border border-cyan-400/20">AI Quality</span>
              </div>
              <a href="/insights/data-shapes-personality" className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                Read Case Study
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Preference Modeling Framework */}
          <div className="group relative bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-900/40 transition-all duration-500 hover:scale-105 hover:rotate-1 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse mr-4 shadow-lg shadow-purple-400/50"></div>
                <span className="text-purple-300 font-jetbrains-mono text-sm font-semibold tracking-wider uppercase">Framework</span>
              </div>
              <h3 className="text-3xl font-space-grotesk font-black text-white mb-6">
                Context-Aware Preference Systems
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-inter text-lg">
                Developing frameworks that capture nuanced, context-dependent human preferences rather than flattening them into binary metrics. These systems understand that the "best" AI response varies by user, situation, and cultural context.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/25 to-pink-500/20 text-purple-200 rounded-full text-sm font-inter font-medium border border-purple-400/20">Preference Modeling</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/25 to-pink-500/20 text-purple-200 rounded-full text-sm font-inter font-medium border border-purple-400/20">Context Analysis</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/25 to-pink-500/20 text-purple-200 rounded-full text-sm font-inter font-medium border border-purple-400/20">User Testing</span>
              </div>
              <a href="/projects/preference-modeling" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                View Framework
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Strategy Work */}
          <div className="group relative bg-gradient-to-br from-green-900/30 to-emerald-800/20 backdrop-blur-lg p-10 rounded-3xl border border-green-500/30 hover:border-green-400/60 hover:bg-green-900/40 transition-all duration-500 hover:scale-105 hover:-rotate-1 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-4 shadow-lg shadow-green-400/50"></div>
                <span className="text-green-300 font-jetbrains-mono text-sm font-semibold tracking-wider uppercase">Strategy</span>
              </div>
              <h3 className="text-3xl font-space-grotesk font-black text-white mb-6">
                Human-Centered AI Product Strategy
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed font-inter text-lg">
                Applying program management principles to AI development, creating strategies where technology adapts to human needs. Building roadmaps that prioritize human values alongside technical capabilities.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/25 to-emerald-500/20 text-green-200 rounded-full text-sm font-inter font-medium border border-green-400/20">Product Strategy</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/25 to-emerald-500/20 text-green-200 rounded-full text-sm font-inter font-medium border border-green-400/20">Program Management</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/25 to-emerald-500/20 text-green-200 rounded-full text-sm font-inter font-medium border border-green-400/20">AI Ethics</span>
              </div>
              <a href="/insights/human-centered-ai-strategy" className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                Read Strategy Guide
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tech Industry Insights */}
          <div className="group bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 hover:bg-pink-900/30 transition-all duration-300 hover:scale-105 relative z-10">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-pink-400 font-mono text-sm">INSIGHTS</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Tech Industry AI Transformation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leveraging years of program management experience in tech to identify patterns in how AI is reshaping product development, team dynamics, and user expectations across the industry.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/25 to-red-500/20 text-pink-200 rounded-full text-sm font-inter font-medium border border-pink-400/20">Industry Analysis</span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/25 to-red-500/20 text-pink-200 rounded-full text-sm font-inter font-medium border border-pink-400/20">Tech Leadership</span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/25 to-red-500/20 text-pink-200 rounded-full text-sm font-inter font-medium border border-pink-400/20">AI Adoption</span>
            </div>
            <a href="/insights/ai-personality-experiment" className="inline-flex items-center bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold hover:from-pink-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40">
              View Analysis
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Current Projects Preview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Currently Building</h3>
          <a href="/projects/case-studies" className="block bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-yellow-400 font-mono text-sm">IN_DEVELOPMENT</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse ml-2"></div>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              Developing frameworks and tools that help AI teams better understand and integrate human preferences into their systems. 
              Open to collaborations and conversations about human-centered AI approaches.
            </p>
            <div className="text-sm text-yellow-400 font-mono hover:text-yellow-300 transition-colors">
              View Case Studies & Tools →
            </div>
          </a>
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-yellow-800/20 to-orange-800/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
            <h2 className="text-2xl font-bold text-white">Currently Exploring</h2>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse ml-3"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">This Week's Question</h3>
              <p className="text-gray-300 text-sm">
                "How do we measure AI 'helpfulness' when different people need completely different things from the same query?"
              </p>
            </div>
            
            <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
              <h3 className="text-lg font-semibold text-orange-300 mb-2">Current Experiment</h3>
              <p className="text-gray-300 text-sm">
                Testing how context changes what people consider "accurate" vs "useful" in AI responses.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a 
              href="/projects#demo-section" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-space-grotesk font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Watch My Latest Demo
            </a>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm italic">
              "The best questions are the ones that make you realize how little you actually knew before asking them."
            </p>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          About the Signal Hunter
        </h2>
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-12 border border-gray-600/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></div>
                <h3 className="text-xl font-bold text-white">Crystal Wang</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I used to think AI was about perfect algorithms. Then I started experimenting with data annotation and discovered something fascinating:
                when "experts" disagree, they're revealing the hidden complexity of human values. This became my focus.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm not a researcher—I'm someone who learns by doing. Through hands-on experimentation and pattern recognition,
                I decode the signals that show how different AIs think and behave, always with one goal: building systems that truly serve human needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">Program Management</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">AI Strategy</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">Pattern Recognition</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Open To</h4>
                <p className="text-gray-300 text-sm">
                  Collaborations, conversations about human-centric AI, and opportunities to learn from real-world AI experiments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-black text-white mb-6 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
            Always open to discussing AI, sharing insights, or exploring new opportunities.
          </p>
        </div>

        {/* Simplified Email Contact */}
        <div className="max-w-2xl mx-auto">
          <div className="group relative bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-800/30 backdrop-blur-lg p-12 rounded-3xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-space-grotesk font-bold text-white mb-4">
                Drop me a line
              </h3>
              
              <p className="text-gray-300 mb-8 font-inter text-lg leading-relaxed">
                Whether you want to discuss AI systems, share interesting findings, or explore collaboration opportunities—I'd love to hear from you.
              </p>
              
              <a href="mailto:crystal@signalstack.ai" className="group inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-space-grotesk font-semibold text-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 mb-6">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                crystal@signalstack.ai
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-600/20">
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  Usually respond within 24-48 hours
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <a href="https://linkedin.com/in/crystalwang-ai" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4 text-white">Learning in Public, Building for the Future</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Every experiment I run, every pattern I decode, every signal I interpret serves one purpose: building AI that genuinely helps people.
            Join me in this mission to create technology that adapts to human needs, not the other way around.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/projects" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              View My Projects
            </a>
            <a href="#connect" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}