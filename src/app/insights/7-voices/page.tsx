export default function SevenVoices() {
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
        <div className="flex items-center space-x-2 text-base text-gray-400">
          <a href="/insights" className="hover:text-cyan-400 transition-colors">Insights</a>
          <span>→</span>
          <span className="text-cyan-400">7 Voices I Read Every Week</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-cyan-400 font-mono text-sm">CURATION</span>
            <div className="ml-auto text-sm text-gray-400">8 min read</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            7 Voices I Read Every Week
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every week, I lean into a curated set of sources. Each one brings something different—policy, engineering, 
            investment, ethics—and together they help me sharpen the signal, question the hype, and write from a place of insight.
          </p>
        </div>
        
        <div className="bg-cyan-500/10 rounded-lg p-6 border-l-4 border-cyan-400 mb-12">
          <p className="text-gray-300 leading-relaxed">
            When I share something with you, it's not just what I read. It's what those readings made me see.
          </p>
        </div>
      </section>

      {/* The 7 Voices */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-8">
        <div className="space-y-12">
          
          {/* Voice 1: Import AI */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-white">Import AI (Jack Clark)</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Jack Clark is my go-to for understanding the power dynamics behind AI progress—who's funding what, which governments 
              are pushing regulation, which labs are setting the pace. His work keeps me honest about the stakes, and reminds me that 
              what gets built isn't just about technology—it's about values, incentives, and influence.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4">
              <p className="text-base text-purple-200">
                <strong>Why I read it:</strong> Power dynamics, funding flows, and the political reality of AI development
              </p>
            </div>
          </div>

          {/* Voice 2: Latent Space */}
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-white">Latent Space Podcast</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              What I love: it's less about breakthroughs and more about builders. The engineers, researchers, product folks who 
              confront the mess of production, deployment, data, bias. Latent Space gives texture to what "building AI" really 
              means in practice—not the fantasy version. It inspires me to write about workflows, trade-offs, and doing things 
              right—not just doing things loudly.
            </p>
            <div className="bg-blue-500/10 rounded-lg p-4">
              <p className="text-sm text-blue-200">
                <strong>Why I listen:</strong> Real implementation challenges, not just the highlight reel
              </p>
            </div>
          </div>

          {/* Voice 3: No Priors */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-white">No Priors (Sarah Guo + Elad Gil)</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is where the world of AI startups, investment, and strategic thinking intersect. No Priors helps me see what 
              kind of problems people are placing bets on, what trends are attracting capital, which startup models are working 
              (or failing). When I reflect on "what's next," this podcast informs my view of real momentum—not just hype.
            </p>
            <div className="bg-green-500/10 rounded-lg p-4">
              <p className="text-sm text-green-200">
                <strong>Why I listen:</strong> Strategic thinking and where smart money is placing bets
              </p>
            </div>
          </div>

          {/* Voice 4: AI Breakfast */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold text-white">AI Breakfast Newsletter</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Because reading every deep report isn't always possible. AI Breakfast cuts through the noise: key news, interesting 
              tool launches, sometimes controversial claims—all delivered with brevity and perspective. It gives me a pulse of what 
              the week looked like, so I can connect dots I might miss otherwise.
            </p>
            <div className="bg-yellow-500/10 rounded-lg p-4">
              <p className="text-sm text-yellow-200">
                <strong>Why I read it:</strong> Weekly pulse check and dot-connecting across the AI landscape
              </p>
            </div>
          </div>

          {/* Voice 5: Stanford AI Index */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                5
              </div>
              <h3 className="text-2xl font-bold text-white">Stanford AI Index</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              For the foundation: funding flows, academic output, benchmark progress, safety & policy metrics. This is where I 
              return when I want to ground my writing in data. It's an evidence check against enthusiasm—and it helps me make sure 
              my opinions aren't just reflections of popular narrative, but reflect measurable trends.
            </p>
            <div className="bg-red-500/10 rounded-lg p-4">
              <p className="text-sm text-red-200">
                <strong>Why I reference it:</strong> Data-driven reality check against narrative and hype
              </p>
            </div>
          </div>

          {/* Voice 6: Lex Fridman */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                6
              </div>
              <h3 className="text-2xl font-bold text-white">Lex Fridman Podcast</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here's where the philosophical, the ethical, the human side gets air. Conversations with thinkers who examine what 
              it means to build systems that touch people, society, and identity. Lex's long-form style gives space for nuance. 
              I draw from this to ask harder questions in my writing—about what "good" means, who gets to decide, and who gets left out.
            </p>
            <div className="bg-indigo-500/10 rounded-lg p-4">
              <p className="text-sm text-indigo-200">
                <strong>Why I listen:</strong> Philosophical depth and the human questions behind the technology
              </p>
            </div>
          </div>

          {/* Voice 7: AI Snake Oil */}
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold">
                7
              </div>
              <h3 className="text-2xl font-bold text-white">AI Snake Oil (Arvind Narayanan & Sayash Kapoor)</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mostly because I need a counterbalance. They challenge hype and overclaim. I want my work to be skeptical where it 
              should be, to question assumptions. This is the voice that's always pushing: "Hold up—where's the data? What are the 
              trade-offs? What are people leaving out?" It helps me stay calibrated.
            </p>
            <div className="bg-orange-500/10 rounded-lg p-4">
              <p className="text-sm text-orange-200">
                <strong>Why I need it:</strong> Critical counterbalance to hype and overclaims
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Voices Matter */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Why These Voices Matter</h2>
        
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Together, these seven help me map a triad I care deeply about:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <h3 className="text-xl font-bold text-cyan-300 mb-3">Signal</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sourcing clarity amid an often chaotic AI information landscape.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-300 mb-3">Trust & Values</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Keeping humans, ethics, and values visible in what's built.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            <h3 className="text-xl font-bold text-green-300 mb-3">Evidence & Practice</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Grounding thinking in data, real workflows, and outcomes.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            When I write, I draw from each of these voices. I remix their insights, lean on their rigor, but always with my own filter: 
            <strong className="text-white"> "What does this mean for people building, using, and living with AI?"</strong>
          </p>
        </div>
      </section>

      {/* Related Articles & CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Want More Insights Like This?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I regularly share how I source signal from noise, build frameworks for thinking about AI, and approach human-centered technology development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/insights" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Read More Insights
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