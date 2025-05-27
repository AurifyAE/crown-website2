import React from 'react'
import aboutImage from '../assets/aboutimage.jpg'

export default function About() {
    return (
        <div id="about" className='flex flex-col-reverse lg:flex-row relative lg:justify-end items-center py-10 px-4 md:px-10 lg:py-28 lg:px-0'>

            <div className='w-full lg:w-1/2 h-auto lg:h-[550px] flex flex-col justify-center items-center lg:absolute lg:left-24 bg-[#7F4F20] text-white rounded-[30px] lg:rounded-[57px] p-12 md:p-14 lg:p-20 gap-10 md:gap-16 lg:gap-20'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold pb-3'>Who We Are</h2>
                    <p className='text-sm md:text-base'>
                        At Crown, we bring excellence to the gold and diamond industry through trusted trading and bespoke craftsmanship. From high-purity gold bars to custom jewellery, our experienced team ensures authenticity, value, and customer satisfaction in every transaction. Crown is your reliable partner in luxury and transparency.
                    </p>
                </div>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold pb-3'>Commitment to Sustainability</h2>
                    <p className='text-sm md:text-base'>
                        At Crown Future Gold and Diamond L.L.C, we are committed to sustainable practices. We source our materials responsibly, ensure ethical practices in our supply chain, and actively contribute to the communities we serve. Our aim is to minimize environmental impact while delivering products of the highest quality.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center'>
                <img src={aboutImage} alt="A gold bar photo" className='max-w-full h-auto object-cover rounded-3xl lg:rounded-none' />
            </div>
        </div>

    )
}
