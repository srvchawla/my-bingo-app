interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, var(--color-gradient-start), var(--color-gradient-end))',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 15s ease infinite',
      }}
    >
      {/* Subtle animated accent elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite 2s',
        }}
      />

      {/* Main content card */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        {/* Hero headline */}
        <h1 
          className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          Discover Your Circle
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
          Connect through conversation, one square at a time
        </p>

        {/* Centered card with transparency */}
        <div 
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl mb-8 border border-white/30 transition-all hover:bg-white/95 hover:shadow-2xl"
        >
          {/* Benefit points as minimal list */}
          <ul className="space-y-5 text-left">
            <li className="flex items-start gap-4 text-gray-700">
              <span className="text-2xl flex-shrink-0" style={{ animation: 'float 3s ease-in-out infinite' }}>💬</span>
              <div>
                <p className="font-medium text-lg">Start meaningful conversations</p>
                <p className="text-sm text-gray-600 mt-1">Break the ice with engaging questions</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-gray-700">
              <span className="text-2xl flex-shrink-0" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>🎯</span>
              <div>
                <p className="font-medium text-lg">Find your matches</p>
                <p className="text-sm text-gray-600 mt-1">Tap squares as you discover connections</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-gray-700">
              <span className="text-2xl flex-shrink-0" style={{ animation: 'float 3s ease-in-out infinite 2s' }}>🏆</span>
              <div>
                <p className="font-medium text-lg">Win together</p>
                <p className="text-sm text-gray-600 mt-1">Complete a line of five to celebrate</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Enhanced CTA button */}
        <button
          onClick={onStart}
          className="w-full text-white font-semibold py-5 px-10 rounded-xl text-lg shadow-lg transition-all duration-300 hover:shadow-2xl active:scale-95 relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
          }}
        >
          <span className="relative z-10">Begin Your Journey</span>
          <div 
            className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
