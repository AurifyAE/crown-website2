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
        <div className='flex relative justify-center items-center gap-10 py-28'>
            <div>
                <h1 className='text-5xl font-bold pb-5'>Why Choose Us</h1>
                <div className='flex flex-col items-start justify-center gap-2'>
                    {highlights.map((highlight, index) => (
                    <div key={index} className='flex items-start justify-center gap-3 py-4'>
                        <img src={tick} alt="" />
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='text-lg lato-bold text-[#EABE80]'>{highlight.title}</h4>
                            <p className='text-lg lato-regular'>{highlight.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <img src={highlightImage} alt="highlights image" />
        </div>
    )
}
