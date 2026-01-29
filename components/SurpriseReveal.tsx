import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const SurpriseReveal: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    // Big confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC0CB', '#FF69B4', '#FF1493']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC0CB', '#FF69B4', '#FF1493']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center min-h-[60vh]">
      {!revealed ? (
        <motion.button
          onClick={handleReveal}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-gradient-to-r from-rose-500 to-deepRose text-white font-bold rounded-full text-xl shadow-[0_0_30px_rgba(244,63,94,0.6)] animate-pulse"
        >
          One Last Sweet Surprise
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center relative max-w-4xl"
        >
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"
             />
          </div>

          <h2 className="font-script text-6xl md:text-8xl text-rose-300 mb-8 drop-shadow-lg">
            I Love You
          </h2>
          
          <div className="space-y-6 font-serif text-xl md:text-2xl leading-relaxed bg-black/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            <p>
              More than words can say. More than chocolate can taste.
            </p>
            <p>
              I may not be perfect, but I choose you every day. 
            </p>
            <p className="text-caramel font-bold italic">
              You are my forever.
            </p>
          </div>

          <motion.div 
            className="mt-12 flex justify-center"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          >
            <Heart className="w-20 h-20 fill-rose-500 text-rose-600 drop-shadow-2xl" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default SurpriseReveal;
