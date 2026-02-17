import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <div className={`pt-2 pb-4 px-5 bg-[#F0E6DD]/40 rounded-2xl border border-accent/10 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col items-start justify-start ${className}`}>
      {icon && <div className="mb-1 text-accent">{icon}</div>}
      <h3 className="text-[22px] font-bold mt-0 mb-1 text-accent leading-tight">{title}</h3>
      <p className="text-[#1F1F1F] text-[17px] leading-relaxed text-justify whitespace-pre-line">{description}</p>
    </div>
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
