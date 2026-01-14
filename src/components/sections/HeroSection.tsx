import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const ScrambleText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*';
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 0.18;
    }, 55);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <span className={className}>{displayText}</span>;
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#12151a] to-[#0f1115]">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="container-custom relative z-10 py-10 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl editorial-heading text-gradient mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ScrambleText text="AthleteHub" className="inline-block" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl editorial-heading text-muted-foreground mb-6 sm:mb-8"
            >
              Helping athletes gear up with confidence and performance.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
              className="h-1 bg-accent mx-auto mb-6 sm:mb-8 rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg md:text-2xl text-muted-foreground body-text leading-relaxed">
                A performance-driven sports gear platform focused on quality, 
                reliability, and the real needs of athletes.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <span>Premium Quality</span>
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span>Trusted by Athletes</span>
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span>Since 2014</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:justify-end"
            >
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="btn-primary text-base sm:text-lg h-auto group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4"
                >
                  <span className="relative z-10 flex items-center">
                    Let's Shop
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
