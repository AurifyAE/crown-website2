import React from 'react'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'

export default function Banner() {
    return (
        <div className='h-12 bg-white flex items-center justify-end gap-5 px-14'>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'tel:+97143368916'}>
                <img src={phone} alt="phone" />
                <p className='text-black'>+971 4 336 8916</p>
            </div>
            <div 
            className='h-5 flex items-center gap-3 cursor-pointer'
            onClick={() => window.location.href = 'mailto:crownbulliongold@gmail.com'}>
                <img src={mail} alt="mail" />
                <p  className='text-black'>crownbulliongold@gmail.com</p>
            </div>
        </div>
    )
}
