export default function CaseStudies() {
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
          <a href="/insights" className="text-gray-400 hover:text-blue-500 font-medium text-sm tracking-wider transition-colors duration-300">
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
          <span className="text-purple-400">Case Studies & Tools</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse mr-4"></div>
            <span className="text-yellow-400 font-mono text-sm">IN_DEVELOPMENT</span>
            <div className="ml-auto text-sm text-gray-400">Updated 2025</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Case Studies & Tools
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Frameworks and tools that help AI teams better understand and integrate human preferences into their systems. 
            Real implementations, measurable results, open collaboration.
          </p>
        </div>
      </section>

      {/* Current Development Status */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        <div className="bg-gradient-to-br from-yellow-900/20 to-orange-800/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-yellow-400 font-mono text-sm">ACTIVE_DEVELOPMENT</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What I'm Building</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-white">Preference Modeling Toolkit:</strong> Open-source library for context-aware preference capture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-white">AI Evaluation Dashboard:</strong> Tools for measuring human agency in AI systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-white">Workflow Redesign Templates:</strong> Frameworks for AI-human collaboration patterns</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration Focus</h3>
              <div className="space-y-4">
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-2">Open Source Development</h4>
                  <p className="text-sm text-gray-300">Building tools that the entire AI community can use and improve</p>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Industry Partnerships</h4>
                  <p className="text-sm text-gray-300">Working with AI teams to validate frameworks in real production environments</p>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <h4 className="text-lg font-semibold text-red-300 mb-2">Research Collaboration</h4>
                  <p className="text-sm text-gray-300">Partnering with academic institutions on human-centered AI research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Case Studies */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-12">Completed Case Studies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Case Study 1: Data Annotation */}
          <a href="/insights/data-shapes-personality" className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 block">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-cyan-400 font-mono text-sm">CASE_STUDY</span>
              <div className="ml-auto text-xs text-gray-400">2024</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Data Shapes a Model's Personality
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              How disagreement between AI experts revealed the subjective nature of "accuracy" and the opportunity 
              to shape model personality through data curation strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Model Personality</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Data Annotation</span>
            </div>
            <div className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors">
              Read Full Case Study →
            </div>
          </a>

          {/* Case Study 2: Preference Modeling */}
          <a href="/projects/preference-modeling" className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 block">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-purple-400 font-mono text-sm">FRAMEWORK</span>
              <div className="ml-auto text-xs text-gray-400">Ongoing</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Human Preference Modeling Framework
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A multi-dimensional system for capturing context-dependent human values in AI systems, 
              moving beyond binary good/bad metrics to understand preference complexity.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Preference Modeling</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Context Analysis</span>
            </div>
            <div className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
              View Framework Details →
            </div>
          </a>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-12">Available Tools & Frameworks</h2>
        
        <div className="space-y-8">
          {/* Tool 1: Strategy Framework */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">📋</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Human-Centered AI Product Strategy</h3>
                  <p className="text-sm text-green-400">Comprehensive implementation guide</p>
                </div>
              </div>
              <div className="text-green-400 font-mono text-sm">AVAILABLE</div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Complete strategic framework for building AI products that prioritize human empowerment. Includes 4 strategic pillars, 
              8-week implementation playbook, and industry best practices from Microsoft, McKinsey, and Stanford HAI.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Product Strategy</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Implementation Guide</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Best Practices</span>
              </div>
              <a href="/insights/human-centered-ai-strategy" className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">
                Access Framework →
              </a>
            </div>
          </div>

          {/* Tool 2: Industry Analysis */}
          <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI Industry Transformation Analysis</h3>
                  <p className="text-sm text-pink-400">Leadership insights and adoption patterns</p>
                </div>
              </div>
              <div className="text-pink-400 font-mono text-sm">AVAILABLE</div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Deep analysis of how AI is reshaping product development, team dynamics, and user expectations across the tech industry. 
              Based on program management experience and industry leadership patterns.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Industry Analysis</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Tech Leadership</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">AI Adoption</span>
              </div>
              <a href="/insights/ai-personality-experiment" className="text-pink-400 text-sm font-medium hover:text-pink-300 transition-colors">
                Read Analysis →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Development Roadmap</h2>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Q4 2024: Foundation Research</h4>
              <p className="text-gray-300 text-sm">Completed preference modeling framework design and pilot case studies</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse mr-4"></div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Q1 2025: Prototype Development</h4>
              <p className="text-gray-300 text-sm">Building preference modeling toolkit and evaluation dashboard prototypes</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Q2 2025: Open Source Release</h4>
              <p className="text-gray-300 text-sm">Public release of preference modeling library with documentation and examples</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">Q3 2025: Industry Integration</h4>
              <p className="text-gray-300 text-sm">Partner with AI teams to validate frameworks in production environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Call */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Join the Development</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm building these tools in the open, with industry partners and research collaborators. 
            If you're working on human-centered AI challenges, let's explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#connect" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Discuss Collaboration
            </a>
            <a href="/projects" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}