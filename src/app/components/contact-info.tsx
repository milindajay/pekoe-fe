import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+65 1234 5678</span>
                </div>
                <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>support@teaai.ai</span>
                </div>
                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>14 Kung Chong Rd, #05-01 Lum Chang Building, Singapore 159150</span>
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                </div>
            </CardContent>
        </Card>
    )
}

