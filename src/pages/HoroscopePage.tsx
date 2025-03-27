
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ZodiacSign } from '@/types/horoscope';
import { getZodiacInfo, fetchHoroscope } from '@/utils/horoscopeApi';
import Header from '@/components/Header';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const HoroscopePage: React.FC = () => {
  const { sign } = useParams<{ sign: string }>();
  const navigate = useNavigate();
  
  // Validate the sign parameter
  const zodiacSign = sign as ZodiacSign;
  const zodiacInfo = getZodiacInfo(zodiacSign);
  
  useEffect(() => {
    // If invalid sign, redirect to home
    if (!zodiacInfo) {
      toast.error("Invalid zodiac sign.");
      navigate('/');
    }
  }, [zodiacInfo, navigate]);
  
  // Fetch horoscope data
  const { data: horoscope, isLoading } = useQuery({
    queryKey: ['horoscope', zodiacSign],
    queryFn: () => fetchHoroscope(zodiacSign),
    enabled: !!zodiacInfo,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  
  if (!zodiacInfo) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-4 animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-6 animate-fade-up">
          <Link 
            to="/" 
            className="inline-flex items-center text-zodiac-accent hover:text-zodiac-accent/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to all signs</span>
          </Link>
        </div>
        
        <HoroscopeDisplay 
          zodiacInfo={zodiacInfo} 
          horoscope={horoscope || null} 
          isLoading={isLoading} 
        />
      </main>
      
      <footer className="py-6 text-center text-sm text-zodiac-muted animate-fade-in">
        <p>&copy; {new Date().getFullYear()} Cosmic Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HoroscopePage;
