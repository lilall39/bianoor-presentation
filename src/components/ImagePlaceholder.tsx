import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className = '', text = 'Image' }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg min-h-[200px] w-full ${className}`}>
      <span className="text-gray-400 font-medium text-sm">{text}</span>
    </div>
  );
};

export default ImagePlaceholder;
