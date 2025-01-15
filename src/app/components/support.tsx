'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { FileText, PenToolIcon as Tool, Mail, MapPin } from 'lucide-react'
import { GradientBorder } from './GradientBorder'

const supportInfo = [
    {
        icon: FileText,
        title: 'Terms & Conditions',
        description: 'Available via TeaAI Software along with the Privacy Policy.'
    },
    {
        icon: Tool,
        title: 'Maintenance',
        description: 'This device requires no maintenance for regular usage.'
    },
    {
        icon: Mail,
        title: 'Contact',
        description: 'Use the support contact service provided via TeaAI Software for faster response or email support@teaai.ai for response within a day.'
    },
    {
        icon: MapPin,
        title: 'Address',
        description: 'Pekoe Pte Ltd, 14 Kung Chong Rd, #05-01 Lum Chang Building, Singapore 159150'
    }
]

export function Support() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Support & Contact</h2>
                <div className="grid gap-6 lg:grid-cols-2">
                    {supportInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GradientBorder>
                                <Card>
                                    <CardHeader>
                                        <info.icon className="w-10 h-10 mb-2 text-primary text-green-500" />
                                        <CardTitle>{info.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{info.description}</p>
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

