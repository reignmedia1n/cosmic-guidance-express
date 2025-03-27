
import { ZodiacSign, Horoscope, ZodiacInfo } from "@/types/horoscope";
import { toast } from "sonner";

// Zodiac sign information
export const zodiacSigns: ZodiacInfo[] = [
  {
    sign: 'aries',
    name: 'Aries',
    emoji: '♈',
    date: 'Mar 21 - Apr 19',
    symbol: 'Ram',
    element: 'fire',
    dateRange: 'March 21 - April 19'
  },
  {
    sign: 'taurus',
    name: 'Taurus',
    emoji: '♉',
    date: 'Apr 20 - May 20',
    symbol: 'Bull',
    element: 'earth',
    dateRange: 'April 20 - May 20'
  },
  {
    sign: 'gemini',
    name: 'Gemini',
    emoji: '♊',
    date: 'May 21 - Jun 20',
    symbol: 'Twins',
    element: 'air',
    dateRange: 'May 21 - June 20'
  },
  {
    sign: 'cancer',
    name: 'Cancer',
    emoji: '♋',
    date: 'Jun 21 - Jul 22',
    symbol: 'Crab',
    element: 'water',
    dateRange: 'June 21 - July 22'
  },
  {
    sign: 'leo',
    name: 'Leo',
    emoji: '♌',
    date: 'Jul 23 - Aug 22',
    symbol: 'Lion',
    element: 'fire',
    dateRange: 'July 23 - August 22'
  },
  {
    sign: 'virgo',
    name: 'Virgo',
    emoji: '♍',
    date: 'Aug 23 - Sep 22',
    symbol: 'Virgin',
    element: 'earth',
    dateRange: 'August 23 - September 22'
  },
  {
    sign: 'libra',
    name: 'Libra',
    emoji: '♎',
    date: 'Sep 23 - Oct 22',
    symbol: 'Scales',
    element: 'air',
    dateRange: 'September 23 - October 22'
  },
  {
    sign: 'scorpio',
    name: 'Scorpio',
    emoji: '♏',
    date: 'Oct 23 - Nov 21',
    symbol: 'Scorpion',
    element: 'water',
    dateRange: 'October 23 - November 21'
  },
  {
    sign: 'sagittarius',
    name: 'Sagittarius',
    emoji: '♐',
    date: 'Nov 22 - Dec 21',
    symbol: 'Archer',
    element: 'fire',
    dateRange: 'November 22 - December 21'
  },
  {
    sign: 'capricorn',
    name: 'Capricorn',
    emoji: '♑',
    date: 'Dec 22 - Jan 19',
    symbol: 'Goat',
    element: 'earth',
    dateRange: 'December 22 - January 19'
  },
  {
    sign: 'aquarius',
    name: 'Aquarius',
    emoji: '♒',
    date: 'Jan 20 - Feb 18',
    symbol: 'Water Bearer',
    element: 'air',
    dateRange: 'January 20 - February 18'
  },
  {
    sign: 'pisces',
    name: 'Pisces',
    emoji: '♓',
    date: 'Feb 19 - Mar 20',
    symbol: 'Fish',
    element: 'water',
    dateRange: 'February 19 - March 20'
  }
];

export const getZodiacInfo = (sign: ZodiacSign): ZodiacInfo | undefined => {
  return zodiacSigns.find(zodiac => zodiac.sign === sign);
};

// Function to fetch daily horoscope using a different API
export const fetchHoroscope = async (sign: ZodiacSign): Promise<Horoscope> => {
  try {
    // Using Horoscope API from RapidAPI
    const apiUrl = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`;
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': 'f458fdbeb7msh91ef95dc53d0e75p1f3affjsn9c05c8c8d8d1',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      }
    };

    const response = await fetch(apiUrl, options);
    
    if (!response.ok) {
      throw new Error('Failed to fetch horoscope');
    }
    
    const data = await response.json();
    
    return {
      sign,
      date: data.current_date,
      horoscope: data.description,
      compatibility: data.compatibility,
      mood: data.mood,
      color: data.color,
      luckyNumber: data.lucky_number,
      luckyTime: data.lucky_time
    };
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    toast.error("Failed to fetch horoscope. Please try again later.");
    
    // Return fallback data with all required properties
    return {
      sign,
      date: new Date().toDateString(),
      horoscope: "We're having trouble connecting to the cosmic forces right now. Please check back later for your daily horoscope.",
      compatibility: "N/A",
      mood: "Contemplative",
      color: "Silver",
      luckyNumber: "7",
      luckyTime: "12:00 PM"
    };
  }
};
