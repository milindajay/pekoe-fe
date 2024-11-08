import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'TeaAI - Where Tea Meets AI',
  description: 'Revolutionizing the tea industry with AI-powered grading technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}