import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import video1 from '../assets/hero/video1.mp4'
import video2 from '../assets/hero/video2.mp4'
import { useNavigate } from 'react-router-dom';


export default function Hero() {
    const navigate = useNavigate();
    const videos = [
        {
            src: video1,
            title: "Custom Design Gold and Diamond Jewellery",
            desc: "Bespoke jewellery crafted to match individual tastes and requirements. Our expert craftsmen design and create one-of-a-kind jewellery pieces, blending timeless artistry with modern elegance."
        },
        {
            src: video2,
            title: "Empowering Your Journey in Gold and Diamond Trading",
            desc: "Discover the purity and brilliance of our finest purity in gold bars sourced with excellence. We buy and sell gold bars at the best price in the market ensuring you get maximum value."
        }
    ];

    return (
    <div className="w-full h-screen">
        <Swiper
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            loop={true}
            className="w-full h-full custom-swiper"
        >
            {videos.map((vid, index) => (
            <SwiperSlide key={index}>
                <div className="relative w-full h-screen">
                    <video
                        src={vid.src}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover brightness-70"
                    />
                    <div className="absolute top-[30%] md:top-[20%] left-5 md:left-10 lg:left-30 text-white max-w-xl md:max-w-3xl lg:max-w-4xl z-10 space-y-6 md:space-y-10">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F0E5D9] to-[#DFB77C] bg-clip-text text-transparent">{vid.title}</h1>
                        <p className="text-sm md:text-lg lg:text-xl font-light max-w-full md:max-w-lg">{vid.desc}</p>
                        <button 
                            className='w-40 md:w-56 h-12 md:h-15 bg-[#7F4F20] rounded-[20px] cursor-pointer text-sm md:text-base'
                            onClick={() => navigate('/contact')}
                        >Enquiry Now</button>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}
