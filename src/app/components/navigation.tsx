'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/solutions', label: 'Solutions' },
]

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                ? 'bg-gradient-to-r from-[#8D4CC2] to-[#009AFF] text-white shadow-lg'
                : 'bg-white text-gray-700 shadow-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={scrolled ? "/images/TEAAI-WHITE.svg" : "/images/TEAAI-DARK.svg"}
                                alt="Pekoe Logo"
                                width={120}
                                height={100}
                                className="w-auto h-8 sm:h-10 transition-opacity duration-500 ease-in-out"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:ml-6 md:flex md:space-x-4 mr-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out ${scrolled
                                        ? 'hover:bg-white/10'
                                        : 'hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/reach-us"
                            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                        >
                            Reach Us
                        </Link>
                        <button
                            type="button"
                            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ease-in-out ${scrolled
                                ? 'text-white hover:bg-white/10'
                                : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-colors duration-500 ease-in-out ${scrolled ? 'bg-gradient-to-r from-[#8D4CC2] via-[#009AFF] to-[#00BB0C]' : 'bg-white'
                    }`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-500 ease-in-out ${scrolled
                                ? 'text-white hover:bg-white/10'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/reach-us"
                        className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                    >
                        Reach Us
                    </Link>
                </div>
            </div>
        </nav>
    )
}

