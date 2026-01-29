import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full blur-sm"
            initial={{ y: -20, x: Math.random() * window.innerWidth, opacity: 0 }}
            animate={{ y: window.innerHeight + 20, opacity: [0, 0.5, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
            }}
          />
        ))}
      </div>

      <div className="z-10 max-w-4xl space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
           <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm tracking-widest uppercase mb-4">
            Special Surprise
          </span>
          <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-chocolate-100 drop-shadow-lg mb-2">
            Happy Chocolate Day
          </h1>
          <h2 className="font-serif italic text-2xl md:text-4xl text-caramel/90">
            My Sweetest Addiction 🍫❤️
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-chocolate-200 max-w-lg mx-auto font-sans font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Life without you is like chocolate without cocoa... impossible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <button 
            onClick={onScrollDown}
            className="group relative px-8 py-4 bg-gradient-to-r from-caramel to-orange-400 text-chocolate-900 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Unwrap My Love
            <Heart className="w-5 h-5 fill-chocolate-900 group-hover:animate-ping" />
          </button>
        </motion.div>
      </div>

      {/* Floating Chocolate Bar Graphic (Abstract) */}
      <motion.div 
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-chocolate-700/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-20 -left-20 w-80 h-80 bg-chocolate-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div 
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
