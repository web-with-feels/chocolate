import React from 'react';
import { ChocolateType } from '../types';
import { motion } from 'framer-motion';

interface MoodSelectorProps {
  currentType: ChocolateType;
  onChange: (type: ChocolateType) => void;
  message: string;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ currentType, onChange, message }) => {
  return (
    <section className="py-20 px-4 w-full flex flex-col items-center bg-black/10 backdrop-blur-md">
      <h2 className="font-serif text-3xl md:text-4xl mb-8">Pick Your Chocolate Mood</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(Object.keys(ChocolateType) as Array<keyof typeof ChocolateType>).map((key) => {
           const type = ChocolateType[key];
           let btnColor = '';
           switch(type) {
             case ChocolateType.Dark: btnColor = 'bg-[#3E2723] border-[#5D4037]'; break;
             case ChocolateType.Milk: btnColor = 'bg-[#795548] border-[#A1887F]'; break;
             case ChocolateType.White: btnColor = 'bg-[#F5F5F5] border-[#D7CCC8] text-black'; break;
             case ChocolateType.Strawberry: btnColor = 'bg-[#F8BBD0] border-[#F48FB1] text-red-900'; break;
           }

           return (
             <motion.button
               key={type}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => onChange(type)}
               className={`px-6 py-3 rounded-full font-bold shadow-lg border-2 transition-all ${btnColor} ${currentType === type ? 'ring-4 ring-offset-2 ring-caramel ring-offset-chocolate-900' : 'opacity-70 hover:opacity-100'}`}
             >
               {type}
             </motion.button>
           );
        })}
      </div>

      <motion.div
        key={message}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg text-center p-6 bg-white/10 rounded-xl border border-white/20"
      >
        <p className="font-script text-3xl md:text-4xl">{message}</p>
      </motion.div>
    </section>
  );
};

export default MoodSelector;
