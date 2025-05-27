import React from 'react'
import Product from './Product'
import products from '../data/products'

export default function ProductList() {
    return (
        <div id='products' className='bg-white flex flex-col items-center justify-center w-full h-full py-20'>
            <h1 className='text-4xl text-black font-bold mb-15'>Our Product</h1>
            <div className='flex flex-wrap justify-center gap-12'>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
