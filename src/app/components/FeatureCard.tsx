"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
// import { X } from "lucide-react"

interface FeatureCardProps {
    icon: React.ElementType
    title: string
    description: string
    screenshotSrc: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, screenshotSrc }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-black text-white transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-linear-65"
                onClick={() => setIsOpen(true)}
            >
                <div className="p-6">
                    <Icon className="text-4xl mb-4 text-green-500" size={48} />
                    <h4 className="text-xl font-semibold mb-4">{title}</h4>
                    <p className="text-gray-300">{description}</p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-xl font-semibold mb-4" id="modal-title">
                                            {title}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">{description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Image
                                        src={screenshotSrc || "/placeholder.svg"}
                                        alt={`Screenshot of ${title}`}
                                        width={700}
                                        height={400}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

