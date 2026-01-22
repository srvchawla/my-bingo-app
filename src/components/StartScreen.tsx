import { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-16 bg-zen-bg">
      <div className="text-center max-w-2xl w-full space-y-16 animate-fade-in">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl font-bold text-zen-text tracking-tight leading-none">
            Soc Ops
          </h1>
          <p className="text-2xl md:text-3xl text-zen-text-muted font-light tracking-wide">
            Connect. Play. Win.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 animate-fade-in-delay">
          <button
            onClick={onStart}
            className="w-full max-w-md mx-auto block bg-zen-accent text-white font-semibold py-6 px-12 rounded-2xl text-xl tracking-wide shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
          >
            Play
          </button>
          
          <button
            onClick={() => setShowRules(!showRules)}
            className="w-full max-w-md mx-auto block bg-transparent text-zen-text font-medium py-6 px-12 rounded-2xl text-lg tracking-wide border-2 border-zinc-200 hover:border-zen-accent hover:text-zen-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
          >
            {showRules ? 'Hide Rules' : 'Rules'}
          </button>
        </div>

        {/* Rules Panel - Collapsible */}
        {showRules && (
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-zinc-200 animate-fade-in-delay-2">
            <ul className="text-left text-zen-text-muted text-lg space-y-4 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-zen-accent font-bold">1.</span>
                <span>Find people who match the questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zen-accent font-bold">2.</span>
                <span>Tap a square when you find a match</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zen-accent font-bold">3.</span>
                <span>Get 5 in a row to win</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
