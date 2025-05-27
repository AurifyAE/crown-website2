import React, { useEffect } from 'react'
import tradingVideo from '../assets/gold-trading-graph.mp4'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const services = [
    {
        title: "Gold Bar Trade",
        desc: "We buy and sell gold bars of the finest purity, sourced responsibly and priced competitively to ensure maximum value."
    },
    {
        title: "Customised Jewellery",
        desc: "Our expert craftsmen design and create one-of-a-kind jewellery pieces, blending timeless artistry with modern elegance."
    },
    {
        title: "Gold & Diamond Jewellery",
        desc: "We offer a curated selection of stunning jewellery crafted from high-quality gold and ethically sourced diamonds."
    },
    {
        title: "Scrap Gold Exchange",
        desc: "We accept scrap gold and provide the most competitive rates in the market, ensuring fair and transparent transactions."
    }
]

export default function Services() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start(i => ({
            opacity: 0,
            y: i < 2 ? -50 : 50, // top 2 cards go up, others go down
            transition: { duration: 0.5 },
            }));
        }
    }, [inView, controls]);

    return (
        <div id='services' className='relative w-full'>
            <div className='text-center text-white space-y-5 py-20'>
                <h1 className='text-4xl font-bold '>What we do?</h1>
            <p className='text-xl'>At Crown, we offer a wide range of services to meet the diverse needs of our client:</p>
            </div>
            <video
                src={tradingVideo}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover brightness-70"
            />
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className='absolute top-60 left-0 w-full px-5 py-20 flex justify-center'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-x-20'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                            className='w-115 h-80 bg-[#7f4f20d8] flex flex-col items-center justify-center text-center p-15 rounded-4xl gap-5'
                        >
                            <h2 className='text-2xl font-semibold mb-2'>{service.title}</h2>
                            <p className='text-lg'>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
