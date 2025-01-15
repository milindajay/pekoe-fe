'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { CheckCircle, BarChart2, Clock, DollarSign, LineChart } from 'lucide-react'
import { GradientBorder } from '../components/GradientBorder'
const benefits = [
    {
        icon: CheckCircle,
        title: 'Improved Accuracy',
        description: 'Significantly improves the accuracy of tea visual grading, reducing human error and subjectivity.'
    },
    {
        icon: BarChart2,
        title: 'Enhanced Consistency',
        description: 'Ensures consistent and standardized results, leading to improved quality control in tea production.'
    },
    {
        icon: Clock,
        title: 'Increased Efficiency',
        description: 'Streamlines the grading process, saving time and resources.'
    },
    {
        icon: DollarSign,
        title: 'Cost Savings & Better Margins',
        description: 'Leads to significant cost savings for tea producers and buyers while supporting better profit margins.'
    },
    {
        icon: LineChart,
        title: 'Data-Driven Insights',
        description: 'Generates valuable data and insights, enabling better decision-making and quality improvement in tea production.'
    }
]

export function Benefits() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Benefits</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GradientBorder>
                                <Card>
                                    <CardHeader>
                                        <benefit.icon className="w-10 h-10 mb-2 text-primary text-green-500" />
                                        <CardTitle>{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{benefit.description}</p>
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

