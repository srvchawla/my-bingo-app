interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-full overflow-y-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end text-white py-24 px-6 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 animate-fade-in-up tracking-tight">
            Social Bingo: Find Your Circle
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
            Break the ice, make connections, and discover what makes your community unique. 
            Turn any gathering into an engaging social adventure.
          </p>
          <button
            onClick={onStart}
            className="bg-secondary hover:bg-secondary-light text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-fade-in-up animate-delay-200"
          >
            Start Playing Now →
          </button>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple, fun, and addictive. Get started in seconds.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="bg-section-alt rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold
                      ${i === 12 
                        ? 'bg-bingo text-gray-900' 
                        : i % 3 === 0 
                        ? 'bg-marked border-2 border-marked-border text-gray-700'
                        : 'bg-white border-2 border-gray-300 text-gray-400'
                      }`}
                  >
                    {i === 12 ? '★' : ''}
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Interactive 5×5 Grid
              </p>
            </div>
            
            {/* Instructions */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Get Your Card
                  </h3>
                  <p className="text-gray-600">
                    Receive a unique 5×5 bingo card with interesting prompts about people in your group.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Find Matches
                  </h3>
                  <p className="text-gray-600">
                    Mingle and discover people who match each prompt. Tap a square when you find someone!
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Win & Celebrate
                  </h3>
                  <p className="text-gray-600">
                    Complete 5 in a row (horizontal, vertical, or diagonal) and shout "BINGO!" to win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play Section */}
      <section className="py-20 px-6 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            Why Play Social Bingo?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            More than just a game—it's a social catalyst.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Break The Ice
              </h3>
              <p className="text-gray-600">
                Natural conversation starters that make meeting new people effortless and fun.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real Connections
              </h3>
              <p className="text-gray-600">
                Go beyond small talk and discover meaningful commonalities with others.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Engagement
              </h3>
              <p className="text-gray-600">
                Transform any gathering from awkward to animated in minutes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Memorable Moments
              </h3>
              <p className="text-gray-600">
                Create shared experiences and stories that people will remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Join The Community
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-accent to-accent-light rounded-2xl text-white shadow-xl">
              <div className="text-5xl font-black mb-2">1,000+</div>
              <div className="text-xl font-semibold opacity-90">Players Worldwide</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl text-white shadow-xl">
              <div className="text-5xl font-black mb-2">10,000+</div>
              <div className="text-xl font-semibold opacity-90">Games Played</div>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-bingo to-yellow-600 rounded-2xl text-white shadow-xl">
              <div className="text-5xl font-black mb-2">4.9★</div>
              <div className="text-xl font-semibold opacity-90">Average Rating</div>
            </div>
          </div>
          
          <div className="bg-section-alt rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">😊 😍 🎊 🤩 🙌</div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "This game completely changed how we run our team offsites. 
                Everyone's engaged, laughing, and actually getting to know each other. 
                Best icebreaker we've ever used!"
              </p>
              <p className="text-gray-600 mt-4 font-semibold">
                — Sarah K., Event Organizer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90">
            Join thousands of players making every gathering memorable.
          </p>
          <button
            onClick={onStart}
            className="bg-white text-accent hover:bg-gray-100 font-bold py-5 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Game →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2024 Social Bingo. Making connections, one square at a time.</p>
      </footer>
    </div>
  );
}
