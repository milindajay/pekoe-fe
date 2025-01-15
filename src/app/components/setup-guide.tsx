'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Package, Wrench, Link, Play } from 'lucide-react'
import { GradientBorder } from './GradientBorder'

const setupSteps = [
    {
        icon: Package,
        title: 'Unpack',
        description: 'Unpack the box and place the TeaRetina Mini Device on a table where access to a power socket is present.'
    },
    {
        icon: Wrench,
        title: 'Assemble',
        description: 'Contact the TeaAI Support Team for video assistance on assembling the device.'
    },
    {
        icon: Link,
        title: 'Connect',
        description: 'Connect the USB Cable to your computer.'
    },
    {
        icon: Play,
        title: 'Use',
        description: 'Insert Tea sample and capture it using the TeaAI capture standards.'
    }
]

export function SetupGuide() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Setting Up</h2>
                <div className="grid gap-6 lg:grid-cols-2">
                    {setupSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GradientBorder>
                                <Card>
                                    <CardHeader>
                                        <step.icon className="w-10 h-10 mb-2 text-primary text-green-500" />
                                        <CardTitle>{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{step.description}</p>
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

