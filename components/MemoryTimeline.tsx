import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';
import { Heart } from 'lucide-react';

const MemoryTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 w-full max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">Our Sweet Timeline</h2>

      <div className="relative border-l-4 border-chocolate-600/30 ml-4 md:ml-1/2 space-y-12">
        {MEMORIES.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            {/* Dot on timeline */}
            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-caramel rounded-full border-4 border-chocolate-900 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Image */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                 <div className="relative group overflow-hidden rounded-xl border-4 border-white/10 shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    <img 
                      src={memory.image} 
                      alt={memory.title} 
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-chocolate-900/30 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-caramel/50 transition-colors">
                <span className="text-caramel font-bold tracking-widest text-sm">{memory.date}</span>
                <h3 className="font-script text-3xl my-2 text-rose-200">{memory.title}</h3>
                <p className="font-sans font-light leading-relaxed text-chocolate-100/90">
                  {memory.description}
                </p>
                <Heart className="w-4 h-4 text-rose-400 mt-4 fill-rose-400/50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryTimeline;
