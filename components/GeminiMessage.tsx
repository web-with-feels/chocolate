import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';
import { motion } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';

const GeminiMessage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const result = await generateRomanticPoem(topic);
    setPoem(result);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 w-full max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h2 className="font-serif text-3xl md:text-4xl flex items-center justify-center gap-3">
          <Sparkles className="text-caramel" />
          AI Sprinkles of Love
          <Sparkles className="text-caramel" />
        </h2>
        <p className="opacity-70 mt-2">Give me a word (e.g., "Rain", "Coffee"), and I'll write you a tiny poem.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a sweet topic..."
          className="px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:border-caramel focus:ring-1 focus:ring-caramel outline-none transition-all placeholder:text-white/30 flex-grow max-w-md"
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !topic}
          className="px-8 py-3 bg-caramel text-chocolate-900 font-bold rounded-full disabled:opacity-50 hover:bg-orange-300 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
             <div className="w-5 h-5 border-2 border-chocolate-900 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Write Poem <Send size={18} />
            </>
          )}
        </button>
      </div>

      {poem && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-cream/10 border border-cream/20 p-8 rounded-2xl relative"
        >
            <div className="absolute -top-3 -left-3 text-4xl">❝</div>
            <p className="font-script text-3xl md:text-4xl leading-relaxed text-caramel">
                {poem}
            </p>
            <div className="absolute -bottom-3 -right-3 text-4xl">❞</div>
        </motion.div>
      )}
    </section>
  );
};

export default GeminiMessage;
