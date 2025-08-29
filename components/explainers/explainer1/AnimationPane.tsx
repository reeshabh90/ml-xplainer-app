'use client'
import React from 'react';
import { motion } from 'framer-motion';
import D3Line from './d3/D3Line';
import D3Bar from './d3/D3Bar';
import D3Scatter from './d3/D3Scatter';
import { AnimationType, Animation } from '../../../models/explainer1/animationtype';


type Props = { 
    animation?: AnimationType;
};

export default function AnimationPane({ animation }: Props) {
    if (!animation) return null;

    const renderAnimation = () => {
        switch (animation) {
            case Animation.line:
                return <D3Line />;
            case Animation.bar:
                return <D3Bar />;
            case Animation.scatter:
                return <D3Scatter />;
            case Animation.composite:
                return (
                    <div>
                        <h3 className="mb-4">Composite view</h3>
                        <D3Line />
                        <div className="h-8" />
                        <D3Bar />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-xl">
            <motion.div
                key={animation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
            >
                {renderAnimation()}
            </motion.div>
        </div>
    );
}
