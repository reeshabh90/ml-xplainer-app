import React from 'react';
import { LayoutProps } from '../../models/explainer1/propmodel';

const TextLayout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ stepIndex, currentIndex, content: Content }, ref) => {
    const isFirstStep = stepIndex === 0;
    // Determine spacing based on step position
    const getSpacingClasses = () => {
      if (isFirstStep) {
        return 'mt-8 mb-20'; // Minimal top margin for first step
      } else {
        return 'my-20'; // Default spacing
      }
    };
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center min-h-[60vh] ${getSpacingClasses()}`}
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
