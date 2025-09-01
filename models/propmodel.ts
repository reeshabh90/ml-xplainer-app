import { ComponentType } from 'react';
import { AnimationType, Animation } from './explainer1/animationtype';
import { MediaTypeValue } from './mediatype';

// Media configuration
export interface MediaConfig {
    url: string;
    type: MediaTypeValue;
    title?: string;
    autoPlay?: boolean;
    loop?: boolean;
}

export const Layout = {
    sidebyside: 'side-by-side',
    text: 'text'
} as const;

export type LayoutType = typeof Layout[keyof typeof Layout];

export interface SideBySideStep {
    component: ComponentType;
    animation: AnimationType;
    media?: MediaConfig;
}

export interface SideBySideLayoutConfig {
    type: typeof Layout.sidebyside;
    animation?: AnimationType;
    media?: MediaConfig;
    steps?: SideBySideStep[];
}

export interface TextLayoutConfig {
    type: typeof Layout.text;
}

export type LayoutConfig = SideBySideLayoutConfig | TextLayoutConfig;

export interface StepConfig {
    component?: ComponentType;
    layout: LayoutConfig;
}

export interface LayoutProps {
    stepIndex: number;
    currentIndex: number;
    content?: ComponentType;
    animation?: AnimationType;
    media?: MediaConfig;
    steps?: SideBySideStep[];
}

