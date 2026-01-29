import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../constants';
import { Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const LoveQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent multi-click

    setSelectedOption(index);
    const correct = index === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB74D', '#FFF8E1', '#F8BBD0']
      });
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(curr => curr + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };

  return (
    <section className="py-20 px-4 w-full max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-5xl mb-2">How Well Do You Know Us?</h2>
        <p className="opacity-70">A tiny quiz for my favorite person.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">
        {completed ? (
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="text-center space-y-6"
           >
             <div className="text-6xl animate-bounce">🏆</div>
             <h3 className="font-script text-5xl text-caramel">Perfect Score!</h3>
             <p className="text-xl">You know my heart better than anyone else.</p>
             <p className="text-sm opacity-50">You've unlocked unlimited kisses coupon.</p>
           </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex justify-between text-xs uppercase tracking-widest opacity-50">
              <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>Keep Going!</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-center">
              {QUIZ_QUESTIONS[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={selectedOption !== null}
                  className={`
                    p-4 rounded-xl text-left transition-all relative overflow-hidden
                    ${selectedOption === null ? 'bg-white/10 hover:bg-white/20' : ''}
                    ${selectedOption === idx && isCorrect ? 'bg-green-500/50 border-green-400' : ''}
                    ${selectedOption === idx && !isCorrect ? 'bg-red-500/50 border-red-400' : ''}
                    ${selectedOption !== null && idx === QUIZ_QUESTIONS[currentQuestion].correctAnswer ? 'bg-green-500/50 border-green-400 ring-2 ring-green-300' : ''}
                  `}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {option}
                    {selectedOption === idx && isCorrect && <Check className="w-5 h-5 text-green-200" />}
                    {selectedOption === idx && !isCorrect && <X className="w-5 h-5 text-red-200" />}
                  </span>
                </button>
              ))}
            </div>

            {isCorrect && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-caramel font-script text-2xl"
              >
                {QUIZ_QUESTIONS[currentQuestion].successMessage}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LoveQuiz;
