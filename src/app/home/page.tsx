'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Facebook, Youtube, Linkedin, Eye, Target, Award, Sun, CloudRain, Mic, Scan, Users, UserPlus, ShieldCheck } from 'lucide-react'

const GradientBorder = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        className="relative p-[2px] overflow-hidden rounded-lg bg-gradient-to-r from-purple-200 via-blue-200 to-green-200"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 animate-gradient-x"></div>
        <motion.div
            className="relative bg-white rounded-lg p-6 h-full"
            whileHover={{
                background: "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    </motion.div>
)

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [controls, isInView])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
        >
            {children}
        </motion.div>
    )
}

const AnimatedIcon = ({ Icon }: { Icon: React.ElementType }) => (
    <motion.div
        className="text-4xl mb-4 text-green-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        <Icon size={48} />
    </motion.div>
)

const TeaScanAnimation = () => {
    const [scanning, setScanning] = useState(true)
    const [grade, setGrade] = useState('')

    useEffect(() => {
        const scanInterval = setInterval(() => {
            setScanning(true)
            setGrade('')
            setTimeout(() => {
                setGrade('Premium Grade A')
                setScanning(false)
            }, 3000)
        }, 6000)

        return () => clearInterval(scanInterval)
    }, [])

    return (
        <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <Image
                src="/images/blacktea-sample.jpg"
                alt="Tea Leaves Background"
                layout="fill"
                objectFit="cover"
            />
            <motion.div
                className="absolute inset-0 bg-green-500 bg-opacity-50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: scanning ? 1 : 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/images/black-tea-sample.png"
                    alt="Tea Sample"
                    width={100}
                    height={100}
                    className="rounded-full border-green-500 border-2 bg-white"
                />
            </div>
            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center"
                initial={{ y: '100%' }}
                animate={{ y: grade ? '0%' : '100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <p className="text-lg font-semibold">Tea Grade: {grade}</p>
            </motion.div>
        </div>
    )
}

const AudioWaveform = () => {
    const waveform = Array(20).fill(0).map(() => Math.random())

    return (
        <div className="flex items-center justify-center h-16 space-x-1">
            {waveform.map((height, index) => (
                <motion.div
                    key={index}
                    className="bg-green-500 w-1"
                    initial={{ height: 2 }}
                    animate={{
                        height: Math.max(height * 40, 2),
                        y: (height - 0.5) * 20
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: index * 0.05
                    }}
                />
            ))}
        </div>
    )
}

const AnimatedWeatherMap = () => {
    const [weatherState, setWeatherState] = useState('sunny')

    useEffect(() => {
        const weatherStates = ['sunny', 'cloudy', 'rainy']
        let currentIndex = 0

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % weatherStates.length
            setWeatherState(weatherStates[currentIndex])
        }, 3000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative h-64 bg-blue-100 rounded-lg overflow-hidden">
            <Image
                src="/images/map.jpg"
                alt="Weather Map Background"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="absolute w-full h-full"
                    animate={{
                        backgroundColor: weatherState === 'sunny' ? 'rgba(135, 206, 235, 0.5)' :
                            weatherState === 'cloudy' ? 'rgba(184, 184, 184, 0.5)' : 'rgba(70, 130, 180, 0.5)'
                    }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="absolute"
                    animate={{
                        y: weatherState === 'sunny' ? -20 : 0,
                        opacity: weatherState === 'rainy' ? 0 : 1
                    }}
                    transition={{ duration: 1 }}
                >
                    <Sun className="text-yellow-500" size={48} />
                </motion.div>
                <motion.div
                    className="absolute"
                    animate={{
                        scale: weatherState === 'cloudy' ? 1 : 0.5,
                        opacity: weatherState === 'sunny' ? 0 : 1
                    }}
                    transition={{ duration: 1 }}
                >
                    <CloudRain className="text-gray-500" size={48} />
                </motion.div>
                {weatherState === 'rainy' && (
                    <motion.div
                        className="absolute top-1/2 left-0 w-full"
                        initial={{ y: -100 }}
                        animate={{ y: 100 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
                    >
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-blue-500 w-0.5 h-4"
                                style={{ left: `${i * 10}%` }}
                                animate={{ y: [0, 20] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.1 }}
                            />
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

const priceData = [
    { name: 'Jan', price: 4000 },
    { name: 'Feb', price: 3000 },
    { name: 'Mar', price: 5000 },
    { name: 'Apr', price: 4500 },
    { name: 'May', price: 6000 },
    { name: 'Jun', price: 5500 },
]

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-green-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
                    <p>Level 3, 235/4 Old Avissawella Road, Colombo, Sri Lanka | +94 11 2 345 678</p>
                    <div className="flex space-x-4">
                        <Link href="#"><Facebook size={20} /></Link>
                        <Link href="#"><Youtube size={20} /></Link>
                        <Link href="#"><Linkedin size={20} /></Link>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0">
                                <Image src="/images/PEKOE-DARK.svg" alt="Pekoe Logo" width={120} height={100} />
                            </Link>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-green-600">Home</Link>
                                <Link href="/who-we-are" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Who We Are</Link>
                                <Link href="/solutions" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Solutions</Link>
                                <Link href="/reach-us" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Reach Us</Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Link href="/get-started" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-12 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl font-bold text-gray-900 mb-4"
                            >
                                Transforming Tea Grading with Advanced AI Technology
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-gray-600 mb-6"
                            >
                                Introducing TeaRetina and TeaBrain AI – Revolutionizing the Way Tea is Graded
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Link href="/solutions" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2 px-6 rounded-full text-base transition-all duration-500 ease-in-out hover:from-blue-600 hover:to-purple-600">
                                    Explore Our Solutions
                                </Link>
                            </motion.div>
                        </div>
                        <div className="relative h-64 md:h-96">
                            <TeaScanAnimation />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who We Are</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <Image src="/images/team-teaai.jpg" alt="Pekoe Team" width={500} height={300} className="rounded-lg shadow-lg" />
                            </div>
                            <GradientBorder>
                                <p className="text-xl text-gray-600">
                                    At Pekoe, we combine cutting-edge technology with the art of tea grading. Our TeaRetina scanners and TeaBrain AI platform set new standards for the tea industry, enabling businesses to achieve unparalleled precision, efficiency, and scalability.
                                </p>
                            </GradientBorder>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <GradientBorder>
                                <AnimatedIcon Icon={Eye} />
                                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                                <p className="text-gray-600">To revolutionize the tea industry through innovative AI-powered solutions.</p>
                            </GradientBorder>
                            <GradientBorder>
                                <AnimatedIcon Icon={Target} />
                                <h3 className="text-xl  font-semibold mb-2">Our Mission</h3>
                                <p className="text-gray-600">To empower tea businesses with cutting-edge technology for precise grading and analysis.</p>
                            </GradientBorder>
                            <GradientBorder>
                                <AnimatedIcon Icon={Award} />
                                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                                <p className="text-gray-600">Innovation, precision, and commitment to quality in every cup of tea.</p>
                            </GradientBorder>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* TeaBrain AI Section */}
            <AnimatedSection>
                <section className="py-20 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Discover TeaBrain AI</h2>

                        {/* Tea Mate */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-semibold mb-6">Tea Mate: Your Intelligent Tea Analysis Companion</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <GradientBorder>
                                    <AnimatedIcon Icon={Target} />
                                    <h4 className="text-xl font-semibold mb-4">Competitor Analysis</h4>
                                    <p className="text-gray-600">Stay ahead of the competition with our AI-powered competitor analysis tools.</p>
                                </GradientBorder>
                                <GradientBorder>
                                    <AnimatedIcon Icon={Sun} />
                                    <h4 className="text-xl font-semibold mb-4">Weather Analytics</h4>
                                    <p className="text-gray-600">Access historical weather data and rainfall information to optimize your tea production.</p>
                                </GradientBorder>
                                <GradientBorder>
                                    <h4 className="text-xl font-semibold mb-4">Weather Map</h4>
                                    <AnimatedWeatherMap />
                                </GradientBorder>
                            </div>
                            <div className="mt-8">
                                <GradientBorder>
                                    <h4 className="text-xl font-semibold mb-4">Price History and Heat Map</h4>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={priceData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </GradientBorder>
                            </div>
                        </div>

                        {/* TeaTalk */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-semibold mb-6">TeaTalk: AI-Powered Voice Recognition for Tea Tasting</h3>
                            <GradientBorder>
                                <div className="flex items-center mb-4">
                                    <AnimatedIcon Icon={Mic} />
                                    <div className="ml-4 flex-grow">
                                        <AudioWaveform />
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">Revolutionize your tea tasting process with our advanced voice-to-text recognition system, specifically designed to understand and transcribe tea industry terminology.</p>
                                <div className="bg-gray-200 p-4 rounded-lg">
                                    <p className="text-sm font-medium">Sample Transcription:</p>
                                    <p className="text-gray-700 italic">&quot The Darjeeling first flush exhibits a delicate muscatel flavor with hints of white grape and a clean, astringent finish... &quot</p>
                                </div>
                            </GradientBorder>
                        </div>

                        {/* TeaRetina */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">TeaRetina: Advanced Tea Grading Technology</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <GradientBorder>
                                    <AnimatedIcon Icon={Scan} />
                                    <h4 className="text-xl font-semibold mb-4">Capture Standards</h4>
                                    <p className="text-gray-600">Easily capture and digitize your tea grading standards for consistent quality control.</p>
                                </GradientBorder>
                                <GradientBorder>
                                    <AnimatedIcon Icon={Users} />
                                    <h4 className="text-xl font-semibold mb-4">Manage Standards</h4>
                                    <p className="text-gray-600">Efficiently manage and update your tea grading standards as your business evolves.</p>
                                </GradientBorder>
                                <GradientBorder>
                                    <AnimatedIcon Icon={Target} />
                                    <h4 className="text-xl font-semibold mb-4">Match Standards</h4>
                                    <p className="text-gray-600">Accurately match tea samples against your established standards for precise grading.</p>
                                </GradientBorder>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* User Management Section */}
            <AnimatedSection>
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive User Management</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <GradientBorder>
                                <AnimatedIcon Icon={Users} />
                                <h3 className="text-xl font-semibold mb-4">User Accounts</h3>
                                <p className="text-gray-600">Create and manage individual user accounts for your team members.</p>
                            </GradientBorder>
                            <GradientBorder>
                                <AnimatedIcon Icon={ShieldCheck} />
                                <h3 className="text-xl font-semibold mb-4">Role-Based Access</h3>
                                <p className="text-gray-600">Assign roles and permissions to ensure proper access control within your organization.</p>
                            </GradientBorder>
                            <GradientBorder>
                                <AnimatedIcon Icon={UserPlus} />
                                <h3 className="text-xl font-semibold mb-4">Easy Registration</h3>
                                <p className="text-gray-600">Streamlined registration process for quick onboarding of new users.</p>
                            </GradientBorder>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Call to Action Section */}
            <AnimatedSection>
                <section className="py-20 bg-gradient-to-r from-purple-100 to-blue-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Ready to Transform Your Tea Business?</h2>
                        <p className="text-xl text-center text-gray-600 mb-8">Join the revolution in tea grading technology and elevate your product quality.</p>
                        <form className="max-w-lg mx-auto">
                            <div className="mb-4">
                                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </AnimatedSection>

            {/* Footer */}
            <footer className="bg-green-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
                            <div className="flex space-x-4">
                                <Link href="#"><Facebook /></Link>
                                <Link href="#"><Youtube /></Link>
                                <Link href="#"><Linkedin /></Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
                            <ul className="space-y-2">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/who-we-are">Who We Are</Link></li>
                                <li><Link href="/solutions">Solutions</Link></li>
                                <li><Link href="/technology">Technology</Link></li>
                                <li><Link href="/reach-us">Reach Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li><Link href="/products/tea-retina">TeaRetina™</Link></li>
                                <li><Link href="/products/tea-fence">TeaFence™</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Get in Touch with Updates and News</h3>
                        <form className="flex">
                            <input type="email" placeholder="Email" className="flex-grow px-4 py-2 rounded-l-md focus:outline-none" />
                            <input type="text" placeholder="Name" className="px-4 py-2 focus:outline-none" />
                            <button type="submit" className="bg-white text-green-500 px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors">Sign Up</button>
                        </form>
                        <p className="mt-2 text-sm">By signing up you will be accepting Pekoe's Terms and Conditions and acknowledge that my information will be used in accordance with Pekoe's Privacy Policy</p>
                    </div> */}
                    <div className="mt-8 pt-8 border-t border-green-400">
                        <div className="flex justify-between items-center">
                            <Image src="/images/logo-white.svg" alt="Pekoe Logo" width={150} height={40} />
                            <div className="text-sm">
                                <Link href="/privacy-policy" className="mr-4">Privacy Policy</Link>
                                <Link href="/cookie-policy" className="mr-4">Cookie Policy</Link>
                                <Link href="/terms-of-use">Terms of Use</Link>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-center">Copyright © 2024 Pekoe. All rights reserved.</p>
                    </div>
                </div>
            </footer>

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