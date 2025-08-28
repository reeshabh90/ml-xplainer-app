import explainer1 from './explainer1';

export interface ExplainerModule {
    slug: string;
    title: string;
    ExplainerPage: any;
    steps: any[];
}

export const explainerRegistry: Record<string, ExplainerModule> = {
    explainer1: {
        slug: 'explainer1',
        title: 'Explainer 1',
        ...explainer1,
    },
    // Add more explainers here
};
