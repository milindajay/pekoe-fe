import React from 'react'
import { motion } from 'framer-motion'

interface TeaRetinaCardProps {
    icon: React.ElementType
    title: string
    description: string
}

export const TeaRetinaCard: React.FC<TeaRetinaCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            className="relative flex h-full flex-col overflow-hidden rounded-lg bg-black text-white transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="p-6">
                <Icon className="text-4xl mb-4 text-green-500" size={48} />
                <h4 className="text-xl font-semibold mb-4">{title}</h4>
                <p className="text-gray-300">{description}</p>
            </div>
        </motion.div>
    )
}

