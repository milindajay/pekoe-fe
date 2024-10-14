"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function LandingPage() {
  const controls = useAnimation()
  const logoRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const animateLogo = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 1 } })
      await controls.start({ scale: [1, 1.1, 1], transition: { duration: 2, times: [0, 0.5, 1] } })
    }
    animateLogo()
  }, [controls])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      {/* Animated gradient lines from bottom center to upper right corner */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[200%] w-px"
            style={{
              left: `${i * 10}%`,
              bottom: '0',
              background: 'linear-gradient(0deg, #8D4CC2, #009AFF, #00BB0C, transparent)',
              transform: 'rotate(-60deg)',
              transformOrigin: 'bottom left',
              animation: `moveGradientDiagonal 20s ${i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      <motion.svg
        ref={logoRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="w-64 h-auto mb-8 z-10"
        viewBox="0 0 778.73 196.55"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="pekoeLogoTitle"
      >
        <title id="pekoeLogoTitle">Pekoe Logo</title>
        <defs>
          <linearGradient id="b" x1="91.63" y1="195.71" x2="91.63" y2="19.17" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8256a3"/>
            <stop offset=".28" stopColor="#7662ab"/>
            <stop offset=".8" stopColor="#5682c3"/>
            <stop offset="1" stopColor="#4891ce"/>
          </linearGradient>
        </defs>
        <motion.path
          d="M94.53,178.94c26-16.71,40.15-48.46,33-80.32l-16.58-73.83c-6.38,1.62-12.37,4.02-17.9,7.07-.62.34-1.24.69-1.85,1.05-.62.36-1.22.73-1.82,1.11-5.49,3.44-10.45,7.55-14.82,12.18-.5.54-.99,1.08-1.48,1.63-.49.55-.98,1.11-1.46,1.68-14.63,17.47-21.28,41.33-15.91,65.24l15.95,71.02.25,1.1.07.3.23,1.04.09.37c.71-.18,1.42-.37,2.12-.57,2-.57,3.96-1.21,5.87-1.93.75-.28,1.49-.57,2.23-.88,4.23-1.74,8.24-3.84,12-6.26Z"
          fill="url(#b)"
          initial={{ pathLength: 0, opacity: 0, scale: 0 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M66.49,184.06l-13.84-46.08c-3.78-13.79-11.28-32.53-11.12-46.86-1.09-33.61,22.32-65.84,54.7-75.25.37.99,2.34,7.18,2.75,8.34,0,0-3.67,1.17-3.67,1.17l-2.04-6.6,2.34,1.21c-14.96,4.58-28.41,14.13-37.69,26.86-14.34,19.07-18.22,45.04-10.86,67.71,4.15,14.87,15.15,54.19,19.43,69.51h0Z"
          fill="#27b34b"
          initial={{ pathLength: 0, opacity: 0, scale: 0 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.path
          d="M59.77,177.02l-16.34-45.26c-4.52-13.56-13.04-31.86-13.67-46.19C26.83,52.07,48.44,18.61,80.26,7.44c.42.97,2.73,7.04,3.2,8.18,0,0-3.6,1.37-3.6,1.37l-2.4-6.48,2.4,1.08c-14.69,5.39-27.6,15.66-36.16,28.88-13.27,19.83-15.73,45.97-7.14,68.2,4.96,14.62,18.09,53.28,23.2,68.35h0Z"
          fill="#27b34b"
          initial={{ pathLength: 0, opacity: 0, scale: 0 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
        />
        <motion.path
          d="M203.76,24.75c20.92,0,36.19,4.29,45.8,12.87,9.61,8.58,14.42,20.59,14.42,36.04,0,7.03-1.09,13.7-3.27,20.02-2.18,6.32-5.75,11.9-10.7,16.75-4.95,4.84-11.48,8.67-19.58,11.48-8.1,2.81-18.06,4.21-29.89,4.21h-17.3v60.78h-26.62V24.75h47.14ZM201.98,46.82h-18.74v57.12h14.53c8.35,0,15.45-.98,21.29-2.94,5.84-1.96,10.28-5.08,13.31-9.37,3.03-4.29,4.55-9.94,4.55-16.97,0-9.39-2.83-16.38-8.48-20.96-5.66-4.58-14.47-6.88-26.45-6.88Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M331.14,61.79c10.94,0,20.33,2.26,28.17,6.76,7.84,4.51,13.86,10.91,18.08,19.19,4.21,8.28,6.32,18.19,6.32,29.72v13.97h-81.96c.29,11.91,3.49,21.07,9.59,27.5,6.1,6.43,14.66,9.65,25.68,9.65,7.84,0,14.88-.76,21.13-2.27,6.25-1.51,12.7-3.75,19.35-6.71v21.18c-6.14,2.88-12.39,4.99-18.74,6.32-6.36,1.33-13.97,2-22.85,2-12.05,0-22.64-2.35-31.77-7.04-9.13-4.69-16.27-11.7-21.41-21.02-5.14-9.32-7.71-20.89-7.71-34.71s2.33-25.43,6.99-35.05c4.66-9.61,11.2-16.93,19.63-21.96,8.43-5.03,18.26-7.54,29.5-7.54ZM331.14,81.42c-8.21,0-14.84,2.66-19.91,7.99-5.07,5.32-8.04,13.13-8.93,23.4h55.9c-.07-6.14-1.09-11.57-3.05-16.3-1.96-4.73-4.92-8.43-8.87-11.09-3.96-2.66-9-3.99-15.14-3.99Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
        />
        <motion.path
          d="M427.81,14.32v83.4c0,3.77-.15,7.89-.44,12.37-.3,4.47-.59,8.67-.89,12.59h.55c1.92-2.59,4.23-5.62,6.93-9.09,2.7-3.48,5.27-6.51,7.71-9.09l37.49-40.37h29.94l-49.13,52.79,52.35,69.98h-30.61l-39.26-53.9-14.64,12.53v41.37h-26.06V14.32h26.06Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.path
          d="M629.17,125.23c0,10.2-1.33,19.26-3.99,27.17-2.66,7.91-6.54,14.58-11.65,20.02-5.1,5.43-11.24,9.58-18.41,12.42-7.17,2.85-15.27,4.27-24.29,4.27-8.43,0-16.16-1.42-23.18-4.27-7.03-2.85-13.11-6.99-18.24-12.42-5.14-5.43-9.11-12.11-11.92-20.02-2.81-7.91-4.21-16.97-4.21-27.17,0-13.53,2.35-25.01,7.04-34.44,4.69-9.43,11.4-16.62,20.13-21.57,8.72-4.95,19.11-7.43,31.16-7.43,11.31,0,21.29,2.48,29.94,7.43,8.65,4.95,15.42,12.16,20.3,21.63,4.88,9.47,7.32,20.92,7.32,34.38ZM540.11,125.23c0,8.95,1.09,16.6,3.27,22.96,2.18,6.36,5.56,11.22,10.15,14.58,4.58,3.37,10.5,5.05,17.75,5.05s13.16-1.68,17.75-5.05c4.58-3.36,7.95-8.22,10.09-14.58,2.14-6.36,3.22-14.01,3.22-22.96s-1.07-16.54-3.22-22.79c-2.15-6.25-5.51-11.02-10.09-14.31-4.59-3.29-10.54-4.93-17.86-4.93-10.8,0-18.67,3.62-23.62,10.87-4.95,7.25-7.43,17.63-7.43,31.16Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
        />
        <motion.path
          
          d="M696.67,61.79c10.94,0,20.33,2.26,28.17,6.76,7.84,4.51,13.86,10.91,18.08,19.19,4.21,8.28,6.32,18.19,6.32,29.72v13.97h-81.96c.29,11.91,3.49,21.07,9.59,27.5,6.1,6.43,14.66,9.65,25.68,9.65,7.84,0,14.88-.76,21.13-2.27,6.25-1.51,12.7-3.75,19.35-6.71v21.18c-6.14,2.88-12.39,4.99-18.74,6.32-6.36,1.33-13.97,2-22.85,2-12.05,0-22.64-2.35-31.77-7.04-9.13-4.69-16.27-11.7-21.41-21.02-5.14-9.32-7.71-20.89-7.71-34.71s2.33-25.43,6.99-35.05c4.66-9.61,11.2-16.93,19.63-21.96,8.43-5.03,18.26-7.54,29.5-7.54ZM696.67,81.42c-8.21,0-14.84,2.66-19.91,7.99-5.07,5.32-8.04,13.13-8.93,23.4h55.9c-.07-6.14-1.09-11.57-3.05-16.3-1.96-4.73-4.92-8.43-8.87-11.09-3.96-2.66-9-3.99-15.14-3.99Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}
        />
      </motion.svg>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-gradient-x"
      >
        Visual Tea Grading
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl z-10"
      >
        Revolutionizing the tea industry with AI-powered grading technology
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 z-10"
      >
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br hover:shadow-lg hover:rotate-1">
          Explore TeaRetina
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-bl hover:shadow-lg hover:-rotate-1">
          Discover TeaBrain AI
        </button>
      </motion.div>

      <style jsx>{`
        @keyframes moveGradientDiagonal {
          0% { transform: rotate(-60deg) translateY(0); }
          100% { transform: rotate(-60deg) translateY(-100%); }
        }
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