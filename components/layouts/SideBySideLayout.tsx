import React from 'react';

interface SideBySideLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
  containerClassName?: string;
}

const SideBySideLayout: React.FC<SideBySideLayoutProps> = ({
  left,
  right,
  leftClassName = '',
  rightClassName = '',
  containerClassName = '',
}) => (
  <div className={`my-40 grid grid-cols-1 md:grid-cols-2 gap-6 ${containerClassName}`}>
    <div className={`prose max-w-none p-6 rounded-xl border shadow-sm transition-colors duration-300 ${leftClassName}`}>
      {left}
    </div>
    <div className={`flex items-start justify-center pt-6 ${rightClassName}`}>
      {right}
    </div>
  </div>
);

export default SideBySideLayout;
