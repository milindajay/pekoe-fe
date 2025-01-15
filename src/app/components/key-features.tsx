'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Scan, Zap, Briefcase, UserCheck, Gauge } from 'lucide-react'
import { GradientBorder } from './GradientBorder'
const features = [
    {
        icon: Scan,
        title: 'Accurate Scanning',
        description: 'Captures intricate details of tea samples for precise and accurate visual grading.'
    },
    {
        icon: Zap,
        title: 'Seamless TeaAI Integration',
        description: 'Integrated TeaAI Software for advanced AI-based grading.'
    },
    {
        icon: Briefcase,
        title: 'Compact and Portable',
        description: 'Easy to use in various settings, from tea gardens to processing facilities.'
    },
    {
        icon: UserCheck,
        title: 'User-Friendly Interface',
        description: 'Easy to operate and navigate for users of all levels of expertise.'
    },
    {
        icon: Gauge,
        title: 'Fast and Efficient',
        description: 'Offers fast and efficient scanning, saving valuable time and resources.'
    }
]

export function KeyFeatures() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GradientBorder>
                                <Card>
                                    <CardHeader>
                                        <feature.icon className="w-10 h-10 mb-2 text-primary text-green-500" />
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </GradientBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

