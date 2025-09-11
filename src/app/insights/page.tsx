export default function Insights() {
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
          <a href="/insights" className="text-cyan-400 font-medium text-sm tracking-wider transition-colors duration-300">
            INSIGHTS
          </a>
          <a href="/projects" className="text-gray-400 hover:text-purple-400 font-medium text-sm tracking-wider transition-colors duration-300">
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
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into human-centered AI development, preference modeling, and the future of human-AI collaboration
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-12">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-purple-400 font-mono text-sm">FEATURED_INSIGHT</span>
            <div className="ml-auto text-sm text-gray-400">5 min read</div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Why AI "Accuracy" is a Human Problem, Not a Technical One
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Through my work in data annotation, I discovered that when AI experts disagree on the "correct" answer, 
            we're not seeing a data quality problem—we're seeing human values in action. This insight fundamentally 
            changes how we should approach AI development.
          </p>
          <div className="bg-purple-500/10 rounded-lg p-6 border-l-4 border-purple-400 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">The Annotation Revelation</h3>
            <p className="text-gray-300 leading-relaxed">
              During a creative writing AI evaluation project, five PhD-level annotators provided completely different 
              "correct" responses to the same prompt. Initially, this looked like a problem to solve. But it wasn't—it was 
              the most important signal in the entire dataset.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Human Preferences</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Data Annotation</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">AI Quality</span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105">
            Read Full Article
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">Latest Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Article 1 */}
          <article className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-cyan-400 font-mono text-xs">FRAMEWORK</span>
              <div className="ml-auto text-xs text-gray-400">8 min read</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Building Context-Aware Preference Systems
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              How to capture nuanced human preferences that vary by context, culture, and individual needs. 
              A framework for moving beyond binary "good/bad" metrics.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">Preference Modeling</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">UX Research</span>
              </div>
              <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Article 2 */}
          <article className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-blue-400 font-mono text-xs">STRATEGY</span>
              <div className="ml-auto text-xs text-gray-400">6 min read</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              From Metrics to Meaning: Redefining AI Success
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Why traditional AI metrics miss what actually matters to users, and how product managers can 
              build better success frameworks for human-centered AI.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Product Strategy</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">AI Ethics</span>
              </div>
              <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Article 3 */}
          <article className="group bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-green-400 font-mono text-xs">CASE_STUDY</span>
              <div className="ml-auto text-xs text-gray-400">10 min read</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              The Disagreement Signal: Learning from Annotation Conflicts
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A deep dive into how expert disagreement in AI training data reveals crucial insights about 
              human values and preference diversity.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Data Science</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Human Values</span>
              </div>
              <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Article 4 */}
          <article className="group bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-pink-400 font-mono text-xs">INDUSTRY</span>
              <div className="ml-auto text-xs text-gray-400">7 min read</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Program Manager's Guide to AI Product Development
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Applying traditional PM principles to AI projects, with lessons learned from managing 
              cross-functional teams building human-centered AI products.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Program Management</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs">Leadership</span>
              </div>
              <button className="text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
                Read More →
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-12 border border-gray-600/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on human-centered AI development, preference modeling, and the future of AI-human collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  )
}