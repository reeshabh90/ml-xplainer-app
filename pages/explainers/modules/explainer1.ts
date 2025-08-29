import Explainer1Step1 from '../../../content/explainer1/step1.mdx';
import Explainer1Step2 from '../../../content/explainer1/step2.mdx';
import Explainer1Step3 from '../../../content/explainer1/step3.mdx';
import Explainer1Step4 from '../../../content/explainer1/step4.mdx';
import Explainer1Step5 from '../../../content/explainer1/step5.mdx';
import dynamic from 'next/dynamic';
import { StepConfig, SideBySideLayoutConfig, TextLayoutConfig, Layout } from '../../../models/explainer1/propmodel';
import { Animation } from '../../../models/explainer1/animationtype';

const ExplainerPage = dynamic(() => import('../../../components/explainers/explainer1/ExplainerPage'));

const steps: StepConfig[] = [
    {
        component: Explainer1Step5,
        layout: {
            type: Layout.text
        } satisfies TextLayoutConfig
    },
    {
        component: Explainer1Step1,
        layout: {
            type: Layout.sidebyside,
            animation: Animation.line
        } satisfies SideBySideLayoutConfig
    },
    {
        component: Explainer1Step2,
        layout: {
            type: Layout.sidebyside,
            animation: Animation.scatter
        } satisfies SideBySideLayoutConfig
    },
    {
        component: Explainer1Step3,
        layout: {
            type: Layout.sidebyside,
            animation: Animation.bar
        } satisfies SideBySideLayoutConfig
    },
    {
        component: Explainer1Step4,
        layout: {
            type: Layout.sidebyside,
            animation: Animation.composite
        } satisfies SideBySideLayoutConfig
    },

];

export default {
    ExplainerPage,
    steps,
};
