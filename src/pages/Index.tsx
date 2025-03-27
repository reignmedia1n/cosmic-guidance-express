
import React from 'react';
import Header from '@/components/Header';
import ZodiacGrid from '@/components/ZodiacGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-10 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Your Daily Cosmic Guidance
          </h1>
          <p className="text-lg text-zodiac-muted">
            Discover what the stars have aligned for you today. Select your zodiac sign to reveal your daily horoscope.
          </p>
        </div>
        
        <ZodiacGrid />
      </main>
      
      <footer className="py-6 text-center text-sm text-zodiac-muted animate-fade-in">
        <p>&copy; {new Date().getFullYear()} Cosmic Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
