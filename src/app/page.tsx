'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts'
import { Eye, Target, Award, Sun, Mic, Users, UserPlus, ShieldCheck, ChartCandlestick, History, BadgeDollarSign, ChartNetwork, FileChartPie, Focus, GitCompareArrows, ListChecks } from 'lucide-react'
import TeaRetinaAnimation from './components/TeaRetinaAnimation'
import { TeaFenceAnimation } from './components/TeaFenceAnimation'

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


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

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
                Empowering Tea Traders with Advanced AI & Technology
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-6"
              >
                Empowering the tea industry with AI-driven tools and technologies to optimize operations, enhance quality, and drive sustainable growth
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/solutions" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2 px-6 rounded-full text-base transition-all duration-500 ease-in-out hover:from-blue-600 hover:to-purple-600">
                  Tell Me More
                </Link>
              </motion.div>
            </div>
            <div className="relative h-64 md:h-96 mb-6">
              <TeaRetinaAnimation />
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
                <p className="text-xl text-gray-600 text-center mb-8">
                  We aim to revolutionize the Tea Industry with AI and other cutting-edge technologies. We understand the challenges and are committed to finding solutions that will make the industry more efficient, productive, and profitable.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/who-we-are"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2 px-6 rounded-full text-base transition-all duration-500 ease-in-out hover:from-blue-600 hover:to-purple-600"
                  >
                    Discover Our Story
                  </Link>
                </div>
              </GradientBorder>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GradientBorder>
                <AnimatedIcon Icon={Eye} />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">To lead the global transformation of the tea industry through AI, Technology, and Innovation.</p>
              </GradientBorder>
              <GradientBorder>
                <AnimatedIcon Icon={Target} />
                <h3 className="text-xl  font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To empower tea stakeholders with innovative AI-driven tools and technologies, enabling them to optimize operations, enhance quality, and unlock new possibilities.</p>
              </GradientBorder>
              <GradientBorder>
                <AnimatedIcon Icon={Award} />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Innovation, Quality, Sustainability, Transparency, Empathy & Collaborattion</p>
              </GradientBorder>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* TeaBrain AI Section */}
      <AnimatedSection>
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#8D4CC2] to-[#009AFF] text-transparent bg-clip-text mx-auto w-1/3">Discover TeaAI™</h2>
            {/* Tea Mate */}
            <div className="mb-16">
              <h3 className="text-2xl text-green-500 text-center font-semibold mb-6">TeaMate: Visualize the Entire Sri Lankan Tea Lanscape </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GradientBorder>
                  <AnimatedIcon Icon={ChartCandlestick} />
                  <h4 className="text-xl font-semibold mb-4">Competitor Analysis</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Competitor Analysis reveals market trends in tea quantity and pricing, tracks competitors&apos; behaviors, analyzes market share, and helps you find growth opportunities for data-driven strategy. </p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={Sun} />
                  <h4 className="text-xl font-semibold mb-4">Weather Analytics</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Weather Analytics provides a detailed weather map and dynamic chart, offering data for specific factories and tracking weather changes over time to optimize decision-making.</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={History} />
                  <h4 className="text-xl font-semibold mb-4">Price History</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Price History Analysis allows the tea traders to track prices of required tea grades in given regions or garden marks paving way for better buying and selling decisions.</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={ChartNetwork} />
                  <h4 className="text-xl font-semibold mb-4">Price Heat Map</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Price Heat Map provides a geographical overview of Sri Lankan tea prices and how the price hotspots change geographically with time.</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={BadgeDollarSign} />
                  <h4 className="text-xl font-semibold mb-4">Exchange Rates</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Exchange Rates provide a overview of key main exchange rates related to the Tea Trade without having to search online</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={FileChartPie} />
                  <h4 className="text-xl font-semibold mb-4">Export Market Reports</h4>
                  <p className="text-gray-600">TeaAI™&apos;s Export Market Reports allows the traders to download the publicly released Weekly Broker Market Reports from a central location.</p>
                </GradientBorder>
              </div>
            </div>

            {/* TeaTalk */}
            <div className="mb-16">
              <h3 className="text-2xl text-green-500 text-center font-semibold mb-6">TeaTalk: AI-Powered Voice Recognition for Tea Tasting</h3>
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
            <div className='mb-16'>
              <h3 className="text-2xl text-green-500 text-center font-semibold mb-6">TeaRetina: AI-Based Tea Visual Grading</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GradientBorder>
                  <AnimatedIcon Icon={Focus} />
                  <h4 className="text-xl font-semibold mb-4">Capture Standards</h4>
                  <p className="text-gray-600">TeaRetina allows you to scan and digitize your tea standards to be matched with auction samples. TeaAI™ has absolutely no access to your standards thanks to our industry leading privacy architecture.</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={ListChecks} />
                  <h4 className="text-xl font-semibold mb-4">Manage Standards</h4>
                  <p className="text-gray-600">TeaRetina allows you to easily manage and update your tea grading standards, enabling quick edits or deletions of captured standards to keep your quality criteria current and well-organized.</p>
                </GradientBorder>
                <GradientBorder>
                  <AnimatedIcon Icon={GitCompareArrows} />
                  <h4 className="text-xl font-semibold mb-4">Match Standards</h4>
                  <p className="text-gray-600">TeaRetina&apos;s State-of-the-Art AI system allows tea traders to match all of the scanned standards with all 10,000+ weekly auction samples with a simple button click. It&apos;s an Absolute Game Changer!!!</p>
                </GradientBorder>
              </div>
            </div>

            {/* TeaFence */}
            <div>
              <h3 className="text-2xl text-green-500 text-center font-semibold mb-6">TeaFence: Industry Leading Customer Data Privacy</h3>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TeaFenceAnimation />
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact TeaAI™</h2>
            <p className="text-xl text-center text-gray-600 mb-8">We are always ready to answer any question you may have. Let&apos;s explore how to elevate your business.</p>
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
                  Request a Demo
                </button>
              </div>
            </form>
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