'use client'
import React from 'react';
import { motion } from 'framer-motion';
import D3Line from './d3/D3Line';
import D3Bar from './d3/D3Bar';
import D3Scatter from './d3/D3Scatter';

type Props = { stepIndex: number };

export default function AnimationPane({ stepIndex }: Props) {
    return (
        <div className="w-full max-w-xl">
            <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
            >
                {stepIndex === 0 && <D3Line step={stepIndex} />}
                {stepIndex === 1 && <D3Scatter step={stepIndex} />}
                {stepIndex === 2 && <D3Bar step={stepIndex} />}
                {stepIndex === 3 && (
                    <div>
                        <h3 className="mb-4">Composite view</h3>
                        <D3Line step={stepIndex} />
                        <div className="h-8" />
                        <D3Bar step={stepIndex} />
                    </div>
                )}
            </motion.div>
        </div>
    );
}
