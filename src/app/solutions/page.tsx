import { Metadata } from 'next'
import { SolutionsHero } from '../components/solutions-hero'
import { TeaRetinaMini } from '../components/tea-retina-mini'
import { KeyFeatures } from '../components/key-features'
import { Benefits } from '../components/benefits'
import { SetupGuide } from '../components/setup-guide'
import { Support } from '../components/support'

export const metadata: Metadata = {
    title: 'Solutions | Pekoe',
    description: 'Discover our innovative tea grading solutions',
}

export default function SolutionsPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-green-100">
            <SolutionsHero />
            <TeaRetinaMini />
            <KeyFeatures />
            <Benefits />
            <SetupGuide />
            <Support />
        </main>
    )
}

