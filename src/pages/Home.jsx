import React from 'react'
import HeroImg from '../assets/hero.png'

import { LuBadgeCheck } from "react-icons/lu";
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RiMedalLine } from "react-icons/ri";

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import Serv1 from '../assets/serv1.jpeg'
import Serv4 from '../assets/serv4.jpg'
import Serv5 from '../assets/serv5.jpg'
import Serv6 from '../assets/serv6.jpg'
import Serv7 from '../assets/serv7.jpg'

import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm';

const Home = () => {

    const ReasonsData = [
        {
            icon: LuBadgeCheck,
            title: 'Expert Cleaning Services',
            details: 'We have more than 2M+ people trusted our services'
        },
        {
            icon: MdCleaningServices,
            title: 'Reliable And Experienced Staff',
            details: 'We have over 400+ cleaners to help you'
        },
        {
            icon: RiCalendarScheduleLine,
            title: 'Flexible And Easy Scheduling',
            details: 'We guarantee 100% satisfaction with our services'
        },
        {
            icon: RiMedalLine,
            title: 'High Quality Assurance',
            details: 'We offer affordable pricing for our services'
        }
    ]
    const servicesData = [
        {
            img: Serv6,
            title: 'Residential Cleaning',
            details: 'We have more than 2M+ people trusted our services'
        },
        {
            img: Serv1,
            title: 'Commercial Cleaning',
            details: 'We have over 400+ cleaners to help you'
        },
        {
            img: Serv5,
            title: 'Post-Construction Cleaning',
            details: 'We guarantee 100% satisfaction with our services'
        },
        {
            img: Serv4,
            title: 'Airbnb Cleaning Services',
            details: 'We guarantee 100% satisfaction with our services'
        },
        {
            img: Serv7,
            title: 'Move-In / Move-Out Cleaning',
            details: 'We offer affordable pricing for our services'
        }
    ]

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ]

    return (
        <>

            <section className=' px-5 lg:px-20 flex flex-col md:flex-row h-screen md:h-[80vh] justify-center items-center relative bg-gradient-to-b from-[#c4d5ee] to-[#9fc1ec] overflow-hidden'>
        
                <div className='flex flex-col gap-5 justify-center z-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-5xl md:w-[50%] font-bold flex gap-3'>
                            Welcome To El-pro Cleaning Services
                        </p>
                        <p className='lg:text-l md:w-[40%] '>
                            Our team of professional cleaners is committed to delivering a pristine and spotless environment for your home or business.
                            We understand the value of a clean space and are dedicated to meeting your specific cleaning needs.
                        </p>

                        <div className='py-4 flex items-center gap-5 font-semibold'>
                            <Link to='/cost-calculator'><button className='border-2 border-black px-5 py-2 rounded-md hover:bg-white hover:text-[#00369a] transition-all duration-300'>
                                Calculate Cost
                            </button></Link>
                            <Link to='/services'><button className='bg-[#00369a] px-7 py-2 text-white rounded-md hover:bg-[#002d7d] transition-all duration-300'>
                                Our Services
                            </button></Link>
                        </div>
                    </div>
                    <img src={HeroImg} alt="" className='hidden md:block w-[90%] md:w-[85%] lg:w-[55%] absolute bottom-0 right-0' />
                </div>

                

            </section>


            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col justify-around bg-[#EAF3FD] gap-10'>

                <div className='text-center text-3xl xl:text-5xl font-bold mx-auto'>
                    "Reasons Why People Choose Us"
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                    {
                        ReasonsData.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                                    <data.icon size={50} />
                                    <h4 className='font-bold text-2xl'>{data.title}</h4>
                                    <p>{data.details}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            <section className='lg:mx-10 flex flex-col px-5 lg:px-24'>

                <div className='text-3xl text-center md:text-5xl mt-20 mb-20 font-bold mx-auto'>
                    Our Services Include
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>

                    {
                        servicesData.map((data, index) => {
                            return (
                                <div key={index} className='border-2 border-black rounded-lg p-5 flex flex-col justify-between text-center items-center gap-2 hover:bg-[#EAF3FD] transition-all duration-300'>
                                    <img src={data.img} alt="" className='w-full aspect-square h-40 object-cover rounded-lg' />
                                    <div className="flex flex-col gap-2 mt-6">
                                        <h3 className='font-bold text-lg xl:text-2xl'>{data.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex items-center py-5 mb-10'>
                    <Link className='mt-6 bg-[#00369a] text-white font-semibold py-3 rounded-lg w-max px-10 mx-auto' to='/services'>
                        View All Services
                    </Link>
                </div>

            </section>

            <ContactForm />
        </>
    )
}

export default Home