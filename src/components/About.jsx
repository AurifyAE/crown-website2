import React from 'react'
import aboutImage from '../assets/aboutimage.jpg'

export default function About() {
    return (
        <div id="about" className='flex relative justify-end items-center py-28'>
            <div className='w-1/2 h-[750px] flex flex-col justify-center items-center absolute left-24  bg-[#7F4F20] text-white rounded-[57px] p-20 gap-20'>
                <div>
                    <h2 className='text-3xl font-bold pb-5'>Who We Are</h2>
                    <p>At Crown, we bring excellence to the gold and diamond industry through trusted trading and bespoke craftsmanship. From high-purity gold bars to custom jewellery, our experienced team ensures authenticity, value, and customer satisfaction in every transaction. Crown is your reliable partner in luxury and transparency.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold pb-5'>Commitment to Sustainability</h2>
                    <p>
                        At Crown Future Gold and Diamond L.L.C , we are committed to sustainable practices. We source our materials responsibly, ensure ethical practices in our supply chain, and actively contribute to the communities we serve. Our aim is to minimize environmental impact while delivering products of the highest quality.
                    </p>
                </div>
            </div>
            <div>
                <img src={aboutImage} alt="A gold bar photo" />
            </div>
        </div>
    )
}
