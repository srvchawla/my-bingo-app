import { PreviewBoard } from './PreviewBoard';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-preview-bg overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-800 via-preview-bg to-preview-bg opacity-50" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-preview-glow/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-3 h-3 bg-preview-glow/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-preview-glow/25 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">
            Soc Ops
          </h1>
          <p className="text-xl md:text-2xl text-preview-text font-light">
            Social Bingo
          </p>
          <p className="text-sm md:text-base text-preview-text/70 mt-2">
            Connect. Play. Win.
          </p>
        </div>

        {/* Preview board with 3D effect */}
        <div className="mb-8 px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <PreviewBoard />
        </div>

        {/* CTA and instructions */}
        <div className="max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
            <button
              onClick={onStart}
              className="w-full md:w-auto bg-preview-glow hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-preview-glow/50 hover:scale-105 active:scale-95"
            >
              Start Playing →
            </button>
            <div className="hidden md:block text-preview-text/50">or</div>
            <button
              onClick={onStart}
              className="w-full md:w-auto border-2 border-preview-text/30 hover:border-preview-glow text-preview-text hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              Learn How to Play
            </button>
          </div>

          {/* Quick instructions */}
          <div className="bg-preview-card/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h2 className="font-semibold text-white mb-3 text-center">Quick Start</h2>
            <ul className="text-preview-text text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-preview-glow">→</span>
                <span>Find people who match the questions on the board</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-preview-glow">→</span>
                <span>Tap a square when you find a match</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-preview-glow">→</span>
                <span>Get 5 in a row to win BINGO!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
