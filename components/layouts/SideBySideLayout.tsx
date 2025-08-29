import React from 'react';
import AnimationPane from '../explainers/explainer1/AnimationPane';
import { LayoutProps } from '../../models/explainer1/propmodel';

const SideBySideLayout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ stepIndex, currentIndex, content: Content, animation }, ref) => {
    return (
      <div className="my-40" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`prose max-w-none p-6 rounded-xl border shadow-sm transition-colors duration-300 ${stepIndex === currentIndex ? 'bg-yellow-50' : 'bg-white'}`}
          >
            <Content />
          </div>
          <div className="flex items-start justify-center pt-6">
            {stepIndex === currentIndex && <AnimationPane animation={animation} />}
          </div>
        </div>
      </div>
    );
  }
);

export default SideBySideLayout;
