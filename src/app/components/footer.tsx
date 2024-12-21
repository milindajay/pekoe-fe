import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-green-500 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" aria-label="Facebook">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" aria-label="Youtube">
                                <Youtube className="w-6 h-6" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Site Map</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/who-we-are" className="hover:underline">Who We Are</Link></li>
                            <li><Link href="/solutions" className="hover:underline">Solutions</Link></li>
                            <li><Link href="/technology" className="hover:underline">Technology</Link></li>
                            <li><Link href="/reach-us" className="hover:underline">Reach Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products/tea-retina" className="hover:underline">TeaRetina™</Link></li>
                            <li><Link href="/products/tea-fence" className="hover:underline">TeaFence™</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Uncomment the following section if you want to include the newsletter signup form */}
                {/* <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Get in Touch with Updates and News</h3>
                    <form className="flex flex-col sm:flex-row">
                        <input type="email" placeholder="Email" className="flex-grow px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none text-gray-800" />
                        <input type="text" placeholder="Name" className="px-4 py-2 focus:outline-none text-gray-800" />
                        <button type="submit" className="bg-white text-green-500 px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none font-medium hover:bg-gray-100 transition-colors">Sign Up</button>
                    </form>
                    <p className="mt-2 text-sm">By signing up you will be accepting Pekoe's Terms and Conditions and acknowledge that my information will be used in accordance with Pekoe's Privacy Policy</p>
                </div> */}
                <div className="mt-8 pt-8 border-t border-green-400">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <Image src="/images/TEAAI-WHITE.svg" alt="Pekoe Logo" width={150} height={40} />
                        <div className="text-sm mt-4 sm:mt-0">
                            <Link href="/privacy-policy" className="mr-4 hover:underline">Privacy Policy</Link>
                            <Link href="/cookie-policy" className="mr-4 hover:underline">Cookie Policy</Link>
                            <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-center">Copyright © {new Date().getFullYear()} Pekoe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

