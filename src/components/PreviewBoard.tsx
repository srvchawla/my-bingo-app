import { useState } from 'react';
import { questions, FREE_SPACE } from '../data/questions';

interface PreviewSquareProps {
  text: string;
  index: number;
  isFreeSpace: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function PreviewSquare({ text, index, isFreeSpace, isHovered, onHover, onLeave }: PreviewSquareProps) {
  const delay = `${index * 40}ms`;
  
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center p-2 text-center border border-slate-600 rounded-lg transition-all duration-300 select-none min-h-[60px] text-xs leading-tight bg-preview-card cursor-pointer animate-fade-in-up"
      style={{ 
        animationDelay: delay,
        transform: isHovered ? 'translateZ(20px) scale(1.05)' : 'translateZ(0) scale(1)',
        boxShadow: isHovered 
          ? '0 10px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)' 
          : '0 4px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <span className={`${isFreeSpace ? 'font-bold text-sm text-preview-glow' : 'text-preview-text'}`}>
        {text}
      </span>
      {isHovered && !isFreeSpace && (
        <div className="absolute inset-0 bg-preview-glow/10 rounded-lg pointer-events-none" />
      )}
    </div>
  );
}

export function PreviewBoard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Create a sample board with some questions
  const sampleBoard = Array.from({ length: 25 }, (_, i) => {
    if (i === 12) return FREE_SPACE; // center is free space
    return questions[i % questions.length];
  });

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className="grid grid-cols-5 gap-2 w-full aspect-square"
        style={{
          transform: 'rotateX(5deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {sampleBoard.map((text, index) => (
          <PreviewSquare
            key={index}
            text={text}
            index={index}
            isFreeSpace={index === 12}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
      
      {/* Glow effect behind board */}
      <div 
        className="absolute inset-0 -z-10 blur-3xl animate-pulse-glow"
        style={{ 
          transform: 'translateZ(-50px)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
