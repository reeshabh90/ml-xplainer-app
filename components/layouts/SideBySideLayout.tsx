import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import AnimationPane from '../explainers/explainer1/AnimationPane';
import { LayoutProps } from '../../models/propmodel';

const SideBySideLayout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ stepIndex, currentIndex, content: Content, animation, steps }, ref) => {
    const [currentSubStep, setCurrentSubStep] = useState(0);

    // Reset sub-step when this layout becomes active or inactive
    useEffect(() => {
      if (stepIndex !== currentIndex) {
        setCurrentSubStep(0);
      }
    }, [stepIndex, currentIndex]);

    const onSubStepEnter = ({ data }: { data: number }) => {
      setCurrentSubStep(data);
    };

    // If this layout has nested steps, render the enhanced version
    if (steps && steps.length > 0) {
      return (
        <div ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[80vh]">
            {/* Left side - Scrollable content */}
            <div className="relative">
              {stepIndex === currentIndex && (
                <Scrollama onStepEnter={onSubStepEnter} offset={0.7}>
                  {steps.map((subStep, i) => {
                    const SubContent = subStep.component;
                    return (
                      <Step data={i} key={i}>
                        <div className="min-h-[80vh] flex items-center">
                          <div
                            className={`prose max-w-none p-8 rounded-xl border shadow-sm transition-colors duration-300 w-full ${i === currentSubStep ? 'bg-yellow-50' : 'bg-white'
                              }`}
                          >
                            <SubContent />
                          </div>
                        </div>
                      </Step>
                    );
                  })}
                </Scrollama>
              )}
              {/* Show placeholder when layout is not active (only if no nested steps) */}
              {stepIndex !== currentIndex && Content && (
                <div className="min-h-[80vh] flex items-center">
                  <div className="prose max-w-none p-8 rounded-xl border shadow-sm bg-white w-full">
                    <Content />
                  </div>
                </div>
              )}
            </div>

            {/* Right side - Fixed animation pane */}
            <div className="flex items-start justify-center pt-20">
              <div className="sticky top-8 w-full max-w-lg bg-gray-200 rounded-lg p-4">
                {stepIndex === currentIndex && steps && (
                  <AnimationPane animation={steps[currentSubStep]?.animation} />
                )}
                {stepIndex !== currentIndex && animation && (
                  <AnimationPane animation={animation} />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Fallback to original behavior for backward compatibility (single step)
    if (!Content) {
      return <div>Error: No content or steps provided</div>;
    }

    return (
      <div className="my-40" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`prose max-w-none p-6 rounded-xl border shadow-sm transition-colors duration-300 ${stepIndex === currentIndex ? 'bg-yellow-50' : 'bg-white'
              }`}
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