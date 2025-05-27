import React from 'react'
import highlightImage from '../assets/highlightsImage.jpg'
import tick from '../assets/tick.svg'

const highlights = [
    {
        title: "Expert Curation",
        description: "Premium gold, handpicked by industry professionals.",
    },
    {
        title: "Seamless Technology",
        description: "Trade effortlessly with our advanced platform.",
    },
    {
        title: "Knowledge & Insights",
        description: "Stay informed with expert market analysis.",
    },
    {
        title: "Expert Craftsmanship",
        description: "Each piece is meticulously crafted by skilled artisans.",
    },
    {
        title: "Authenticity Guarantee:",
        description: "We provide certification and guarantees for all our jewellery",
    },
    {
        title: "Competitive Pricing",
        description: "Premium quality at reasonable rates.",
    }
]

export default function Highlights() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:px-36 py-16 md:py-24 lg:py-28'>
        {/* Text section */}
        <div className='w-full lg:w-1/2'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-5'>Why Choose Us</h1>
            <div className='flex flex-col items-start justify-center gap-2'>
            {highlights.map((highlight, index) => (
                <div key={index} className='flex items-start gap-3 py-4'>
                <img src={tick} alt="tick icon" className='w-5 h-5 mt-1' />
                <div className='flex flex-col'>
                    <h4 className='text-base md:text-lg font-semibold text-[#EABE80]'>{highlight.title}</h4>
                    <p className='text-sm md:text-base'>{highlight.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Image section */}
        <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={highlightImage} alt="highlights image" className='max-w-full h-auto rounded-xl' />
        </div>
        </div>
    )
}
