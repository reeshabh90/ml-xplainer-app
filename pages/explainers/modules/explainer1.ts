import Explainer1Step1 from '../../../content/explainer1/step1.mdx';
import Explainer1Step2 from '../../../content/explainer1/step2.mdx';
import Explainer1Step3 from '../../../content/explainer1/step3.mdx';
import Explainer1Step4 from '../../../content/explainer1/step4.mdx';
import Explainer1Step5 from '../../../content/explainer1/step5.mdx';
import dynamic from 'next/dynamic';

const ExplainerPage = dynamic(() => import('../../../components/explainers/explainer1/ExplainerPage'));

const steps = [
    { component: Explainer1Step1, layout: 'side-by-side' },
    { component: Explainer1Step2, layout: 'side-by-side' },
    { component: Explainer1Step3, layout: 'side-by-side' },
    { component: Explainer1Step4, layout: 'side-by-side' },
    { component: Explainer1Step5, layout: 'text' }, // This is the text-only section
];

export default {
    ExplainerPage,
    steps,
};
