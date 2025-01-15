import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`rounded-lg overflow-hidden ${className}`}>
            {children}
        </div>
    )
}

export function CardHeader({ children, className = '' }: CardProps) {
    return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: CardProps) {
    return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }: CardProps) {
    return <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>
}
