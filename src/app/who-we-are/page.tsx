'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, Award, Sprout } from 'lucide-react'
import { GradientBorder } from '../components/GradientBorder'
import { AnimatedSection } from '../components/AnimatedSection'
import { AnimatedIcon } from '../components/AnimatedIcon'

const teamMembers = [
    {
        name: 'John Doe',
        title: 'CEO & Co-founder',
        bio: 'John brings 15 years of experience in the tea industry and a passion for innovation. He leads Pekoe\'s vision to revolutionize tea production and trading through AI.',
        image: '/placeholder.svg'
    },
    {
        name: 'Jane Smith',
        title: 'CTO & Co-founder',
        bio: 'With a background in AI and machine learning, Jane drives the technological innovations that power Pekoe\'s cutting-edge solutions for the tea industry.',
        image: '/placeholder.svg'
    },
    {
        name: 'Alex Johnson',
        title: 'Head of Tea Research',
        bio: 'Alex combines traditional tea expertise with data science to develop new methodologies for improving tea quality and sustainability across the supply chain.',
        image: '/placeholder.svg'
    }
]

const values = [
    {
        title: 'Innovation',
        description: 'We constantly push the boundaries of what\'s possible in the tea industry, leveraging AI and cutting-edge technologies.',
        icon: Lightbulb
    },
    {
        title: 'Sustainability',
        description: 'Our solutions are designed to promote sustainable practices throughout the tea production and distribution process.',
        icon: Sprout
    },
    {
        title: 'Collaboration',
        description: 'We believe in the power of partnership, working closely with tea producers, traders, and technology experts.',
        icon: Users
    },
    {
        title: 'Quality',
        description: 'We are committed to delivering the highest quality solutions that enhance the value of tea at every stage.',
        icon: Award
    }
]

export default function WhoWeArePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center text-gray-900 mb-6"
                    >
                        Who We Are
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-center text-gray-600 mb-8 max-w-3xl mx-auto"
                    >
                        At Pekoe, we&apos;re on a mission to transform the tea industry through the power of AI and cutting-edge technologies.
                    </motion.p>
                </div>
            </section>

            {/* Our Story Section */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-gray-600 mb-4">
                                    Founded by a team of tea enthusiasts and tech innovators, we recognized the untapped potential for technological advancement in one of the world&apos;s oldest industries.
                                </p>
                                <p className="text-lg text-gray-600 mb-4">
                                    Our journey began with a simple question: How can we leverage AI to make the tea industry more efficient, productive, and profitable? Today, we&apos;re answering that question with innovative solutions that are revolutionizing every aspect of tea production and trading.
                                </p>
                                <p className="text-lg text-gray-600">
                                    From AI-powered visual grading to comprehensive market analytics, we&apos;re committed to empowering tea stakeholders with the tools they need to thrive in a rapidly evolving global market.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-full">
                                <Image
                                    src="/images/tea-estate.jpg"
                                    alt="Pekoe's journey"
                                    layout="fill"
                                    className="object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Meet the Team Section */}
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <GradientBorder key={index}>
                                    <div className="text-center">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                        <p className="text-gray-600 mb-4">{member.title}</p>
                                        <p className="text-sm text-gray-500">{member.bio}</p>
                                    </div>
                                </GradientBorder>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link
                                href="/team"
                                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Meet Our Full Team
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Our Values Section */}
            <AnimatedSection>
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <GradientBorder key={index}>
                                    <div className="flex items-start">
                                        <AnimatedIcon Icon={value.icon} />
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                            <p className="text-gray-600">{value.description}</p>
                                        </div>
                                    </div>
                                </GradientBorder>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection>
                <section className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Revolutionizing the Tea Industry</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover how Pekoe&apos;s AI-powered solutions can transform your tea business.
                        </p>
                        <Link
                            href="/solutions"
                            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Explore Our Solutions
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </AnimatedSection>

            <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
        </div>
    )
}

