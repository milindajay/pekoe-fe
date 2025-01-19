'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Key, Server, Cloud, ArrowRight, XCircle } from 'lucide-react'

export function TeaFenceAnimation() {
    return (
        <div className="w-full max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#8D4CC2] via-[#009AFF] to-[#00BB0C] text-transparent bg-clip-text">TeaFence: Uncompromising Data Privacy</h2>
            <div className="relative h-96">
                {/* TeaAI Cloud */}
                <motion.div
                    className="absolute left-0 top-0 w-1/3 h-full bg-blue-100 rounded-lg p-4 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Cloud className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">TeaAI Cloud</h3>
                    <p className="text-sm text-center">Secure processing without access to raw data</p>
                </motion.div>

                {/* Customer Cloud */}
                <motion.div
                    className="absolute right-0 top-0 w-1/3 h-full bg-green-100 rounded-lg p-4 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Server className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Customer Cloud</h3>
                    <p className="text-sm text-center">Your data remains here, always protected</p>
                </motion.div>

                {/* TeaFence */}
                <motion.div
                    className="absolute left-1/2 top-0 w-1/4 h-full -ml-[12.5%] bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Shield className="w-16 h-16 text-gray-700 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">TeaFence</h3>
                    <p className="text-sm text-center">Impenetrable Data Privacy Firewall</p>
                </motion.div>

                {/* Blocked Data Packet Animation */}
                <motion.div
                    className="absolute left-[20%] top-1/3 -translate-y-1/2 bg-red-400 rounded-full p-2 z-10"
                    animate={{
                        x: ["0%", "100%", "0%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <XCircle className="w-6 h-6 text-white" />
                </motion.div>

                {/* Allowed Data Packet Animation */}
                <motion.div
                    className="absolute left-[20%] top-2/3 -translate-y-1/2 bg-green-400 rounded-full p-2 z-10"
                    animate={{
                        x: ["0%", "220%", "0%"],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>

                {/* Encryption Animation */}
                <motion.div
                    className="absolute left-[45%] top-1/4 bg-yellow-400 rounded-full p-2"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Lock className="w-6 h-6 text-white" />
                </motion.div>

                {/* Authentication Animation */}
                <motion.div
                    className="absolute left-[45%] bottom-1/2 bg-purple-400 rounded-full p-2"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -360, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Key className="w-6 h-6 text-white" />
                </motion.div>

                {/* Protected Data Indicator */}
                <motion.div
                    className="absolute left-[62.5%] top-1/2 -translate-y-1/2 bg-green-500 rounded-full p-2"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Lock className="w-8 h-8 text-white" />
                </motion.div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-lg font-semibold mb-2">Absolute Data Protection and Privacy</p>
                <p className="text-sm text-gray-600">
                    TeaFence creates an impenetrable barrier, ensuring your data never leaves your secure environment.
                    Our advanced system processes information without accessing raw data, guaranteeing
                    that your sensitive information remains exclusively under your control at all times.
                </p>
            </div>
        </div>
    )
}

