
import React from 'react';
import { Link } from 'react-router-dom';
import { ZodiacInfo } from '@/types/horoscope';

interface ZodiacCardProps {
  zodiac: ZodiacInfo;
  index: number;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac, index }) => {
  // Element-based subtle background colors
  const elementColors = {
    fire: 'from-orange-50 to-orange-100/30',
    earth: 'from-emerald-50 to-emerald-100/30',
    air: 'from-sky-50 to-sky-100/30',
    water: 'from-blue-50 to-blue-100/30'
  };

  return (
    <Link 
      to={`/horoscope/${zodiac.sign}`}
      className="group"
      style={{ 
        animationDelay: `${index * 50}ms`,
        transform: 'translateY(0px)'
      }}
    >
      <div 
        className={`glass-card hover-lift rounded-2xl p-6 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${elementColors[zodiac.element]} animate-fade-up`}
      >
        <div className="text-4xl sm:text-5xl mb-2 transition-transform duration-500 group-hover:scale-110">
          {zodiac.emoji}
        </div>
        <h3 className="font-medium text-lg mb-1 text-center">{zodiac.name}</h3>
        <p className="text-zodiac-muted text-sm text-center">{zodiac.date}</p>
      </div>
    </Link>
  );
};

export default ZodiacCard;
