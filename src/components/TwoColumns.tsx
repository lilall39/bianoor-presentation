import React from 'react';

interface TwoColumnsProps {
  children: [React.ReactNode, React.ReactNode];
  reversed?: boolean;
  align?: 'center' | 'top';
  className?: string;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({ children, reversed = false, align = 'center', className = '' }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 ${align === 'center' ? 'items-center' : 'items-start'} ${className}`}>
      <div className={`${reversed ? 'order-2 lg:order-1' : 'order-1'}`}>
        {children[0]}
      </div>
      <div className={`${reversed ? 'order-1 lg:order-2' : 'order-2'}`}>
        {children[1]}
      </div>
    </div>
  );
};

export default TwoColumns;
