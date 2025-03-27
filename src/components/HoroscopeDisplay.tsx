
import React from 'react';
import { Horoscope, ZodiacInfo } from '@/types/horoscope';
import { Calendar, Clock, Heart, Hash, Palette } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface HoroscopeDisplayProps {
  zodiacInfo: ZodiacInfo;
  horoscope: Horoscope | null;
  isLoading: boolean;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ 
  zodiacInfo, 
  horoscope, 
  isLoading 
}) => {
  // Element-based accent colors
  const elementAccentColors = {
    fire: 'bg-orange-100 text-orange-800 border-orange-200',
    earth: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    air: 'bg-sky-100 text-sky-800 border-sky-200',
    water: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 animate-fade-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4">
          <span className="text-6xl sm:text-7xl">{zodiacInfo.emoji}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{zodiacInfo.name}</h1>
        
        <div className="flex items-center justify-center text-zodiac-muted mb-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{zodiacInfo.dateRange}</span>
        </div>
        
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${elementAccentColors[zodiacInfo.element]}`}>
          {zodiacInfo.element.charAt(0).toUpperCase() + zodiacInfo.element.slice(1)} Element
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Daily Horoscope</h2>
            {isLoading ? (
              <Skeleton className="h-5 w-24" />
            ) : (
              <div className="text-zodiac-muted text-sm">
                {horoscope?.date || new Date().toDateString()}
              </div>
            )}
          </div>

          <div className="prose prose-sm sm:prose max-w-none">
            {isLoading ? (
              <>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
              </>
            ) : (
              <p className="text-base sm:text-lg leading-relaxed mb-8">
                {horoscope?.horoscope || "Connecting with the stars..."}
              </p>
            )}
          </div>

          {horoscope && !isLoading && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {horoscope.compatibility && (
                <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex flex-col items-center">
                  <Heart className="h-5 w-5 text-pink-500 mb-1" />
                  <span className="text-xs text-zodiac-muted mb-1">Compatibility</span>
                  <span className="font-medium">{horoscope.compatibility}</span>
                </div>
              )}
              
              {horoscope.luckyNumber && (
                <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex flex-col items-center">
                  <Hash className="h-5 w-5 text-indigo-500 mb-1" />
                  <span className="text-xs text-zodiac-muted mb-1">Lucky Number</span>
                  <span className="font-medium">{horoscope.luckyNumber}</span>
                </div>
              )}
              
              {horoscope.color && (
                <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex flex-col items-center">
                  <Palette className="h-5 w-5 text-violet-500 mb-1" />
                  <span className="text-xs text-zodiac-muted mb-1">Lucky Color</span>
                  <span className="font-medium">{horoscope.color}</span>
                </div>
              )}
              
              {horoscope.luckyTime && (
                <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-3 flex flex-col items-center">
                  <Clock className="h-5 w-5 text-teal-500 mb-1" />
                  <span className="text-xs text-zodiac-muted mb-1">Lucky Time</span>
                  <span className="font-medium">{horoscope.luckyTime}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeDisplay;
