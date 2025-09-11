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
      
      
      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer">
          SIGNALSTACK
        </div>
        <div className="flex space-x-8">
          <a href="/insights" className="text-gray-400 hover:text-cyan-400 font-medium text-sm tracking-wider transition-colors duration-300">
            INSIGHTS
          </a>
          <a href="/projects" className="text-gray-400 hover:text-purple-400 font-medium text-sm tracking-wider transition-colors duration-300">
            PROJECTS
          </a>
          <a href="#about" className="text-gray-400 hover:text-pink-400 font-medium text-sm tracking-wider transition-colors duration-300">
            ABOUT
          </a>
          <a href="#connect" className="text-gray-400 hover:text-green-400 font-medium text-sm tracking-wider transition-colors duration-300">
            CONNECT
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-24 text-center">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-white">Building</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Human-Centered AI
            </span>
          </h1>
        </div>
        
        {/* Clear Purpose Statement */}
        <div className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
          <p className="mb-6">
            As a program manager in tech, I bring human-centered thinking to AI development. 
            My focus is building AI systems that understand and serve human needs, not just optimize metrics.
          </p>
          <p className="text-lg text-gray-400">
            Through data annotation work, I discovered how subjective "good AI" really is. This insight drives my work on 
            preference modeling, human values in AI systems, and creating technology that truly serves people.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="/projects" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-center">
            View My Work
          </a>
          <a href="/insights" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-xl font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 hover:scale-105 text-center">
            Read Insights
          </a>
        </div>
        
        {/* AI Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-green-400 font-mono text-sm opacity-80">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>AI_SYSTEMS_ONLINE</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      {/* My Focus Areas */}
      <section id="thinking" className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          My Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Human Preferences */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Human Preference Modeling
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Developing frameworks to capture nuanced, context-dependent preferences that make AI responses genuinely helpful. 
              Understanding the complexity behind human judgment and translating it into better AI systems.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4 border-l-4 border-purple-400">
              <p className="text-sm text-gray-400 mb-2">Key Insight:</p>
              <p className="text-sm text-purple-200">
                "Good" varies by person, context, and culture. A helpful AI response for a CEO differs from one for a student, 
                even when asking the same question. Current preference modeling often misses this nuance.
              </p>
            </div>
          </div>

          {/* Subjective Truth */}
          <div className="group bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">⚖️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Quality & Human Values
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When experts disagree on what's "correct," we're seeing human values at work, not data quality issues. 
              I design systems that embrace rather than flatten this essential complexity.
            </p>
            <div className="bg-blue-500/10 rounded-lg p-4 border-l-4 border-blue-400">
              <p className="text-sm text-gray-400 mb-2">Real Example:</p>
              <p className="text-sm text-blue-200">
                In data annotation, disagreement between experts isn't noise—it's signal. A creative writing prompt 
                might have 5 equally valid "correct" responses, each reflecting different human values and preferences.
              </p>
            </div>
          </div>

          {/* Product Strategy */}
          <div className="group bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Human-Centered AI Strategy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Applying product management principles to AI development. Creating strategies for user-centered AI design 
              where technology adapts to human needs, not the other way around.
            </p>
            <div className="bg-green-500/10 rounded-lg p-4 border-l-4 border-green-400">
              <p className="text-sm text-gray-400 mb-2">Strategy Framework:</p>
              <p className="text-sm text-green-200">
                Instead of asking "How can users adapt to our AI?" ask "How can our AI better understand what users actually need?" 
                This shift transforms everything from product roadmaps to success metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Featured Work & Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Data Annotation Case Study */}
          <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-cyan-400 font-mono text-sm">CASE_STUDY</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Subjectivity of AI Quality
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Through hands-on data annotation work, I discovered that "good AI" isn't about universal correctness—it's about understanding diverse human perspectives. When experts disagree on the "right" answer, we're seeing human values at work, not data quality issues.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Human Preferences</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Data Annotation</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AI Quality</span>
            </div>
          </div>

          {/* Preference Modeling Framework */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-purple-400 font-mono text-sm">FRAMEWORK</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Context-Aware Preference Systems
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Developing frameworks that capture nuanced, context-dependent human preferences rather than flattening them into binary metrics. These systems understand that the "best" AI response varies by user, situation, and cultural context.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Preference Modeling</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Context Analysis</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">User Research</span>
            </div>
          </div>

          {/* AI Strategy Work */}
          <div className="group bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-green-400 font-mono text-sm">STRATEGY</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Human-Centered AI Product Strategy
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Applying program management principles to AI development, creating strategies where technology adapts to human needs. Building roadmaps that prioritize human values alongside technical capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Product Strategy</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Program Management</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">AI Ethics</span>
            </div>
          </div>

          {/* Tech Industry Insights */}
          <div className="group bg-gradient-to-br from-pink-900/20 to-pink-800/10 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
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
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Industry Analysis</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Tech Leadership</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">AI Adoption</span>
            </div>
          </div>
        </div>

        {/* Current Projects Preview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Currently Building</h3>
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-yellow-400 font-mono text-sm">IN_DEVELOPMENT</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse ml-2"></div>
            </div>
            <p className="text-lg text-gray-300 mb-4">
              Developing frameworks and tools that help AI teams better understand and integrate human preferences into their systems. 
              Open to collaborations and conversations about human-centered AI approaches.
            </p>
            <div className="text-sm text-gray-400 font-mono">
              // Stay tuned for detailed case studies and tools
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          About SignalStack
        </h2>
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-12 border border-gray-600/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4"></div>
                <h3 className="text-xl font-bold text-white">Crystal Wang</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Program manager with deep experience in tech, now focused on the intersection of human psychology and AI systems. 
                My journey from traditional PM work to AI began through data annotation—where I discovered that "good AI" is fundamentally about understanding human values, not just optimizing metrics.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I bring a unique perspective to AI development: combining years of program management experience with insights about human preference complexity. 
                This helps me identify opportunities others miss and build systems that truly serve human needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">Program Management</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">AI Strategy</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">Human-Centered Design</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-800/20 to-purple-800/20 p-6 rounded-xl border border-cyan-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Current Focus</h4>
                <p className="text-gray-300 text-sm">
                  Seeking AI PM roles and co-founder opportunities to build human-centered AI products at scale
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-6 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Open To</h4>
                <p className="text-gray-300 text-sm">
                  Collaborations, speaking opportunities, and conversations about preference modeling and AI ethics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Let's Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/20">
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-cyan-300 font-medium">Email</p>
                  <p className="text-gray-300">crystal@signalstack.ai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-purple-300 font-medium">LinkedIn</p>
                  <p className="text-gray-300">Connect for AI PM opportunities</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-green-300 font-medium">Calendar</p>
                  <p className="text-gray-300">Schedule a conversation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Interested In</label>
                <select className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none">
                  <option>AI PM Opportunities</option>
                  <option>Co-founder Discussions</option>
                  <option>Speaking Engagements</option>
                  <option>Research Collaboration</option>
                  <option>General Discussion</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-3 text-white focus:border-purple-400 focus:outline-none resize-none" 
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105">
                Send Message
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-4 text-white">Building Human-Centered AI Together</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            The future of AI isn't just about better algorithms—it's about systems that understand and serve human needs. 
            I'm always interested in connecting with others who share this vision and want to collaborate on meaningful AI projects.
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