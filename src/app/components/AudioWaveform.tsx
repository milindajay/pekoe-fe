'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AudioWaveform: React.FC = () => {
    const waveform = Array(20).fill(0).map(() => Math.random())

    return (
        <div className="flex items-center justify-center h-16 space-x-1">
            {waveform.map((height, index) => (
                <motion.div
                    key={index}
                    className="bg-green-500 w-1"
                    initial={{ height: 2 }}
                    animate={{
                        height: Math.max(height * 40, 2),
                        y: (height - 0.5) * 20
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: index * 0.05
                    }}
                />
            ))}
        </div>
    )
}

