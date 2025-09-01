'use client'
import React from 'react';
import { motion } from 'framer-motion';
import D3Line from './d3/D3Line';
import D3Bar from './d3/D3Bar';
import D3Scatter from './d3/D3Scatter';
import { AnimationType, Animation } from '../../../models/explainer1/animationtype';
import { MediaConfig } from '../../../models/propmodel';


type Props = {
    animation?: AnimationType;
    media?: MediaConfig
};

export default function AnimationPane({ animation, media }: Props) {
    if (media && media.type && media.url) {
        if (media.type === 'gif' || media.type === 'image') {
            return (
                <div className="w-full max-w-xl">
                    <img src={media.url} alt={media.title || 'Media'}
                        className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
            );
        }
        if (media.type === 'video') {
            return (
                <div className="w-full max-w-xl">
                    <video
                        src={media.url}
                        title={media.title || 'Media'} controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            );
        }
    }

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
