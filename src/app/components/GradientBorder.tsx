'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GradientBorderProps {
    children: React.ReactNode
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children }) => {
    return (
        <motion.div
            className="relative p-[2px] overflow-hidden rounded-lg bg-gradient-to-r from-purple-200 via-blue-200 to-green-200"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 animate-gradient-x"></div>
            <motion.div
                className="relative bg-white rounded-lg p-6 h-full"
                whileHover={{
                    background: "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

