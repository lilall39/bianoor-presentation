"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CardProps {
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, className = '', variants }) => {
  return (
    <motion.div 
      variants={variants}
      className={`p-6 sm:p-8 bg-[#F0E6DD]/30 rounded-2xl border border-accent/10 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 ${className}`}
    >
      {icon && <div className="mb-4 sm:mb-6 text-accent">{icon}</div>}
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>
      {typeof description === 'string' ? (
        <div 
          className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-bold"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        <div className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-bold">
          {description}
        </div>
      )}
    </motion.div>
  );
};

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({ children, columns = 3, className = '' }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
};
