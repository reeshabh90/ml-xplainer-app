import { ComponentType } from 'react';
import { AnimationType, Animation } from './animationtype';

export const Layout = {
    sidebyside: 'side-by-side',
    text: 'text'
} as const;

export type LayoutType = typeof Layout[keyof typeof Layout];

export interface SideBySideStep {
    component: ComponentType;
    animation: AnimationType;
}

export interface SideBySideLayoutConfig {
    type: typeof Layout.sidebyside;
    animation?: AnimationType;
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
    steps?: SideBySideStep[];
}

