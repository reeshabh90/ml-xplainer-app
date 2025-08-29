import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import SideBySideLayout from '../../layouts/SideBySideLayout';
import TextLayout from '../../layouts/TextLayout';

type StepConfig = {
    component: React.ComponentType;
    layout?: 'text' | 'side-by-side';
};

type ExplainerPageProps = {
    steps: Array<StepConfig>;
};

const ExplainerPage = ({ steps }: ExplainerPageProps) => {
    const [stepIndex, setStepIndex] = useState(0);
    const onStepEnter = ({ data }: { data: number }) => {
        setStepIndex(data);
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 p-6">
                    <Scrollama onStepEnter={onStepEnter} offset={0.6}>
                        {steps.map((step, i) => {
                            const layout = step.layout ?? 'side-by-side';
                            const Content = step.component;
                            if (layout === 'text') {
                                return (
                                    <Step data={i} key={i}>
                                        <TextLayout stepIndex={i} currentIndex={stepIndex} content={Content} />
                                    </Step>
                                );
                            }
                            // === SIDE-BY-SIDE LAYOUT ===
                            return (
                                <Step data={i} key={i}>                    
                                    <SideBySideLayout stepIndex={i} currentIndex={stepIndex} content={Content} />
                                </Step>
                            );
                        })}
                    </Scrollama>
        </div>
    );
};
export default ExplainerPage;