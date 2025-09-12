'use client'

export default function AIPersonalityExperiment() {
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
          <span className="text-cyan-400">Every AI Has a Personality</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-purple-400 font-mono text-sm">EXPERIMENT</span>
            <div className="ml-auto text-sm text-gray-400">12 min read</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            Every AI Has a Personality
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            You might not notice it at first, but spend enough time with different language models and you'll start to see it—some are strict teachers, others are generous explainers, and some are nitpicky fact-checkers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-8">
        
        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            These personalities aren't accidental. They're shaped by training data and design choices that determine how each model judges what's "accurate."
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I discovered this firsthand when I ran into a fascinating problem with dataset evaluation that made me question everything I thought I knew about AI accuracy.
          </p>
        </div>

        {/* The Setup */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Setup: When "Accurate" Isn't So Simple</h2>
          
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 mb-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              I was working with a dataset where responses were being labeled as either "accurate" or "inaccurate"—a binary choice that seemed straightforward at first. But as I dug deeper, I realized this simple rubric was creating problems:
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Minor slips were getting treated the same as major errors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Edge cases were exposing huge disagreements about what "accuracy" even means</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>The binary approach was flattening important nuance</span>
              </li>
            </ul>
            
            <p className="text-gray-300 mt-6 font-medium">So I decided to run an experiment.</p>
          </div>
        </div>

        {/* The Experiment */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Experiment: Three AIs, Same Questions, Different Answers</h2>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              I took the same set of questionable responses and asked three popular LLMs—ChatGPT, Claude, and Gemini—to evaluate them for accuracy. What happened next surprised me.
            </p>
            
            <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20 text-center">
              <p className="text-xl font-bold text-blue-200 mb-2">They disagreed on every single item.</p>
              <p className="text-sm text-gray-400">Here's what I found:</p>
            </div>
          </div>

          {/* Experiment Results Table */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">The Results: Complete Disagreement</h3>
              <p className="text-gray-400 text-sm">5 prompts, 3 AIs, 0 consensus</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-600/30">
              <img 
                src="/ai-experiment-results.png" 
                alt="Experiment results showing ChatGPT, Claude, and Gemini disagreed on every single evaluation, with distinct patterns: ChatGPT (flexible), Claude (strict), Gemini (precise)"
                className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('/ai-experiment-results.png', '_blank')}
              />
            </div>
            <div className="mt-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                  <h4 className="font-bold text-green-300">ChatGPT</h4>
                  <p className="text-xs text-gray-400">Flexible & Purpose-Driven</p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <h4 className="font-bold text-purple-300">Claude</h4>
                  <p className="text-xs text-gray-400">Strict & Rule-Following</p>
                </div>
                <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                  <h4 className="font-bold text-cyan-300">Gemini</h4>
                  <p className="text-xs text-gray-400">Precise & Detail-Oriented</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRyh0uOXUYF0D0i3pe-pC2-HxWqBh82koUW5P1gflkk9jqZyl-3GpI21CIQSi2b5QmSuQAQuoDQjt1B/pubhtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                View Full Dataset →
              </a>
            </div>
          </div>

          {/* AI Personalities */}
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            
            {/* ChatGPT */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-sm font-bold text-white">GPT</span>
                </div>
                <h3 className="text-2xl font-bold text-white">ChatGPT → The Flexible Explainer</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                More forgiving and focused on whether the response served its purpose. If an answer was simplified but still useful, ChatGPT was likely to call it accurate. It prioritized clarity and practical value over perfect precision.
              </p>
            </div>

            {/* Claude */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-sm font-bold text-white">CLD</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Claude → The Strict Teacher</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Always checking the rules and quick to flag anything that wasn't exactly right. Claude seemed to operate with a "better safe than sorry" approach to accuracy.
              </p>
            </div>

            {/* Gemini */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-sm font-bold text-white">GEM</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Gemini → The Picky Fact-Checker</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Incredibly precise, catching subtle errors the others missed. For example, Gemini correctly identified that "Imagine" isn't actually a Beatles song when others let it slide. But it also flagged minor formatting issues that didn't change the meaning.
              </p>
            </div>
          </div>
        </div>

        {/* Key Discovery */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-full mb-4">
                <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-pink-300 mb-2">The Key Discovery</h3>
            </div>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">Every AI has a distinct evaluation personality.</span> <br/>
              These differences aren't bugs—they're features that reveal fundamentally different approaches to accuracy, context, and helpfulness.
            </p>
          </div>
        </div>

        {/* What This Reveals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What This Reveals About AI Personality</h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            These weren't random differences—they were consistent patterns that revealed something profound about how these models approach the world.
          </p>
          
          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Example: The Asbestos Test</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              When evaluating whether calling asbestos "synthetic" instead of "natural" was accurate, all three models caught it as an error. This makes sense—the distinction between synthetic and natural asbestos actually matters for understanding health risks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              But when Gemini flagged a song title as wrong for missing parentheses—'I Can't Get No Satisfaction' vs. '(I Can't Get No) Satisfaction'—it highlighted something different. Technically incorrect? Yes. Meaningfully inaccurate? Debatable.
            </p>
          </div>
        </div>

        {/* The Bigger Picture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">The Bigger Picture: Why This Matters</h2>
          
          <div className="space-y-8">
            {/* Key Insight 1 */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">1. Disagreement reveals opportunity</h3>
              <p className="text-gray-300 leading-relaxed">
                Where models diverge is exactly where human judgment becomes most valuable. For simple facts, AIs converge. For nuanced cases, they show their personality—and that's where we need human insight to guide them.
              </p>
            </div>

            {/* Key Insight 2 */}
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-purple-300 mb-4">2. Strictness has context</h3>
              <p className="text-gray-300 leading-relaxed">
                At first, I assumed stricter = better. But I learned that strictness is only valuable when it protects meaning. Nitpicking that doesn't serve understanding can actually reduce usefulness.
              </p>
            </div>

            {/* Key Insight 3 */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-bold text-green-300 mb-4">3. We're shaping AI character through data</h3>
              <p className="text-gray-300 leading-relaxed">
                These disagreements aren't bugs—they're features that reveal how models develop their "worldview." Just as people develop personality through experience, models develop style through training data. The way we handle edge cases literally shapes how AI thinks.
              </p>
            </div>
          </div>
        </div>

        {/* Looking Forward */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Looking Forward: The Art of AI Character Design</h2>
          
          <div className="bg-gradient-to-r from-pink-800/30 via-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              What excites me most is realizing that we're not just training AIs to be accurate—we're teaching them how to think. Every dataset decision, every edge case judgment, every rubric choice is like a brushstroke that defines the personality of future AI systems.
            </p>
            
            <blockquote className="border-l-4 border-pink-400 pl-6 italic text-pink-200 mb-6">
              "Think about it: Picasso had his abstract lines, Van Gogh had his swirling dots, and now we're creating the brushstrokes that will define how AI sees and judges the world."
            </blockquote>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              As AI becomes more prevalent, understanding and intentionally shaping these personalities becomes crucial. Do we want AIs that are generous explainers or strict fact-checkers? Practical helpers or precise scholars?
            </p>
            
            <p className="text-gray-300 leading-relaxed font-medium">
              The answer probably depends on the context—and that's exactly why this work matters.
            </p>
          </div>
        </div>

        {/* What's Next */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">What's Next</h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            This experiment has me thinking about bigger questions: How do we balance immediate accuracy needs with long-term AI character development? How do we make these personality differences visible and useful rather than frustrating?
          </p>
          
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/20">
            <p className="text-gray-300 leading-relaxed">
              I'm continuing to explore these questions through more experiments and conversations with others working on human-centered AI. If this resonates with you, I'd love to hear your thoughts and experiences.
            </p>
          </div>
        </div>

      </section>

      {/* Call to Action */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-800/30 via-pink-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">What Do You Think?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have you noticed personality differences in the AIs you work with? I'm always interested in hearing about others' experiences with AI behavior and character.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#connect" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-center">
              Share Your Thoughts
            </a>
            <a href="/insights" className="border-2 border-gray-400 text-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-105 text-center">
              Read More Insights
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}