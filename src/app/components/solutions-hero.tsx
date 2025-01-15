'use client'

import { motion } from 'framer-motion'
import TeaRetinaAnimation from './TeaRetinaAnimation'

export function SolutionsHero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            TeaRetina™ - Mini
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            Revolutionizing Tea Visual Grading with AI-powered advanced tea visual grading, setting a new industry standard for quality and efficiency.
                        </p>
                    </motion.div>
                    <div className="flex items-center justify-center">
                        <TeaRetinaAnimation />
                    </div>
                </div>
            </div>
        </section>
    )
}

