import { useRouter } from 'next/router';
import React from 'react';
import { explainerRegistry } from './modules';

export default function ExplainerDynamicPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug || typeof slug !== 'string') return <div>Loading...</div>;
    const module = explainerRegistry[slug];
    if (!module) return <div>Explainer not found</div>;

    const ExplainerPage = module.ExplainerPage;
    const steps = module.steps;
    return <ExplainerPage steps={steps} />;
}
