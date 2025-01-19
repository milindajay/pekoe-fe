'use client'

export function MapLocation() {
    return (
        <div className="w-full mt-12">
            <div className="aspect-video relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7987728641514!2d103.81087846378556!3d1.289986670722411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b9d73bcf58d%3A0x38d22e454b02193a!2sPekoe%20Pte%20Ltd!5e0!3m2!1sen!2slk!4v1737290782435!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
            </div>
        </div>
    )
}

