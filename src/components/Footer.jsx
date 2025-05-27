import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
import logo from '../assets/crownlogo.svg'
import location from '../assets/location.svg'
import phone from '../assets/phonewhite.svg'
import mail from '../assets/mailwhite.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='flex flex-col items-center bg-[#7F4F20] pt-10 gap-5 lato-regular'>
            <p className='text-sm lg:text-base'>Get started now, try our product and start saving through trading</p>
            <div className='relative flex justify-center w-1/2'>
                <input 
                type="text" 
                className='w-md h-14 border-2 rounded-[70px] placeholder:text-white px-5 pr-16' 
                placeholder='Enter your email here' 
                />
                <button className='bg-[#BA8A54] absolute -right-6 md:right-2 lg:right-41 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer'>
                    <img src={rightArrow} alt="" />
                </button>
            </div>

            <div className="w-full h-[2px] bg-white mt-10" />

            <div className='flex flex-col md:flex-row justify-around items-center w-full md:gap-0 gap-6 p-10'>
                <img src={logo} alt="Crown Logo" className='w-32 lg:w-40' />
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='font-bold text-lg'>Company</h2>
                    <ul className='flex flex-col text-sm gap-3'>
                        <li 
                        className='cursor-pointer' 
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                            About Us
                        </li>
                        <Link to="/account">
                            <li className='cursor-pointer'>My Account</li>
                        </Link>
                        <Link to="/contact">
                            <li className='cursor-pointer'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className='lg:w-1/3 flex flex-col gap-4 md:text-sm'>
                    <div className=' flex items-start gap-3 cursor-pointer'>
                        <img src={location} alt="Location" className='' />
                        <p>Crown Future Gold and Diamond LLC,
                            Edris Muhammed Sharif Abdullah, 
                            Shop 2, Al Ghagaya, Deira, Dubai.
                        </p>
                    </div>
                    <div className=' w-80 flex items-start gap-3 cursor-pointer'>
                        <img src={phone} alt="Phone" className='' />
                        <p>+971 48 82 73 22, +971 52 49 11 916, +971 52 59 11 916 </p>
                    </div>
                    <div className='h-5 flex items-center gap-3 cursor-pointer'
                        onClick={() => window.location.href = 'mailto:crownbulliongold@gmail.com'}
                        >
                        <img src={mail} alt="Mail" className='' />
                        <p>info@crownfuturegoldgmail.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black py-5 text-center'>
                <p className='text-sm font-normal'>© 2025 Crown Future Gold All Rights Reserved</p>
            </div>
        </div>
    )
}
