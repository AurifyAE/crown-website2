import React from 'react'
import logo from '../assets/crownlogo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 left-0 w-full z-50 flex justify-between items-center bg-[#7F4F20] text-white py-1 px-5 md:px-15 lg:px-30 shadow-xl'>
            <Link to="/">
                <img src={logo} alt="Logo" className='w-24 h-24' /> 
            </Link>    

            <button 
                className='hidden lg:block w-40 h-10 bg-white text-[#7F4F20] border rounded-[20px] shadow-[0_0_15px_white] border-white cursor-pointer'
                onClick={() => document.getElementById('liverate').scrollIntoView({ behavior: 'smooth' })}
                >
                Live Rate
            </button>

            <div className='lg:flex justify-evenly items-center w-1/2 gap-3 hidden'>
                <button
                    className='cursor-pointer '
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    About Us
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                >
                    Products
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                    Services
                </button>
                <Link to="/account">
                    <button className="cursor-pointer">My Account</button>
                </Link>

                <Link to="/contact">
                    <button className="cursor-pointer">Contact Us</button>
                </Link>
            </div>

             {/* Hamburger icon */}
            <button
                className='text-white text-3xl lg:hidden'
                onClick={() => setIsOpen(true)}
            >
                <HiMenu />
            </button>


             {/* Mobile Slide Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#7F4F20] text-white z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex justify-end p-4'>
                    <button onClick={() => setIsOpen(false)}>
                        <HiX size={28} />
                    </button>
                </div>
                <div className='flex flex-col items-start px-6 gap-5'>
                    <button 
                        className='w-32 h-10 bg-white text-[#7F4F20] border rounded-[20px] shadow-[0_0_15px_white] border-white'
                        onClick={() => document.getElementById('liverate').scrollIntoView({ behavior: 'smooth' })}>Live Rate</button>
                    <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Us</button>
                    <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Products</button>
                    <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button>
                    <Link to="/account"><button>My Account</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                </div>
            </div>
            {/* Backdrop (optional) */}
            {isOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}
