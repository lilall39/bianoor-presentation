"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  dark?: boolean;
  animated?: boolean;
  viewportAmount?: number;
  viewportMargin?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  dark = false,
  animated = false,
  viewportAmount = 0.1,
  viewportMargin = "-10% 0px -15% 0px"
}) => {
  return (
    <motion.section 
      initial={animated ? "hidden" : undefined}
      whileInView={animated ? "visible" : undefined}
      viewport={animated ? { once: false, amount: viewportAmount, margin: viewportMargin } : undefined}
      variants={animated ? {
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {}
      } : undefined}
      className={`py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-24 ${dark ? 'bg-accent text-white' : 'bg-background text-foreground'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-6 sm:mb-8 overflow-hidden">
            {subtitle && (
              <motion.p 
                variants={animated ? {
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                } : undefined}
                className={`text-base font-bold uppercase tracking-widest mb-3 md:mb-4 ${dark ? 'text-orange-200' : 'text-accent'}`}
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2 
                variants={animated ? {
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                } : undefined}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight font-serif font-medium tracking-tight"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        <motion.div
          variants={animated ? {
            visible: { transition: { staggerChildren: 0.16 } },
            hidden: {}
          } : undefined}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;
