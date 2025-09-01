import Explainer1Step1 from '../../../content/explainer1/step1.mdx';
import Explainer1Step2 from '../../../content/explainer1/step2.mdx';
import Explainer1Step3 from '../../../content/explainer1/step3.mdx';
import Explainer1Step4 from '../../../content/explainer1/step4.mdx';
import Explainer1Step5 from '../../../content/explainer1/step5.mdx';
import dynamic from 'next/dynamic';
import { StepConfig, SideBySideLayoutConfig, TextLayoutConfig, Layout } from '../../../models/explainer1/propmodel';
import { Animation } from '../../../models/explainer1/animationtype';

const ExplainerPage = dynamic(() => import('../../../components/explainers/ExplainerPage'));

const steps: StepConfig[] = [
    {
        component: Explainer1Step5,
        layout: {
            type: Layout.text
        } satisfies TextLayoutConfig
    },
    {
        layout: {
            type: Layout.sidebyside,
            steps: [
                { component: Explainer1Step1, animation: Animation.line },
                { component: Explainer1Step2, animation: Animation.scatter },
                { component: Explainer1Step3, animation: Animation.bar },
                { component: Explainer1Step4, animation: Animation.composite }
            ]
        } satisfies SideBySideLayoutConfig
    },

    {
        component: Explainer1Step5,
        layout: {
            type: Layout.text
        } satisfies TextLayoutConfig
    },


];

export default {
    ExplainerPage,
    steps,
};
