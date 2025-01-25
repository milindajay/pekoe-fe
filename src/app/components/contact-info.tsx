import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'
import { GradientBorder } from './GradientBorder'
import Link from 'next/link'

export function ContactInfo() {
    return (
        <GradientBorder>
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <h3 className='font-bold'>Singapore Head Office:</h3>
                    <div className="flex items-start hover:text-green-500">
                        <MapPin className="w-4 h-4 mr-2 mt-1" />
                        <span><Link
                            href="https://maps.app.goo.gl/trTswDTHfswJ8FRq8"
                            aria-label="Location"
                            target='_blank'
                        >
                            14 Kung Chong Rd, #05-01 Lum Chang Building Singapore 159150
                        </Link></span>
                    </div>
                    <div className="flex items-center hover:text-green-500">
                        <Phone className="w-4 h-4 mr-2" />
                        <span><Link
                            href="tel:+6564738878"
                            aria-label="Phone"
                            target='_blank'
                        >
                            +65 6473-8878
                        </Link></span>
                    </div>
                    <h3 className='font-bold'>Sri Lanka Office:</h3>
                    <div className="flex items-start hover:text-green-500">
                        <MapPin className="w-4 h-4 mr-2 mt-1" />
                        <span><Link
                            href="https://maps.app.goo.gl/n6Ffm8ZQXMZcLqjA7"
                            aria-label="Location"
                            target='_blank'
                        >
                            47/1 Jawatta Rd, Colombo 00500
                        </Link></span>
                    </div>
                    <div className="flex items-center hover:text-green-500">
                        <Phone className="w-4 h-4 mr-2" />
                        <span><Link
                            href="tel:+94711127241"
                            aria-label="Phone"
                            target='_blank'
                        >
                            +94 71 11 27 241
                        </Link></span>
                    </div>
                    <h3 className='font-bold'>Send us an email:</h3>
                    <div className="flex items-center hover:text-green-500">
                        <Mail className="w-4 h-4 mr-2" />
                        <span><Link
                            href="mailto:info@pekoe.ai"
                            aria-label="Email"
                            target='_blank'
                        >
                            info@pekoe.ai
                        </Link></span>
                    </div>


                </CardContent>
            </Card >
        </GradientBorder>
    )
}

