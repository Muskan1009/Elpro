import React from 'react';
import ContImg from '../assets/ContImg.jpg';
import { FcClock } from "react-icons/fc";
import { CiLocationOn, CiMail } from "react-icons/ci";
import BgImg from '../assets/about.jpg';

const ContactUs = () => {

    const topData = [
        {
            title: 'Office Time',
            details: 'Monday – Friday: 8 AM – 6 PM | Saturday: 9 AM – 4 PM',
            icon: FcClock
        },
        {
            title: 'Email Address',
            details: 'info@elprocleaningservice.com',
            icon: CiMail
        },
        {
            title: 'Location',
            details: 'Queens, New York',
            icon: CiLocationOn
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='flex h-[50vh] md:h-[60vh] relative justify-center items-center xl:mx-24'>
                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="Background" />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <h1 className='text-white text-4xl lg:text-6xl font-bold'>Contact Us</h1>
                </div>
            </section>

            <section className='bg-gray-50 py-16 px-5 lg:px-24'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5'>

                    {/* Form Section */}
                    <div className='bg-white p-5 shadow-md rounded-lg'>
                        <h2 className='text-3xl font-semibold mb-6 text-center'>Get in Touch</h2>
                        <form className='flex flex-col gap-6'>
                            <input type="text" className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Full Name' required />

                            <input type="email" className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Email Address' required />

                            <input type="tel" className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Contact Number' required />

                            <input type="text" className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Service Type' required />

                            <textarea className='border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' rows={5} placeholder='Your Message' required />

                            <button className='mt-5 bg-[#00369a] w-max text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition'>
                                Submit Now
                            </button>

                        </form>
                    </div>

                    {/* Image Section */}
                    <div className='hidden lg:block'>
                        <img src={ContImg} alt="Contact Illustration" className='w-full h-full object-cover rounded-lg shadow-md' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
