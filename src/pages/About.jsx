import React from 'react'

import { LuBadgeCheck } from "react-icons/lu";
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";


import { FaCalendarAlt } from "react-icons/fa";
import { GiJerrycan } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import { IoIosPeople } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

import BgImg from '../assets/about.jpg'

const About = () => {

    const servicesData = [
        {
            icon: AiOutlineLike,
            title: 'Customer Satisfaction',
            details: 'Customer satisfaction is our top priority'
        },
        {
            icon: BiLeaf,
            title: 'Eco Friendly',
            details: 'We use eco-friendly cleaning products.'
        },
        {
            icon: VscWorkspaceTrusted,
            title: 'Trust Worthy',
            details: 'We believe in transparency, trust, and reliability'
        }
    ]
    const servicesData2 = [
        {
            icon: FaCalendarAlt,
            title: 'Easy Online Scheduling Just Few Clicks',
            details: 'Few clicks are enough'
        },
        {
            icon: GiJerrycan,
            title: 'Cleaning With Care And Eco-Friendly Products',
            details: 'We have over 400+ cleaners to help you with these products'
        },
        {
            icon: IoHome,
            title: 'Enjoy Cleanliness And Shine Around You',
            details: 'We guarantee 100% satisfaction with our services'
        }
    ]

    const servicesData3 = [
        {
            icon: IoIosPeople,
            title: '1988',
            details: 'Happy Client'
        },
        {
            icon: AiFillLike,
            title: '999',
            details: 'Service Guarantee'
        },
        {
            icon: IoIosPerson,
            title: '144',
            details: 'Total Cleaners'
        },
        {
            icon: FaTasks,
            title: '180',
            details: 'Cleans Completed'
        }
    ]

    const faqs = [
        {
            "question": "What areas do you service?",
            "answer": "Elpro Cleaning Services provides cleaning solutions in *Queens, NY*, and surrounding areas."
        },
        {
            "question": "Do you provide one-time cleaning services?",
            "answer": "Yes, we offer both one-time cleaning services and regular cleaning schedules based on your preferences."
        },
        {
            "question": " What cleaning products do you use?",
            "answer": "We use *eco-friendly, non-toxic cleaning products* that are safe for your family, pets, and the environment."
        },
        {
            "question": "How can I book a cleaning service?",
            "answer": " You can easily book our services by contacting us at *info@elprocleaningservice.com* or filling out the form on our contact page."
        },
        {
            "question": "What should I do to prepare for my cleaning appointment?",
            "answer": "We recommend clearing up clutter and making sure your space is accessible for our cleaning staff. We'll handle the rest!"
        },
        {
            "question": "Are you insured?",
            "answer": "Yes, we are fully insured and bonded for your peace of mind."
        }
    ]

    return (
        <>
            <section className='flex h-[50vh] md:h-[60vh] relative justify-center items-center xl:mx-24 overflow-hidden'>

                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="" />
                <div className='flex flex-col w-screen text-white absolute items-left py-5 px-5 md:px-10 xl:px-36'>
                    <div className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold lg:w-[50%]'>About Elpro Cleaning Services</div>
                    <div className='font-normal lg:w-[30%] py-4'>Our mission is simple – to provide high-quality cleaning services that enhance the
                        comfort and productivity of our clients.
                        With years of experience, we know how to tackle the toughest cleaning jobs, ensuring your home or business looks spotless every time.
                    </div>
                </div>

            </section>

            <section className='px-5 md:px-24 py-10 md:py-20 flex flex-col bg-[#EAF3FD] gap-10'>

                <div className=' text-center text-3xl md:text-5xl text-[#00369a] font-bold '>
                    “Our Values“
                </div>
                <div className=' text-center text-xl md:text-xl font-normal'>
                    Elpro has become a trusted name in the cleaning industry.
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>

                    {
                        servicesData.map((data, index) => {
                            return (
                                <div key={index} className='border-2 border-black bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                                    <data.icon size={50} />
                                    <h4 className='font-bold text-xl'>{data.title}</h4>
                                    <p>{data.details}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            <section className='h-max py-20 px-5 flex flex-col gap-5 bg-gradient-to-b from-[#3D6FB4] to-[#92BDF6]'>

                <div className=' text-white flex flex-col items-center gap-5'>
                    <div className='text-2xl md:text-5xl font-bold'>Our Working Process</div>
                    <div className='text-xl md:text-2xl font-semibold text-center'>Let's Check How It Works</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 md:px-24 '>

                    {
                        servicesData2.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg py-6 px-10 flex flex-col justify-center gap-4'>
                                    <div className="flex gap-5 items-center">
                                        <data.icon size={50} className='bg-[#3D6FB4] rounded-xl text-white p-2' />
                                        <h4 className='font-bold text-xl w-[90%]'>{data.title}</h4>
                                    </div>
                                    <p>{data.details}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            <section className='bg-slate-300 h-max px-5 md:px-24 py-10 md:py-20 flex flex-col gap-5 justify-around'>

                <div className=' mb-0 text-gray-950 flex flex-col items-center gap-3'>
                    <div className=' text-3xl md:text-5xl font-bold text-center '>Our best achievement</div>
                    <div className='text-2xl text-center md:mt-2 font-semibold'>We feel very proud for our great achievement</div>
                </div>

                <div className='mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>

                    {
                        servicesData3.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg py-20 px-10 flex flex-col justify-center text-center items-center gap-4'>
                                    <data.icon size={60} className='bg-[#F7931D] rounded-xl text-white p-2' />
                                    <div className='flex flex-col gap-1.5 items-center'>
                                        <h4 className='font-bold text-2xl w-[90%]'>{data.title}</h4>
                                        <p className='font-bold text-xl'>{data.details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>

            <section className='px-5 md:px-24 py-10 md:py-20 bg-gradient-to-t from-[#92BDF6] to-[#3D6FB4] text-white font-semibold text-lg'>

                <div className='flex flex-col items-center gap-2 pb-8'>
                    <div className='font-bold text-4xl'>FAQs</div>
                    <div className='text-3xl text-center mt-2'>Frequently Asked Questions</div>
                </div>

                {
                    faqs.map((faq, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-2'>
                                <div className='md:px-14 py-2 font-bold text-white'>{index + 1}. {faq.question}</div>
                                <div className='bg-slate-300 px-14 py-2 text-black font-normal rounded-lg'>{faq.answer}</div>
                            </div>
                        )
                    })
                }

            </section>
        </>
    )
}

export default About