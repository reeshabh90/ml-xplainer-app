import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import SideBySideLayout from '../../layouts/SideBySideLayout';
import TextLayout from '../../layouts/TextLayout';

import { Layout, StepConfig } from '../../../models/explainer1/propmodel';


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
            <Scrollama onStepEnter={onStepEnter} offset={0.5}>
                {steps.map((step, i) => {
                    const Content = step.component;
                    if (step.layout.type === Layout.text) {
                        return (
                            <Step data={i} key={i}>
                                <TextLayout stepIndex={i} currentIndex={stepIndex} content={Content} />
                            </Step>
                        );
                    }
                    // === SIDE-BY-SIDE LAYOUT ===
                    return (
                        <Step data={i} key={i}>
                            <SideBySideLayout stepIndex={i} currentIndex={stepIndex} content={Content} animation={step.layout.type === Layout.sidebyside ? step.layout.animation : undefined} />
                        </Step>
                    );
                })}
            </Scrollama>
        </div>
    );
};
export default ExplainerPage;