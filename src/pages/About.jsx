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

import BgImg from '../assets/about.jpg';
import Owner from '../assets/owner.jpg';

const About = () => {

    const servicesData = [
        {
            icon: AiOutlineLike,
            title: 'Customer Satisfaction',
            details: 'Customer satisfaction is our top priority.'
        },
        {
            icon: BiLeaf,
            title: 'Eco Friendly',
            details: 'We use eco-friendly cleaning products.'
        },
        {
            icon: VscWorkspaceTrusted,
            title: 'Trustworthy',
            details: 'We believe in transparency, trust, and reliability.'
        }
    ];

    const servicesData2 = [
        {
            icon: FaCalendarAlt,
            title: 'Easy Online Scheduling',
            details: 'Few clicks are enough to book a service.'
        },
        {
            icon: GiJerrycan,
            title: 'Eco-Friendly Products',
            details: 'We use safe and eco-friendly products.'
        },
        {
            icon: IoHome,
            title: 'Guaranteed Cleanliness',
            details: 'We ensure 100% satisfaction with our services.'
        }
    ];

    const servicesData3 = [
        {
            icon: IoIosPeople,
            title: '1988',
            details: 'Happy Clients'
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
    ];

    const faqs = [
        {
            question: "What areas do you service?",
            answer: "Elpro Cleaning Services provides cleaning solutions in Queens, NY, and surrounding areas."
        },
        {
            question: "Do you provide one-time cleaning services?",
            answer: "Yes, we offer both one-time and regular cleaning schedules."
        },
        {
            question: "What cleaning products do you use?",
            answer: "We use eco-friendly, non-toxic products safe for your family and the environment."
        },
        {
            question: "How can I book a service?",
            answer: "You can book via email at info@elprocleaningservice.com or through our contact page."
        },
        {
            question: "What should I do to prepare for cleaning?",
            answer: "Clear clutter and ensure access to the space; we’ll handle the rest!"
        },
        {
            question: "Are you insured?",
            answer: "Yes, we are fully insured and bonded for your peace of mind."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='flex h-[50vh] md:h-[60vh] relative justify-center items-center overflow-hidden'>
                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="About Elpro Cleaning Services" />
                <div className='absolute flex flex-col w-full px-5 md:px-10 xl:px-36 text-white text-center items-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>About El-Pro Cleaning Services LLC</h1>
                    <p className='mt-4 text-lg md:text-xl lg:w-2/3'>
                        Our mission is simple – to provide high-quality cleaning services that enhance comfort and productivity. We tackle the toughest jobs to make your home or business spotless.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className='px-5 md:px-24 py-16 bg-[#EAF3FD]'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-5xl font-bold text-[#00369a]'>Our Values</h2>
                    <p className='mt-4 text-lg md:text-xl'>Elpro is a trusted name in the cleaning industry.</p>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                    {servicesData.map((data, index) => (
                        <div key={index} className='bg-white border-2 border-gray-200 rounded-lg p-8 text-center shadow-md transition-transform hover:scale-105'>
                            <data.icon size={50} className='text-[#00369a] mb-4' />
                            <h4 className='font-bold text-xl mb-2'>{data.title}</h4>
                            <p>{data.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Working Process Section */}
            <section className='py-16 px-5 md:px-24 bg-gradient-to-b from-[#3D6FB4] to-[#92BDF6] text-white'>
                <div className='text-center mb-12'>
                    <h2 className='text-2xl md:text-5xl font-bold'>Our Working Process</h2>
                    <p className='text-xl md:text-2xl mt-4'>Let’s Check How It Works</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {servicesData2.map((data, index) => (
                        <div key={index} className='bg-white text-black rounded-lg p-6 shadow-md hover:shadow-lg transition'>
                            <div className="flex gap-4 items-center">
                                <data.icon size={50} className='text-[#3D6FB4] p-2 bg-white rounded-lg' />
                                <h4 className='font-bold text-xl'>{data.title}</h4>
                            </div>
                            <p className='mt-4'>{data.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievement Section */}
            <section className='bg-slate-300 py-16 px-5 md:px-24'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-5xl font-bold text-gray-900'>Our Best Achievements</h2>
                    <p className='text-2xl mt-4'>We are proud of our accomplishments!</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-12'>
                    {servicesData3.map((data, index) => (
                        <div key={index} className='bg-white rounded-lg py-12 px-8 text-center shadow-md'>
                            <data.icon size={60} className='text-[#F7931D] mb-6' />
                            <h4 className='font-bold text-2xl'>{data.title}</h4>
                            <p className='text-lg mt-2'>{data.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs Section */}
            <section id='faqs' className='bg-gradient-to-t from-[#92BDF6] to-[#3D6FB4] text-white py-16 px-5 md:px-24'>
                <div className='text-center mb-10'>
                    <h2 className='font-bold text-4xl'>FAQs</h2>
                    <p className='text-3xl mt-4'>Frequently Asked Questions</p>
                </div>

                {faqs.map((faq, index) => (
                    <div key={index} className='mb-6'>
                        <div className='bg-white text-black rounded-lg p-6 mb-2'>
                            <h3 className='font-bold text-xl'>{index + 1}. {faq.question}</h3>
                            <p className='mt-2'>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </section>

<section className='bg-slate-100 h-max md:h-screen py-10 px-5 md:px-24 flex flex-col gap-5 justify-around'>
    <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-5'>Meet Our Team</h2>
        <p className='text-gray-600'>
            At Elpro Cleaning Services, our team is committed to providing top-notch cleaning solutions.
            With a focus on reliability, professionalism, and attention to detail, we ensure every space is left spotless.
        </p>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-center gap-10 mt-10'>
        {/* Team Member 1 */}
        <div className='bg-white shadow-lg rounded-lg p-5 text-center w-full'>
            <img src={Owner} alt='Elda Tislin' className='w-24 h-24 rounded-full mx-auto mb-4 bg-slate-100' />
            <h3 className='text-xl font-semibold text-gray-700'>Elda Tislin</h3>
            <p className='text-gray-500'>Owner and Operator</p>
            <p className='text-gray-600 mt-3'>
                Elda Tislin is the heart and soul of Elpro Cleaning Services, ensuring every client receives the highest
                level of service. With her leadership, we meet the highest standards in cleaning.
            </p>
        </div>

        {/* Team Member 2 - Professional Cleaners */}
        <div className='bg-white shadow-lg rounded-lg p-5 text-center w-full'>
            <img src='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg' alt='Professional Cleaners' className='w-24 h-24 rounded-full mx-auto mb-4 bg-slate-100' />
            <h3 className='text-xl font-semibold text-gray-700'>Our Professional Cleaners</h3>
            <p className='text-gray-500'>Experienced & Trained</p>
            <p className='text-gray-600 mt-3'>
                Our team of cleaners is well-trained and uses eco-friendly products to keep your space clean and safe.
                Each member is handpicked for their reliability and attention to detail.
            </p>
        </div>       
    </div>
</section>
<section className='bg-white py-16 px-5 md:px-24'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-bold text-gray-800'>Why Choose Our Team?</h2>
                    <p className='mt-4 text-xl text-gray-600'>
                        We are dedicated to providing the best cleaning services, with a focus on customer satisfaction, eco-friendly practices, and reliability. Here's why we stand out:
                    </p>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-10'>
                    <ul className='text-gray-600 list-disc list-inside space-y-4'>
                        <li>Expertise and experience in residential and commercial cleaning.</li>
                        <li>Eco-friendly cleaning products for a healthier environment.</li>
                        <li>Customer-focused approach, ensuring your needs are always prioritized.</li>
                        <li>Fully insured and bonded for your peace of mind.</li>
                        <li>100% satisfaction guarantee with every cleaning service.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default About;
