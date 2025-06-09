import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
import logo from '../assets/crownlogo.svg'
import location from '../assets/location.svg'
import phone from '../assets/phonewhite.svg'
import mail from '../assets/mailwhite.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='flex flex-col items-center bg-[#7F4F20] pt-10 gap-5 lato-regular text-white px-4'>
        {/* Top text */}
        <p className='text-sm md:text-base text-center px-2'>
            Get started now, try our product and start saving through trading
        </p>

        {/* Input and button */}
        <div className='relative w-full max-w-md'>
            <input 
            type="text" 
            className='w-full h-14 border-2 rounded-[70px] placeholder:text-white bg-transparent px-5 pr-16 text-white' 
            placeholder='Enter your email here' 
            />
            <button className='bg-[#BA8A54] absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
            <img src={rightArrow} alt="arrow" />
            </button>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-white mt-10" />

        {/* Footer middle section */}
        <div className='flex flex-col md:flex-row justify-between lg:justify-evenly items-center w-full gap-10 p-5 md:px-10'>
            {/* Logo */}
            <img src={logo} alt="Crown Logo" className='w-32 lg:w-40' />

            {/* Company Links */}
            <div className='flex flex-col items-center gap-4'>
            <h2 className='font-bold text-lg'>Company</h2>
            <ul className='flex flex-col text-sm gap-3 items-center'>
                <li 
                className='cursor-pointer' 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                About Us
                </li>
                <Link to="/account"><li className='cursor-pointer'>My Account</li></Link>
                <Link to="/contact"><li className='cursor-pointer'>Contact Us</li></Link>
            </ul>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col gap-4 text-sm md:text-base'>
            <div className='flex items-start gap-3 cursor-pointer'>
                <img src={location} alt="Location" className='w-5 h-5 mt-1' />
                <p>
                Crown Future Gold and Diamond LLC, <br />
                Edris Muhammed Sharif Abdullah, <br />
                Shop 2, Al Dhagaya, Deira, Dubai.
                </p>
            </div>
            <div className='flex items-start gap-3 cursor-pointer'>
                <img src={phone} alt="Phone" className='w-5 h-5 mt-1' />
                <p>
                +971 48 82 73 22, <br />
                +971 52 49 11 916, <br />
                +971 52 59 11 916
                </p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'
                onClick={() => window.location.href = 'mailto:info@crownfuturegold.com'}>
                <img src={mail} alt="Mail" className='w-5 h-5' />
                <p>info@crownfuturegold.com</p>
            </div>
            </div>
        </div>

        {/* Bottom line */}
        <div className='w-full bg-black py-5 text-center'>
            <p className='text-sm font-normal'>© 2025 Crown Future Gold All Rights Reserved</p>
        </div>
        </div>

    )
}
