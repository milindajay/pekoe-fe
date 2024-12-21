'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LeafIcon, ScanIcon, BrainIcon, DatabaseIcon, UserIcon, BarChartIcon } from 'lucide-react'

const steps = [
    { icon: LeafIcon, label: 'Tea Sample' },
    { icon: ScanIcon, label: 'HQ Scanner' },
    { icon: BrainIcon, label: 'TeaRetina' },
    { icon: DatabaseIcon, label: 'Customer DB' },
    { icon: UserIcon, label: 'Tea Trader' },
    { icon: BarChartIcon, label: 'Results' },
]

export default function TeaRetinaAnimation() {
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length)
        }, 3000) // Change step every 3 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative px-4 sm:px-6">
                <div className="flex flex-wrap justify-between py-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col items-center w-1/3 sm:w-auto mb-4 sm:mb-0 ${index <= currentStep ? 'text-green-600' : 'text-gray-400'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                            <span className="text-xs text-center hidden sm:block">{step.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimationScene currentStep={currentStep} />
        </div>
    )
}

function AnimationScene({ currentStep }: { currentStep: number }) {
    return (
        <div className="h-64 sm:h-80 bg-gray-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentStep === 0 && <TeaSampleInput />}
                    {currentStep === 1 && <HQScanner />}
                    {currentStep === 2 && <TeaRetinaAI />}
                    {currentStep === 3 && <CustomerDatabase />}
                    {currentStep === 4 && <TeaTrader />}
                    {currentStep === 5 && <VisualGradingResults />}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

function TeaSampleInput() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
        >
            <LeafIcon className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Tea Sample Received</p>
            <motion.div
                className="mt-4 w-16 h-16 bg-green-200 rounded-full mx-auto"
                animate={{
                    scale: [1, 1.2, 1],
                    borderRadius: ["50%", "25%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                }}
            />
        </motion.div>
    )
}

function HQScanner() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ScanIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Scanning Tea Sample</p>
            <motion.div
                className="mt-4 w-32 h-1 bg-blue-500 mx-auto"
                animate={{
                    scaleX: [0, 1, 0],
                    x: ["-50%", "0%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.div>
    )
}

function TeaRetinaAI() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <BrainIcon className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">AI Processing</p>
            <motion.div
                className="mt-4 grid grid-cols-3 gap-2 w-32 mx-auto"
            >
                {[...Array(9)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-8 h-8 bg-purple-300 rounded"
                        animate={{
                            scale: [1, 0.8, 1],
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

function CustomerDatabase() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <DatabaseIcon className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Accessing Customer Data</p>
            <motion.div
                className="mt-4 flex justify-center space-x-2"
            >
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-4 h-16 bg-yellow-300 rounded"
                        animate={{
                            scaleY: [0.2, 1, 0.2],
                            backgroundColor: ["#fde047", "#facc15", "#fde047"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

function TeaTrader() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <UserIcon className="w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Tea Trader Review</p>
            <motion.div
                className="mt-4 w-32 h-32 border-4 border-indigo-500 rounded-full mx-auto flex items-center justify-center"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <motion.div
                    className="w-4 h-4 bg-indigo-600 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

function VisualGradingResults() {
    return (
        <motion.div
            className="text-center px-4 sm:px-0"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <BarChartIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mb-4 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Visual Grading Complete</p>
            <motion.div
                className="mt-4 flex justify-center space-x-2"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-4 bg-red-400 rounded"
                        initial={{ height: 0 }}
                        animate={{ height: [0, (i + 1) * 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

