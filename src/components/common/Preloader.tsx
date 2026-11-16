import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 380);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-navy-primary text-soft-white select-none pointer-events-none"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: -20,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-xl border border-navy-border bg-navy-card flex items-center justify-center shadow-lg">
            <span className="font-serif text-lg font-bold text-accent-blue">
              MH
            </span>
          </div>
          <span className="font-serif text-sm font-light tracking-[0.25em] text-platinum uppercase">
            MOHITH KUSHA KUMAR
          </span>
          <div className="w-20 h-[2px] bg-navy-border overflow-hidden rounded-full relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-accent-blue"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
