interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #8b5cf6, #ec4899, #14b8a6, #f59e0b)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 15s ease infinite',
      }}
    >
      {/* Hero Section */}
      <div className="text-center max-w-2xl mb-8 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Find Your Circle! 🎉
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
          Meet your people through the world's most fun icebreaker game
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-10 z-10">
        {/* Card 1 */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          style={{
            animation: 'slide-in 0.6s ease-out forwards',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        >
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Tribe</h3>
          <p className="text-gray-600">
            Meet people who share your interests, hobbies, and experiences
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          style={{
            animation: 'slide-in 0.6s ease-out forwards',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Simple & Fun</h3>
          <p className="text-gray-600">
            Just mark what applies to you—no complicated rules or setup
          </p>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          style={{
            animation: 'slide-in 0.6s ease-out forwards',
            animationDelay: '0.5s',
            opacity: 0,
          }}
        >
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">5×5 Challenge</h3>
          <p className="text-gray-600">
            First to complete a row, column, or diagonal wins the game!
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onStart}
        className="px-10 py-5 bg-white text-primary font-bold text-xl rounded-full shadow-2xl hover:shadow-xl transition-all z-10 relative"
        style={{
          animation: 'slide-in 0.6s ease-out forwards',
          animationDelay: '0.7s',
          opacity: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animation = 'bounce 0.5s ease-in-out';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animation = '';
        }}
        aria-label="Start playing Social Bingo game"
      >
        Let's Play! 🚀
      </button>
    </div>
  );
}
