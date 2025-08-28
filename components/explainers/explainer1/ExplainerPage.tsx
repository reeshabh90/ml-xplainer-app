// Copied from original ExplainerPage.tsx for explainer1
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import AnimationPane from './AnimationPane';

type ExplainerPageProps = {
    steps: Array<React.ComponentType>;
};

const ExplainerPage = ({ steps }: ExplainerPageProps) => {
    const [stepIndex, setStepIndex] = useState(0);

    const onStepEnter = ({ data }: { data: number }) => {
        setStepIndex(data);
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="prose max-w-none">
                    <Scrollama onStepEnter={onStepEnter} offset={0.6}>
                        {steps.map((Content, i) => (
                            <Step data={i} key={i}>
                                <div className={`my-40 p-6 rounded-xl border shadow-sm transition-colors duration-300 ${stepIndex === i ? 'bg-yellow-50' : 'bg-white'}`}>
                                    <Content />
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </div>

                <div className="flex items-start justify-center sticky top-20 h-screen pt-24">
                    <AnimationPane stepIndex={stepIndex} />
                </div>
            </div>
        </div>
    );
};

export default ExplainerPage;
// ...existing code...
