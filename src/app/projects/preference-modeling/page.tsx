export default function PreferenceModeling() {
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

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <a href="/projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <span>→</span>
          <span className="text-purple-400">Human Preference Modeling Framework</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse mr-4"></div>
            <span className="text-purple-400 font-mono text-sm">FEATURED_PROJECT</span>
            <div className="ml-auto text-sm text-gray-400">Ongoing Research • 2024-2025</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Human Preference Modeling Framework
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            A multi-dimensional system for capturing context-dependent human values in AI systems, moving beyond binary 
            good/bad metrics to understand the nuanced complexity of human preferences.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
            <p className="text-gray-300 leading-relaxed">
              Current AI systems optimize for metrics that don't capture what humans actually want. "Helpful" varies 
              dramatically based on context, expertise, culture, and individual values.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">The Insight</h3>
            <p className="text-gray-300 leading-relaxed">
              Expert disagreement in data annotation isn't noise—it's the most valuable signal for understanding 
              human preference diversity and the subjective nature of "quality."
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20">
            <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
            <p className="text-gray-300 leading-relaxed">
              A framework that embraces preference complexity, modeling context-dependent values instead of 
              flattening them into universal metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Methodology */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-12">Framework Components</h2>
        
        <div className="space-y-12">
          {/* Component 1: Context Modeling */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white">1. Multi-Dimensional Context Modeling</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Core Dimensions</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Situational Context:</strong> Urgency, formality, audience</li>
                  <li>• <strong>User Context:</strong> Expertise level, role, goals</li>
                  <li>• <strong>Cultural Context:</strong> Communication styles, value systems</li>
                  <li>• <strong>Temporal Context:</strong> Time constraints, deadlines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Implementation</h4>
                <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                  <p className="text-sm text-gray-300 mb-2">Example: Email Response Preferences</p>
                  <p className="text-xs text-cyan-200">
                    CEO requesting quarterly update → Concise, data-focused, executive summary format<br/>
                    Junior dev asking same question → Detailed explanation, learning resources, step-by-step guidance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 2: Value Alignment */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">2. Human Value Identification</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Value Tensions</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Efficiency vs. Thoroughness</li>
                  <li>• Creativity vs. Accuracy</li>
                  <li>• Directness vs. Diplomacy</li>
                  <li>• Innovation vs. Risk Management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Research Finding</h4>
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <p className="text-sm text-gray-300 mb-2">Data Annotation Insight</p>
                  <p className="text-xs text-purple-200">
                    In creative writing evaluations, 5 expert annotators provided different "correct" responses not due to 
                    incompetence, but because they weighted creativity vs. technical accuracy differently based on their values and experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 3: Dynamic Adaptation */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-white">3. Adaptive Learning System</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Learning Mechanisms</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Implicit feedback from user behavior</li>
                  <li>• Explicit preference ratings with context</li>
                  <li>• Cross-user pattern recognition</li>
                  <li>• Temporal preference evolution tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">Key Innovation</h4>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-sm text-gray-300 mb-2">Context-Aware Generalization</p>
                  <p className="text-xs text-green-200">
                    The system learns individual preferences while maintaining generalizability by understanding the contextual 
                    factors that drive preference variation across users and situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Case Study: Creative Writing AI Evaluation</h2>
        
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/20">
          <h3 className="text-xl font-bold text-white mb-6">The Scenario</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            During a project evaluating AI-generated creative writing, five PhD-level annotators were asked to rate 
            responses to the prompt: "Write a story about artificial intelligence discovering emotions."
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Traditional Approach</h4>
              <div className="bg-red-900/20 rounded-lg p-6 border border-red-500/20">
                <p className="text-red-200 mb-4">❌ Problem Identified:</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Low inter-annotator agreement (κ = 0.23)</li>
                  <li>• Responses labeled as "inconsistent data quality"</li>
                  <li>• Recommendation to "retrain annotators"</li>
                  <li>• Focus on achieving consensus</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Framework Approach</h4>
              <div className="bg-green-900/20 rounded-lg p-6 border border-green-500/20">
                <p className="text-green-200 mb-4">✅ Insight Discovered:</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Annotators weighted creativity vs. technical accuracy differently</li>
                  <li>• Literary background influenced preference for experimental styles</li>
                  <li>• Cultural context affected emotional expression preferences</li>
                  <li>• Each perspective contained valuable human insights</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Framework Application Results</h4>
            <p className="text-gray-300 leading-relaxed">
              By modeling annotator context (literary background, cultural values, evaluation criteria), the system learned to 
              predict which type of creative response each annotator would prefer. Rather than forcing consensus, it captured 
              the rich diversity of human aesthetic judgment—enabling AI that could adapt its creative style based on the 
              intended audience and context.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Implementation Status</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Current Phase</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm text-gray-300">Framework design complete</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm text-gray-300">Pilot study with 3 use cases</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-sm text-gray-300">Prototype implementation (Q1 2025)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span className="text-sm text-gray-400">Open-source library release (Q2 2025)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Collaboration Opportunities</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-sm">
                <strong className="text-pink-300">Research Partners:</strong> Academic institutions studying human-AI interaction
              </p>
              <p className="text-sm">
                <strong className="text-pink-300">Industry Applications:</strong> AI companies building user-facing products
              </p>
              <p className="text-sm">
                <strong className="text-pink-300">Open Source Contributors:</strong> Developers interested in ethical AI frameworks
              </p>
              <p className="text-sm">
                <strong className="text-pink-300">Product Teams:</strong> Organizations wanting to implement human-centered AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work & Next Steps */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Interested in This Framework?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm actively seeking collaborators, research partners, and organizations interested in implementing 
            human-centered preference modeling in their AI systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#connect" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Discuss Collaboration
            </a>
            <a href="/projects" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              View Other Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}