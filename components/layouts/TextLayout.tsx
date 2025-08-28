import React from 'react';

interface TextLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const TextLayout: React.FC<TextLayoutProps> = ({
  children,
  className = '',
  containerClassName = '',
}) => (
  <div className={`my-40 flex items-center justify-center min-h-[70vh] ${containerClassName}`}>
    <div className={`p-10 rounded-xl border shadow-sm transition-colors duration-300 w-full text-center ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  </div>
);

export default TextLayout;
