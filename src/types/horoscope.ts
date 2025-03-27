
export type ZodiacSign = 
  | 'aries' 
  | 'taurus' 
  | 'gemini' 
  | 'cancer' 
  | 'leo' 
  | 'virgo' 
  | 'libra' 
  | 'scorpio' 
  | 'sagittarius' 
  | 'capricorn' 
  | 'aquarius' 
  | 'pisces';

export interface ZodiacInfo {
  sign: ZodiacSign;
  name: string;
  date: string;
  symbol: string;
  element: 'fire' | 'earth' | 'air' | 'water';
  emoji: string;
  dateRange: string;
}

export interface Horoscope {
  sign: ZodiacSign;
  date: string;
  horoscope: string;
  compatibility?: string;
  mood?: string;
  color?: string;
  luckyNumber?: string;
  luckyTime?: string;
}
