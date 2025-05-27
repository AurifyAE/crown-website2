import React from 'react'


export default function Product({ product }) {
    const { name, image, purity } = product;

    return (
        <div className='w-75 flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-101'>
            <div className='w-full h-90 bg-[#7F4F20] group-hover:bg-[#965a1e] flex justify-center items-center rounded-4xl transition-colors duration-300 overflow-hidden'>
                <img
                src={image}
                alt={`${name} image`}
                className='transition-transform duration-300 group-hover:scale-105'
                />
            </div>
            <div className='text-center text-black mt-5'>
                <h2 className='font-semibold text-3xl mb-2 group-hover:text-[#BA8A54] transition-colors duration-300'>
                    {name}
                </h2>
                <p className='text-xl font-semibold group-hover:text-[#BA8A54] transition-colors duration-300'>Purity: {purity}</p>
            </div>
        </div>

    )
}
