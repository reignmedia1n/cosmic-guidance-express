
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 flex justify-center items-center animate-fade-in">
      <Link 
        to="/" 
        className="flex items-center space-x-2 group transition-all duration-300"
      >
        <Star className="h-6 w-6 text-zodiac-accent group-hover:rotate-45 transition-transform duration-500" />
        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="text-zodiac-accent">Cosmic</span> Guidance
        </h1>
      </Link>
    </header>
  );
};

export default Header;
