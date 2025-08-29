import React from 'react';
import { LayoutProps } from '../../models/propmodel';

const TextLayout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ stepIndex, currentIndex, content: Content }, ref) => {
    return (
      <div
        ref={ref} // Attach ref to the root div
        className={`my-40 flex items-center justify-center min-h-[70vh]`}
      >
        <div
          className={`p-10 rounded-xl border shadow-sm transition-colors duration-300 w-full text-center ${stepIndex === currentIndex ? 'bg-yellow-50' : 'bg-white'}`}
        >
          <div className="max-w-4xl mx-auto">
            <Content />
          </div>
        </div>
      </div>
    );
  }
);

export default TextLayout;
