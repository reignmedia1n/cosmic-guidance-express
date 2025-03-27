
import React from 'react';
import ZodiacCard from './ZodiacCard';
import { zodiacSigns } from '@/utils/horoscopeApi';

const ZodiacGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 max-w-7xl mx-auto pb-16">
      {zodiacSigns.map((zodiac, index) => (
        <ZodiacCard key={zodiac.sign} zodiac={zodiac} index={index} />
      ))}
    </div>
  );
};

export default ZodiacGrid;
