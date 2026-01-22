interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full overflow-hidden bg-gradient-to-br from-bg-dark to-bg-darker">
      {/* Animated bingo ball background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-bingo-red animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-bingo-blue animate-[float_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-20 left-16 w-20 h-20 rounded-full bg-bingo-yellow animate-[float_7s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-32 right-12 w-28 h-28 rounded-full bg-bingo-green animate-[float_6.5s_ease-in-out_infinite_1.5s]" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-bingo-purple animate-[float_5.5s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/3 right-1/3 w-14 h-14 rounded-full bg-bingo-orange animate-[float_6.8s_ease-in-out_infinite_2.5s]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-md px-6 py-8">
        {/* Title with staggered animation */}
        <div className="mb-6 animate-[slideInDown_0.8s_ease-out]">
          <h1 className="font-display text-6xl sm:text-7xl text-bingo-yellow mb-3 drop-shadow-[0_4px_12px_rgba(255,204,0,0.4)]">
            Soc Ops
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold text-white">
            <span className="inline-block animate-[bounceIn_0.6s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">🎉</span>
            <span className="animate-[slideInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">Social Bingo</span>
            <span className="inline-block animate-[bounceIn_0.6s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">🎊</span>
          </div>
        </div>

        {/* How to play card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-8 animate-[slideInUp_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards] border-4 border-bingo-pink/30">
          <h2 className="font-bold text-2xl text-bg-dark mb-4 flex items-center justify-center gap-2">
            <span className="text-3xl">🎯</span>
            <span>How to Play</span>
          </h2>
          <ul className="text-left text-gray-700 font-medium space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">👥</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">👆</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🏆</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start button with playful animations */}
        <button
          onClick={onStart}
          className="group relative w-full bg-gradient-to-r from-bingo-red via-bingo-pink to-bingo-purple text-white font-extrabold py-5 px-8 rounded-2xl text-xl shadow-2xl 
                     transition-all duration-300 
                     hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,181,0.6)]
                     active:scale-95
                     animate-[slideInUp_0.8s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]
                     hover:animate-[pulse-glow_2s_ease-in-out_infinite]"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-2xl group-hover:animate-[bounceIn_0.6s_ease-out] inline-block">🎲</span>
            <span>START GAME</span>
            <span className="text-2xl group-hover:animate-[bounceIn_0.6s_ease-out] inline-block">🎲</span>
          </span>
          {/* Animated shine effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </button>

        {/* Fun decorative elements */}
        <div className="mt-6 flex justify-center gap-4 text-4xl animate-[slideInUp_0.8s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]">
          <span className="inline-block hover:animate-[bounceIn_0.6s_ease-out] hover:scale-125 transition-transform cursor-default">🎪</span>
          <span className="inline-block hover:animate-[bounceIn_0.6s_ease-out] hover:scale-125 transition-transform cursor-default">✨</span>
          <span className="inline-block hover:animate-[bounceIn_0.6s_ease-out] hover:scale-125 transition-transform cursor-default">🎨</span>
          <span className="inline-block hover:animate-[bounceIn_0.6s_ease-out] hover:scale-125 transition-transform cursor-default">🎭</span>
        </div>
      </div>
    </div>
  );
}
