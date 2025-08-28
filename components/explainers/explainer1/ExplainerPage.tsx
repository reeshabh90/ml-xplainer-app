import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import AnimationPane from './AnimationPane';

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
                                <div className="my-40 flex items-center justify-center min-h-[70vh]">
                                    <div
                                        className={`p-10 rounded-xl border shadow-sm transition-colors duration-300 w-full text-center ${stepIndex === i ? 'bg-yellow-50' : 'bg-white'}`}
                                    >
                                        <div className="max-w-4xl mx-auto">
                                            <Content />
                                        </div>
                                    </div>
                                </div>
                            </Step>
                        );
                    }
                    // === SIDE-BY-SIDE LAYOUT ===
                    return (
                        <Step data={i} key={i}>
                            <div className="my-40">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div
                                        className={`prose max-w-none p-6 rounded-xl border shadow-sm transition-colors duration-300 ${stepIndex === i ? 'bg-yellow-50' : 'bg-white'}`}
                                    >
                                        <Content />
                                    </div>
                                    <div className="flex items-start justify-center pt-6">
                                        {stepIndex === i && <AnimationPane stepIndex={i} />}
                                    </div>
                                </div>
                            </div>
                        </Step>
                    );
                })}
            </Scrollama>
        </div>
    );
};

export default ExplainerPage;