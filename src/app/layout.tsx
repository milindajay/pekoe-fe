import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navigation from './components/navigation'
import Footer from './components/footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'TeaAI - Where Tea Meets AI',
  description: 'Revolutionizing the tea industry with AI-powered grading technology',
  keywords: 'tea, AI, grading, technology, TeaAI',
  authors: [{ name: 'TeaAI Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} font-sans`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

