import React, { useState, useRef } from 'react';
import { ChocolateType } from './types';
import { THEME_STYLES } from './constants';

import Hero from './components/Hero';
import ChocolateBox from './components/ChocolateBox';
import SweetReasons from './components/SweetReasons';
import MemoryTimeline from './components/MemoryTimeline';
import MoodSelector from './components/MoodSelector';
import LoveQuiz from './components/LoveQuiz';
import SurpriseReveal from './components/SurpriseReveal';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import GeminiMessage from './components/GeminiMessage';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ChocolateType>(ChocolateType.Dark);
  const styles = THEME_STYLES[currentTheme];
  
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${styles.bg} ${styles.text}`}>
      
      {/* Hero Section takes full screen initially */}
      <Hero onScrollDown={scrollToContent} />

      {/* Main Content Wrapper */}
      <div ref={contentRef} className="relative w-full">
        {/* Decorative Gradient Overlay for smoothness */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>

        <ChocolateBox />
        
        <MoodSelector 
          currentType={currentTheme} 
          onChange={setCurrentTheme} 
          message={styles.message}
        />
        
        <SweetReasons />
        
        <MemoryTimeline />
        
        {/* Gemini AI Integration */}
        <GeminiMessage />

        <LoveQuiz />
        
        <SurpriseReveal />
        
        <Footer />
      </div>

      <AudioPlayer />
      
      {/* Subtle overlay texture to give it a 'paper' or 'chocolate wrapper' feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default App;
