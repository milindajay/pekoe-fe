'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

export default function LandingPage() {
  console.log('LandingPage component is rendering');
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
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center p-4 landing-page">
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
              transformOrigin: 'bottom center',
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
        viewBox="0 0 698.73 176.36"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="pekoeLogoTitle"
      >
        <title id="pekoeLogoTitle">Pekoe Logo</title>
        <defs>
          <linearGradient id="b" x1="74.42" y1="178.15" x2="74.42" y2="15.13" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8d4cc2" />
            <stop offset=".14" stopColor="#8052c7" />
            <stop offset=".4" stopColor="#6064d5" />
            <stop offset=".74" stopColor="#2c81eb" />
            <stop offset="1" stopColor="#009aff" />
          </linearGradient>
        </defs>
        <motion.path
          d="M77.1,162.67c24.01-15.43,37.08-44.75,30.48-74.17l-15.31-68.18c-5.89,1.49-11.43,3.71-16.53,6.53-.57.32-1.14.64-1.7.97-.57.33-1.13.68-1.68,1.03-5.07,3.18-9.65,6.97-13.69,11.25-.46.5-.92,1-1.37,1.5-.46.51-.91,1.03-1.35,1.55-13.51,16.14-19.65,38.17-14.69,60.25l14.73,65.59.23,1.02.06.28.21.96.08.34c.65-.17,1.31-.34,1.96-.53,1.84-.53,3.65-1.12,5.42-1.78.7-.26,1.38-.53,2.06-.81,3.91-1.61,7.6-3.55,11.08-5.78Z"
          fill="url(#b)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M51.21,167.39l-12.78-42.56c-3.49-12.73-10.41-30.04-10.27-43.28-1.01-31.04,20.61-60.8,50.51-69.49.34.91,2.16,6.63,2.54,7.7,0,0-3.39,1.08-3.39,1.08l-1.88-6.1,2.16,1.11c-13.82,4.23-26.24,13.05-34.8,24.8-13.24,17.61-16.83,41.59-10.03,62.53,3.83,13.73,13.99,50.04,17.94,64.19h0Z"
          fill="#00bb0c"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.path
          d="M45,160.89l-15.09-41.79c-4.18-12.52-12.04-29.42-12.62-42.65C14.58,45.51,34.53,14.61,63.92,4.3c.39.89,2.52,6.5,2.96,7.55,0,0-3.32,1.27-3.32,1.27l-2.21-5.99,2.22.99c-13.57,4.98-25.48,14.46-33.39,26.67-12.26,18.31-14.53,42.45-6.59,62.98,4.58,13.5,16.71,49.2,21.42,63.11h0Z"
          fill="#00bb0c"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />
        <motion.path
          d="M177.96,20.28c19.32,0,33.42,3.96,42.3,11.88,8.87,7.92,13.31,19.02,13.31,33.29,0,6.49-1.01,12.65-3.02,18.49-2.01,5.84-5.31,10.99-9.88,15.46-4.58,4.47-10.6,8.01-18.08,10.6-7.48,2.6-16.68,3.89-27.6,3.89h-15.98v56.12h-24.58V20.28h43.53ZM176.33,40.66h-17.31v52.74h13.42c7.72,0,14.27-.9,19.66-2.71,5.39-1.81,9.49-4.69,12.29-8.65,2.8-3.96,4.2-9.18,4.2-15.67,0-8.67-2.61-15.12-7.83-19.36-5.22-4.23-13.37-6.35-24.43-6.35Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.path
          d="M295.6,54.49c10.1,0,18.78,2.08,26.01,6.25,7.24,4.17,12.8,10.07,16.69,17.72,3.89,7.65,5.84,16.8,5.84,27.45v12.9h-75.69c.27,10.99,3.23,19.46,8.86,25.4,5.63,5.94,13.54,8.91,23.71,8.91,7.24,0,13.74-.7,19.51-2.1,5.77-1.4,11.73-3.46,17.87-6.2v19.56c-5.67,2.66-11.44,4.61-17.31,5.84-5.87,1.23-12.9,1.84-21.1,1.84-11.13,0-20.91-2.17-29.34-6.5-8.43-4.34-15.02-10.8-19.77-19.41-4.75-8.6-7.12-19.29-7.12-32.06s2.15-23.49,6.45-32.36c4.3-8.87,10.34-15.63,18.13-20.28,7.78-4.64,16.86-6.96,27.24-6.96ZM295.6,72.62c-7.58,0-13.71,2.46-18.38,7.37-4.68,4.92-7.43,12.12-8.24,21.61h51.62c-.07-5.67-1.01-10.68-2.82-15.05-1.81-4.37-4.54-7.78-8.19-10.24-3.65-2.46-8.31-3.69-13.98-3.69Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
        />
        <motion.path
          d="M384.87,10.65v77.02c0,3.48-.14,7.29-.41,11.42-.27,4.13-.55,8.01-.82,11.62h.51c1.77-2.39,3.91-5.19,6.4-8.4,2.49-3.21,4.87-6.01,7.12-8.4l34.62-37.28h27.65l-45.37,48.75,48.34,64.62h-28.27l-36.26-49.77-13.52,11.57v38.2h-24.07V10.65h24.07Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
        />
        <motion.path
          d="M570.81,113.07c0,9.42-1.23,17.79-3.69,25.09-2.46,7.31-6.04,13.47-10.75,18.49-4.71,5.02-10.38,8.84-17,11.47-6.62,2.63-14.1,3.94-22.43,3.94-7.78,0-14.92-1.32-21.41-3.94-6.49-2.63-12.1-6.45-16.85-11.47-4.75-5.02-8.42-11.18-11.01-18.49-2.6-7.3-3.89-15.67-3.89-25.09,0-12.49,2.17-23.09,6.5-31.8,4.34-8.7,10.53-15.34,18.59-19.92,8.06-4.57,17.65-6.86,28.78-6.86,10.45,0,19.66,2.29,27.65,6.86,7.99,4.57,14.24,11.23,18.74,19.97,4.51,8.74,6.76,19.32,6.76,31.75ZM488.57,113.07c0,8.26,1.01,15.33,3.02,21.2,2.01,5.87,5.14,10.36,9.37,13.47,4.23,3.11,9.69,4.66,16.39,4.66s12.15-1.55,16.39-4.66c4.23-3.11,7.34-7.59,9.32-13.47,1.98-5.87,2.97-12.94,2.97-21.2s-.99-15.28-2.97-21.05c-1.98-5.77-5.09-10.17-9.32-13.21-4.23-3.04-9.73-4.56-16.49-4.56-9.97,0-17.24,3.35-21.81,10.04-4.57,6.69-6.86,16.28-6.86,28.78Z"
          fill="#fff"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
        />
        <motion.path

          d="M633.14,54.49c10.1,0,18.78,2.08,26.01,6.25,7.24,4.17,12.8,10.07,16.69,17.72,3.89,7.65,5.84,16.8,5.84,27.45v12.9h-75.69c.27,10.99,3.23,19.46,8.86,25.4,5.63,5.94,13.54,8.91,23.71,8.91,7.24,0,13.74-.7,19.51-2.1,5.77-1.4,11.73-3.46,17.87-6.2v19.56c-5.67,2.66-11.44,4.61-17.31,5.84-5.87,1.23-12.9,1.84-21.1,1.84-11.13,0-20.91-2.17-29.34-6.5-8.43-4.34-15.02-10.8-19.77-19.41-4.75-8.6-7.12-19.29-7.12-32.06s2.15-23.49,6.45-32.36c4.3-8.87,10.34-15.63,18.13-20.28,7.78-4.64,16.86-6.96,27.24-6.96ZM633.14,72.62c-7.58,0-13.71,2.46-18.38,7.37-4.68,4.92-7.43,12.12-8.24,21.61h51.62c-.07-5.67-1.01-10.68-2.82-15.05-1.81-4.37-4.54-7.78-8.19-10.24-3.65-2.46-8.31-3.69-13.98-3.69Z"
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
        className="text-4xl md:text-6xl font-semibold mb-4 text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 animate-gradient-x landing-text"
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}
      >
        Where Tea Meets AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl z-10"
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
      >
        Revolutionizing the tea industry with AI-powered grading technology
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 z-10"
      >
        <Link href="/home" passHref>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br hover:shadow-lg hover:rotate-1">
            Explore More
          </button>
        </Link>
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