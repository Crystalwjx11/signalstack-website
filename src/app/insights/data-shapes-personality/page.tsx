export default function DataShapesPersonality() {
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
          <span className="text-cyan-400">Data Shapes a Model's Personality</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-purple-400 font-mono text-sm">EXPERIMENT</span>
            <div className="ml-auto text-sm text-gray-400">9 min read</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Data Shapes a Model's Personality
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every large language model has a personality. Some strict, some generous, some picky. That style doesn't appear by chance — it comes from the data. And you can see it in how they judge "accuracy."
          </p>
        </div>
        
        <div className="bg-purple-500/10 rounded-lg p-6 border-l-4 border-purple-400 mb-12">
          <p className="text-gray-300 leading-relaxed">
            This dataset accuracy challenge pushed me to think more creatively about what "accurate" even means and the broader context of opportunity in this space.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">The Problem</h2>
        
        <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 mb-12">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>A binary rubric (accurate vs inaccurate) flattens nuance.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>A small slip gets treated the same as a major error.</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <span>Clients lose confidence when they see "errors" they don't agree with.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Experiment */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">The Experiment</h2>
        
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8">
          <p className="text-gray-300 leading-relaxed mb-6">
            I asked three LLMs (ChatGPT, Claude, Gemini) to re-check the same items and give the re-evaluation.
          </p>
          
          <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20 mb-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Findings</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• They disagreed on every prompt.</li>
              <li>• One flagged a Beatles song error, another ignored it.</li>
              <li>• One demanded strict scientific detail, others accepted simplifications.</li>
            </ul>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Each model showed a different tolerance for error — almost like a personality.
          </p>
        </div>

        {/* Model Personalities */}
        <div className="grid md:grid-cols-1 gap-6">
          {/* ChatGPT */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xs font-bold text-white">GPT</span>
              </div>
              <h3 className="text-xl font-bold text-white">The Flexible Explainer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              More forgiving, willing to accept simplified answers as "good enough." Focused on clarity and usability, 
              even if it glosses over details.
            </p>
          </div>

          {/* Claude */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xs font-bold text-white">CLD</span>
              </div>
              <h3 className="text-xl font-bold text-white">The Strict Teacher</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Always checking the rules, quick to call something wrong if it wasn't exact.
            </p>
          </div>

          {/* Gemini */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xs font-bold text-white">GEM</span>
              </div>
              <h3 className="text-xl font-bold text-white">The Picky Fact-Checker</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Very precise, catching errors others missed (like "Imagine" not being a Beatles song). But it also nitpicked 
              tiny details that didn't really change the meaning.
            </p>
          </div>
        </div>
      </section>

      {/* Strict vs Useful */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Strict vs Useful</h2>
        
        <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-8">
          <p className="text-gray-300 leading-relaxed mb-6">
            At first I assumed stricter = better. But it's not that simple.
          </p>
          
          <div className="space-y-4">
            <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-yellow-300">Minor vs Major:</strong> Gemini flagged a minor song title 
                ('I Can't Get No Satisfaction' vs. '(I Can't Get No) Satisfaction') as inaccurate. True, but it missed the point.
              </p>
            </div>
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <p className="text-sm text-gray-300">
                <strong className="text-red-300">When It Matters:</strong> On asbestos, strictness mattered. 
                "Synthetic vs natural" changes meaning entirely.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-500/20 rounded-lg p-6 border-l-4 border-yellow-400">
            <p className="text-yellow-200 font-medium">
              The strictness is only useful when it protects meaning, not when it nitpicks away from usefulness.
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-8">The Opportunity for Surge</h2>
        
        <div className="space-y-8">
          {/* Surface Disagreement */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Surface disagreement as value</h3>
            <p className="text-gray-300 leading-relaxed">
              Where models diverge is exactly where a team like Surge can shine — to explain, to align, to make nuance visible. 
              These LLM disagreements present higher ROI datasets for Surge, because in simple cases most models converge.
            </p>
          </div>

          {/* Shape Model Personality */}
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Shape model personality through data</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the part that excites me most. These disagreements/edge cases aren't errors — they're the life events 
              that shape how a model sees the world. Just as people develop personality through experience, models develop 
              style through data.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
              <p className="text-sm text-purple-200">
                By guiding how borderline cases are judged, Surge has the chance to instill qualities like precision, 
                generosity, creativity, or practicality into a model. It's the art of model character design.
              </p>
            </div>
          </div>

          {/* Redefine Evaluation */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-xl font-bold text-green-300 mb-4">Redefine evaluation as a product</h3>
            <p className="text-gray-300 leading-relaxed">
              Instead of QA as a service, labeling as a service, what if we can make rubrics, reasoning, and disagreement 
              part of the client experience — a self-serve dashboard, alignment on edge cases, and even connecting 
              long-term model traits to concrete datasets.
            </p>
          </div>
        </div>
      </section>

      {/* The Art of AI */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-pink-800/30 via-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-pink-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">The Art of Model Personality</h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
            It's really fascinating to see the disagreements in this case, whether with a client's QA team or across LLMs, 
            because they show where human judgment matters most.
          </p>
          
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-6 border border-pink-500/20 mb-6">
            <p className="text-gray-300 leading-relaxed text-center">
              For simple facts, models converge. For nuanced cases, they diverge — and that's where Surge adds the most value: 
              bridging machine judgment with human expectations, and turning evaluation into the foundation of model personality.
            </p>
          </div>
          
          <blockquote className="text-xl text-center italic text-pink-200 border-l-4 border-pink-400 pl-6">
            "Data is like the brushstroke that defines the style of a model. Just like great artists have their own strokes — 
            Picasso's abstract lines, Van Gogh's dotted swirls — I feel excited about shaping the data brushstrokes that will 
            create the great art of LLMs."
          </blockquote>
        </div>
      </section>

      {/* Call to Discussion */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-lg rounded-2xl p-12 border border-gray-600/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Let's Discuss This Further</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'd love to hear feedback on this perspective. How do you see the balance between serving immediate client QA needs 
            and shaping longer-term model personality?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/insights/human-centered-ai-strategy" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Read: Human-Centered AI Strategy
            </a>
            <a href="/#connect" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              Share Your Thoughts
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}