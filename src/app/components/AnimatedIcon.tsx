'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedIconProps {
    Icon: React.ElementType
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ Icon }) => (
    <motion.div
        className="text-4xl mb-4 text-green-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        <Icon size={48} />
    </motion.div>
)

