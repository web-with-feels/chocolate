import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';

const SweetReasons: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Why You Are Sweeter Than Chocolate</h2>
        <div className="h-1 w-24 bg-caramel mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS.map((reason, index) => (
          <div
            key={reason.id}
            className="group relative h-64 w-full cursor-pointer perspective-1000"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setHoveredId(reason.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: hoveredId === reason.id ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              className="relative h-full w-full shadow-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div 
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/10 to-white/5 glass rounded-xl flex flex-col items-center justify-center p-6 border border-white/10"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">{reason.emoji}</span>
                <h3 className="font-serif text-2xl text-center">{reason.title}</h3>
                <p className="text-sm mt-4 opacity-70">(Hover to unwrap)</p>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 h-full w-full bg-caramel text-chocolate-900 rounded-xl flex items-center justify-center p-6 text-center shadow-lg shadow-caramel/20"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="font-serif text-lg font-medium leading-relaxed">
                  "{reason.description}"
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SweetReasons;