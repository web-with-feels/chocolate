import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHOCOLATE_MESSAGES } from '../constants';
import { ChocolateMessage } from '../types';
import { X } from 'lucide-react';

const ChocolateBox: React.FC = () => {
  const [selectedChocolate, setSelectedChocolate] = useState<ChocolateMessage | null>(null);

  return (
    <section className="py-20 px-4 w-full flex flex-col items-center z-10">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">A Box of Sweets</h2>
        <p className="opacity-80 font-sans">Click a chocolate to reveal a message hidden inside.</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto p-8 bg-chocolate-800/50 rounded-xl backdrop-blur-sm border-4 border-chocolate-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
        {/* Lid Effect (Visual only) */}
        <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>

        {CHOCOLATE_MESSAGES.map((choco) => (
          <motion.div
            key={choco.id}
            onClick={() => setSelectedChocolate(choco)}
            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-square relative cursor-pointer group perspective-1000"
          >
            {/* The Chocolate Visual */}
            <div className="w-full h-full bg-gradient-to-br from-chocolate-600 to-chocolate-900 rounded-full shadow-lg flex items-center justify-center border-b-4 border-chocolate-950 group-hover:shadow-chocolate-500/20 transition-all">
              <div className="w-3/4 h-3/4 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center">
                 <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100">
                   🍫
                 </span>
              </div>
              {/* Gloss */}
              <div className="absolute top-2 left-4 w-4 h-2 bg-white/20 rounded-full rotate-[-45deg] blur-[1px]"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Message */}
      <AnimatePresence>
        {selectedChocolate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedChocolate(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, rotateX: -90 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-cream text-chocolate-900 p-8 rounded-2xl shadow-2xl max-w-sm w-full relative text-center border-4 border-caramel"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedChocolate(null)}
                className="absolute top-2 right-2 p-1 hover:bg-chocolate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-6xl mb-4 animate-bounce">
                {selectedChocolate.icon}
              </div>
              
              <h3 className="font-script text-3xl mb-4 text-chocolate-700">
                {selectedChocolate.type === 'memory' ? 'A Sweet Memory' : 
                 selectedChocolate.type === 'compliment' ? 'Just For You' : 'From My Heart'}
              </h3>
              
              <p className="font-serif text-xl italic leading-relaxed">
                "{selectedChocolate.content}"
              </p>

              <div className="mt-6 text-xs uppercase tracking-widest text-chocolate-400">
                With Love
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ChocolateBox;
