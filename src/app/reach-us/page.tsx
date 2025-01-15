import { Metadata } from 'next'
import { ContactInfo } from '../components/contact-info'
import { ContactForm } from '../components/contact-form'

export const metadata: Metadata = {
    title: 'Reach Us | Pekoe',
    description: 'Get in touch with Pekoe for any inquiries or support',
}

export default function ReachUsPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-green-100">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
                        Reach Us
                    </h1>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )
}

