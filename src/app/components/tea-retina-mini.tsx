'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function TeaRetinaMini() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 max-w-7xl md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TeaRetina™ - Mini</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            TeaRetina-Mini is a cutting-edge, table-top image capturing device designed to scan tea samples for visual grading. Developed by Pekoe, it seamlessly integrates with the TeaRetina AI system via TeaAI Software.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/TeaRetina-Mini.jpg"
                            alt="TeaRetina-Mini Device"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

