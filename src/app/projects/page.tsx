export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto">
        <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer">
          SIGNALSTACK
        </a>
        <div className="flex space-x-8">
          <a href="/" className="text-gray-400 hover:text-cyan-400 font-medium text-sm tracking-wider transition-colors duration-300">
            HOME
          </a>
          <a href="/insights" className="text-gray-400 hover:text-purple-400 font-medium text-sm tracking-wider transition-colors duration-300">
            INSIGHTS
          </a>
          <a href="/projects" className="text-purple-400 font-medium text-sm tracking-wider transition-colors duration-300">
            PROJECTS
          </a>
          <a href="/#connect" className="text-gray-400 hover:text-green-400 font-medium text-sm tracking-wider transition-colors duration-300">
            CONNECT
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-16 text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Case studies and frameworks from building human-centered AI systems that understand what people actually need
          </p>
        </div>
      </section>

      {/* Project Status */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono">ACTIVE_PROJECTS: 3</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-mono">IN_DEVELOPMENT: 2</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono">FRAMEWORKS: 4</span>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse mr-4"></div>
            <span className="text-purple-400 font-mono text-sm">FEATURED_PROJECT</span>
            <div className="ml-auto text-sm text-gray-400">Ongoing Research</div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Human Preference Modeling Framework
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Current AI systems optimize for metrics that don't capture what humans actually want. A "helpful" response 
                varies dramatically based on context, expertise level, cultural background, and individual preferences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through data annotation work, I discovered that expert disagreement isn't noise—it's the most valuable 
                signal for understanding human preference diversity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A multi-dimensional preference modeling system that captures context-dependent human values instead of 
                flattening them into binary good/bad ratings.
              </p>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Key Innovation</h4>
                <p className="text-sm text-gray-300">
                  Instead of asking "Is this response good?", we ask "For whom, in what context, and according to which values?"
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-cyan-800/20 to-cyan-700/10 p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Context Modeling</h4>
              <p className="text-sm text-gray-300">
                Capturing situational factors that influence preference: urgency, expertise level, cultural context
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 p-6 rounded-xl border border-green-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Value Alignment</h4>
              <p className="text-sm text-gray-300">
                Identifying underlying human values that drive preferences: efficiency vs. thoroughness, creativity vs. accuracy
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-800/20 to-pink-700/10 p-6 rounded-xl border border-pink-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Dynamic Adaptation</h4>
              <p className="text-sm text-gray-300">
                AI systems that learn and adapt to individual user preferences without losing generalizability
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Machine Learning</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">User Research</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Preference Modeling</span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">AI Ethics</span>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105">
            View Detailed Case Study
          </button>
        </div>
      </section>

      {/* Project Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project 1: Data Annotation Insights */}
          <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-cyan-400 font-mono text-sm">CASE_STUDY</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Subjectivity of AI Quality
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              How data annotation work revealed that expert disagreement is a feature, not a bug—and what this means for AI training.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">Data Science</span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">Quality Metrics</span>
            </div>
            <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
              Read Case Study →
            </button>
          </div>

          {/* Project 2: AI Product Strategy */}
          <div className="group bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-green-400 font-mono text-sm">FRAMEWORK</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Human-Centered AI Strategy
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              A strategic framework for building AI products that prioritize human values alongside technical capabilities.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Product Strategy</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">PM Framework</span>
            </div>
            <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
              View Framework →
            </button>
          </div>

          {/* Project 3: Context-Aware Systems */}
          <div className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-blue-400 font-mono text-sm">RESEARCH</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Context-Aware AI Systems
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Building AI that understands situational context to provide more relevant and helpful responses.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Context Modeling</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">AI Architecture</span>
            </div>
            <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
              Learn More →
            </button>
          </div>

          {/* Project 4: Industry Analysis */}
          <div className="group bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-pink-400 font-mono text-sm">ANALYSIS</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Transformation Patterns
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              How AI is reshaping product development workflows and team dynamics across the tech industry.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Industry Analysis</span>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Trends</span>
            </div>
            <button className="text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
              Read Analysis →
            </button>
          </div>

          {/* Project 5: Coming Soon */}
          <div className="group bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-yellow-400 font-mono text-sm">IN_DEVELOPMENT</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Ethics Toolkit
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Practical tools and frameworks for implementing ethical AI practices in product development teams.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">AI Ethics</span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Tools</span>
            </div>
            <div className="text-yellow-400 text-sm font-medium">
              Coming Q2 2025
            </div>
          </div>

          {/* Project 6: Open Source */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-purple-400 font-mono text-sm">OPEN_SOURCE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Preference Modeling Library
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Open-source Python library for implementing context-aware preference modeling in AI systems.
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Open Source</span>
            </div>
            <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
              View on GitHub →
            </button>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo-section" className="relative z-10 max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          See My Work in Action
        </h2>
        
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-blue-400 font-mono text-sm">LIVE_DEMO</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Toolbox Demo
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Watch me demonstrate a practical AI toolbox that showcases user-friendly design and real-world application. 
                This 3-minute demo shows how I approach building AI tools that solve business problems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">AI Tools</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Enterprise PM</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">User Experience</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Practical Application</span>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <p className="text-sm text-blue-200">
                  <strong>Key Highlights:</strong> User-centered design, practical AI implementation, 
                  clear demonstration of complex concepts, and focus on solving real business needs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-600/20">
                <iframe 
                  src="https://www.youtube.com/embed/3fAug-tgT5E"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-64 rounded-lg"
                  title="AI Toolbox Demo by Crystal Wang"
                ></iframe>
                <div className="mt-3 text-center">
                  <p className="text-xs text-gray-400">2min 55sec • Screen + Camera Recording</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            This demo showcases my approach to building practical AI solutions that bridge technical capability with user needs.
          </p>
          <a 
            href="https://www.youtube.com/watch?v=3fAug-tgT5E" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
          >
            Watch on YouTube →
          </a>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Interested in Collaborating?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing these projects, sharing insights, or exploring potential collaborations on human-centered AI research.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#demo-section" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Watch Live Demo
            </a>
            <a href="/#connect" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}