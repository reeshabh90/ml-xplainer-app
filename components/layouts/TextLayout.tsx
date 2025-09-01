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
        className={`flex items-center justify-center`}
      >
        <div className={`prose p-10 rounded-xl w-full text-center max-w-4xl mx-auto`}>
          <Content />
        </div>
      </div>
    );
  }
);

export default TextLayout;
