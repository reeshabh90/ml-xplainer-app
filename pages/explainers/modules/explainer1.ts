import dynamic from 'next/dynamic';
import Explainer1Step1 from '../../../content/explainer1/step1.mdx';
import Explainer1Step2 from '../../../content/explainer1/step2.mdx';
import Explainer1Step3 from '../../../content/explainer1/step3.mdx';
import Explainer1Step4 from '../../../content/explainer1/step4.mdx';

const ExplainerPage = dynamic(() => import('../../../components/explainers/explainer1/ExplainerPage'));

const steps = [
    Explainer1Step1,
    Explainer1Step2,
    Explainer1Step3,
    Explainer1Step4,
];

export default {
    ExplainerPage,
    steps,
};
