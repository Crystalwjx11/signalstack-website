export default function HumanCenteredAIStrategy() {
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

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <a href="/insights" className="hover:text-cyan-400 transition-colors">Insights</a>
          <span>→</span>
          <span className="text-cyan-400">Human-Centered AI Product Strategy</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-400 font-mono text-sm">STRATEGY</span>
            <div className="ml-auto text-sm text-gray-400">12 min read</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Human-Centered AI Product Strategy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            The industry leaders get it: AI isn't about replacing humans—it's about amplifying human potential. 
            Here's what I've learned from studying how the best teams build products that serve people, not algorithms.
          </p>
        </div>
        
        <div className="bg-green-500/10 rounded-lg p-6 border-l-4 border-green-400 mb-12">
          <p className="text-gray-300 leading-relaxed">
            After analyzing strategies from Microsoft, McKinsey, Stanford HAI, and other industry leaders, 
            I've identified the patterns that separate truly human-centered AI from the "AI-washing" we see everywhere.
          </p>
        </div>
      </section>

      {/* The Shift */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">The Strategic Shift</h2>
        
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Satya Nadella nailed it when he redefined Microsoft's mission for the AI era: <em>"What does empowerment look like in the era of AI? 
            It's not just about building tools for specific roles or tasks. It's about building tools that empower everyone to create their own tools."</em>
          </p>
          
          <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">The Old Way vs. The New Way</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-bold text-red-300 mb-2">Traditional AI Strategy</h5>
                <ul className="text-base text-gray-300 space-y-1">
                  <li>• Automate specific tasks</li>
                  <li>• Replace human roles</li>
                  <li>• Focus on efficiency metrics</li>
                  <li>• One-size-fits-all solutions</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-bold text-green-300 mb-2">Human-Centered AI Strategy</h5>
                <ul className="text-base text-gray-300 space-y-1">
                  <li>• Amplify human capabilities</li>
                  <li>• Enable custom tool creation</li>
                  <li>• Measure human empowerment</li>
                  <li>• Context-aware personalization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">The Framework: 4 Strategic Pillars</h2>
        
        <div className="space-y-12">
          {/* Pillar 1: Human Agency */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white">1. Preserve Human Agency</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The most successful AI products don't make decisions for users—they make users better decision-makers. 
              McKinsey's research shows that putting "human agency at the center" isn't just ethical, it's profitable.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <h4 className="text-lg font-medium text-purple-300 mb-2">What This Looks Like</h4>
                <ul className="text-base text-gray-300 space-y-1">
                  <li>• AI suggests, humans decide</li>
                  <li>• Transparent reasoning behind AI recommendations</li>
                  <li>• Easy overrides and customization</li>
                  <li>• Progressive disclosure of complexity</li>
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                <h4 className="text-lg font-medium text-red-300 mb-2">What to Avoid</h4>
                <ul className="text-base text-gray-300 space-y-1">
                  <li>• Black box decision-making</li>
                  <li>• Removing human choice</li>
                  <li>• "Trust the algorithm" messaging</li>
                  <li>• Patronizing UX patterns</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
              <p className="text-base text-purple-200">
                <strong>Real Example:</strong> Microsoft's Copilot Pages lets teams collaborate on AI-generated content,
                but humans control every edit, iteration, and final decision. The AI accelerates, humans direct.
              </p>
            </div>
          </div>

          {/* Pillar 2: Context-Aware Intelligence */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-white">2. Build Context-Aware Intelligence</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Here's what I learned from my preference modeling work: context changes everything. A CEO and a junior developer 
              asking the same question need completely different responses. The best AI products understand this.
            </p>
            
            <div className="space-y-4">
              <div className="bg-cyan-500/10 rounded-lg p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">The Context Stack</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-sm font-bold text-white mb-2">User Context</h5>
                    <ul className="text-base text-gray-300 space-y-1">
                      <li>• Role & expertise level</li>
                      <li>• Goals & constraints</li>
                      <li>• Communication preferences</li>
                      <li>• Decision-making style</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-2">Situational Context</h5>
                    <ul className="text-base text-gray-300 space-y-1">
                      <li>• Urgency level</li>
                      <li>• Available resources</li>
                      <li>• Risk tolerance</li>
                      <li>• Audience considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-2">Organizational Context</h5>
                    <ul className="text-base text-gray-300 space-y-1">
                      <li>• Company culture</li>
                      <li>• Industry standards</li>
                      <li>• Regulatory requirements</li>
                      <li>• Strategic priorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-500/20">
              <p className="text-base text-cyan-200">
                <strong>Strategic Implementation:</strong> Don't ask users to adapt to your AI. Build AI that adapts to users.
                This requires investing in user research, not just algorithm development.
              </p>
            </div>
          </div>

          {/* Pillar 3: Workflow Integration */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">3. Redesign Workflows, Don't Just Add AI</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              McKinsey found that "workflow redesign has the biggest effect on an organization's ability to see EBIT impact from gen AI." 
              You can't just bolt AI onto existing processes and expect magic.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">The Wrong Approach</h4>
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <ul className="text-base text-gray-300 space-y-2">
                    <li>• "Add ChatGPT button to existing interface"</li>
                    <li>• Keep all current steps, just make them AI-powered</li>
                    <li>• Force AI into legacy workflows</li>
                    <li>• Measure success with old metrics</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-3">The Strategic Approach</h4>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <ul className="text-base text-gray-300 space-y-2">
                    <li>• Map current friction points and cognitive load</li>
                    <li>• Identify where human creativity adds most value</li>
                    <li>• Design AI-human handoffs intentionally</li>
                    <li>• Create new success metrics for hybrid workflows</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
              <h4 className="text-lg font-semibold text-green-300 mb-3">Workflow Redesign Framework</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
                  <p className="text-base text-gray-300"><strong>Audit:</strong> Where do users spend time on low-value tasks?</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
                  <p className="text-base text-gray-300"><strong>Identify:</strong> Which decisions require human judgment vs. pattern recognition?</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
                  <p className="text-base text-gray-300"><strong>Redesign:</strong> Create new workflows where AI handles routine, humans handle nuanced</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
                  <p className="text-base text-gray-300"><strong>Measure:</strong> Track human satisfaction and empowerment, not just efficiency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Responsible Development */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-800/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">4. Build in Responsibility from Day One</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Stanford's AI Index reveals "a gap between recognizing RAI risks and taking meaningful action." 
              The leaders who win long-term are the ones building responsible AI practices into their product development process, not bolting them on after.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Core Principles</h4>
                <ul className="text-base text-gray-300 space-y-2">
                  <li>• <strong>Transparency:</strong> Users understand how AI makes recommendations</li>
                  <li>• <strong>Fairness:</strong> AI works equitably across different user groups</li>
                  <li>• <strong>Privacy:</strong> Data use is minimal, consensual, and secure</li>
                  <li>• <strong>Safety:</strong> Built-in guardrails prevent harmful outputs</li>
                </ul>
              </div>
              
              <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h4 className="text-lg font-semibold text-orange-300 mb-3">Implementation Strategy</h4>
                <ul className="text-base text-gray-300 space-y-2">
                  <li>• <strong>Red Team Early:</strong> Test for bias and failure modes</li>
                  <li>• <strong>Diverse Testing:</strong> Include underrepresented user groups</li>
                  <li>• <strong>Continuous Monitoring:</strong> Track AI performance across demographics</li>
                  <li>• <strong>Human Oversight:</strong> Always maintain meaningful human control</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
              <p className="text-base text-yellow-200">
                <strong>Business Case:</strong> Responsible AI isn't just ethical—it's strategic. Users trust products that respect their agency,
                regulators favor companies with proactive compliance, and teams build better products when they consider human impact from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Signals */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Reading the Industry Signals</h2>
        
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/20 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            The patterns are clear when you know where to look:
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                <a href="https://blogs.microsoft.com/blog/2024/01/10/microsoft-announces-3-billion-investment-to-expand-ai-and-cloud-infrastructure-in-india/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-300 hover:text-blue-200 transition-colors duration-300 underline decoration-blue-400 underline-offset-2">
                  Microsoft's $3B India Investment (2025)
                </a>
              </h4>
              <p className="text-base text-gray-300">
                They're not just building data centers—they're training 10 million people in AI skills.
                The message: human capability development scales alongside AI infrastructure.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                <a href="https://hai.stanford.edu/ai-index-report" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-purple-300 hover:text-purple-200 transition-colors duration-300 underline decoration-purple-400 underline-offset-2">
                  AI Adoption Jumping from 55% to 78% in 2025
                </a>
              </h4>
              <p className="text-base text-gray-300">
                Stanford's data shows rapid adoption, but the companies seeing ROI are the ones redesigning workflows,
                not just implementing AI features.
              </p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                <a href="https://medium.com/@joulee/the-death-of-product-development-as-we-know-it-67e45c5b9b79" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-green-300 hover:text-green-200 transition-colors duration-300 underline decoration-green-400 underline-offset-2">
                  Julie Zhuo's "Death of Product Development"
                </a>
              </h4>
              <p className="text-base text-gray-300">
                AI is changing how teams build, but the winners combine AI efficiency with human empathy and intuition.
                Technology speeds up iteration; humans guide direction.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-800/20 to-purple-800/20 rounded-lg p-6 border border-cyan-500/20">
          <h4 className="text-lg font-bold text-white mb-3">What This Means for Product Strategy</h4>
          <p className="text-gray-300 leading-relaxed">
            The companies building sustainable AI products aren't asking "How can AI replace this human task?" 
            They're asking "How can AI make this human more capable, creative, and fulfilled in their work?"
          </p>
        </div>
      </section>

      {/* Implementation Playbook */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Your Implementation Playbook</h2>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Week 1-2: Foundation Research</h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Map your users' current workflows and pain points</li>
              <li>• Identify where humans add unique value vs. repetitive tasks</li>
              <li>• Benchmark existing user satisfaction and empowerment metrics</li>
              <li>• Audit your current AI/automation for human agency preservation</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Week 3-4: Strategy Design</h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Define your human empowerment goals (not just efficiency gains)</li>
              <li>• Design AI-human collaboration patterns for each major workflow</li>
              <li>• Create context-awareness requirements for different user types</li>
              <li>• Establish responsible AI guardrails and testing protocols</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold text-green-300 mb-4">Week 5-8: Prototype & Test</h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Build small workflow prototypes with diverse user groups</li>
              <li>• Test for both efficiency and human satisfaction improvements</li>
              <li>• Validate AI recommendations are explainable and overridable</li>
              <li>• Measure user sense of agency and control throughout</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Ongoing: Scale & Refine</h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Monitor AI performance across different user demographics</li>
              <li>• Continuously refine context-awareness based on usage patterns</li>
              <li>• Expand successful patterns to new workflows and user types</li>
              <li>• Share learnings to build industry best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-pink-800/30 via-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-pink-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">The Question That Matters</h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
            As AI becomes ubiquitous, the strategic question isn't "How do we use AI?" 
            It's "How do we use AI to make humans more human?"
          </p>
          
          <blockquote className="text-xl text-center italic text-pink-200 border-l-4 border-pink-400 pl-6 mb-8">
            "The companies that win will be the ones that figure out how to make AI feel like a natural extension of human creativity and judgment, not a replacement for it."
          </blockquote>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              This is more than product strategy—it's the foundation for technology that serves humanity instead of the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-12 border border-gray-600/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Build Human-Centered AI?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I work with teams to develop AI product strategies that prioritize human empowerment, context-awareness, 
            and responsible development. Let's discuss how these frameworks apply to your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#connect" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Discuss Your Strategy
            </a>
            <a href="/projects/preference-modeling" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              See the Framework
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}