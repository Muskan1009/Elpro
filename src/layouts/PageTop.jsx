import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Logo from '../assets/logo.jpeg';

const PageTop = () => {

    const topData = [
        {
            title: 'Office Time',
            details: 'Sun - Mon 9 am - 6 pm',
            icon: CiClock2
        },
        {
            title: 'Email Address',
            details: 'info@elprocleaningservice.com',
            icon: CiMail
        },
        {
            title: 'Location',
            details: 'Queens, NY, and surrounding areas',
            icon: CiLocationOn
        }
    ];

    return (
        <header className='flex flex-col xl:flex-row justify-between items-center py-5 px-5 xl:px-28'>

            <img src={Logo} alt="" className='w-32' />

            <div className='flex flex-col md:flex-row gap-5 xl:gap-10 mt-5'>

                {
                    topData.map((data, index) => (
                        <div key={index} className='flex items-center space-x-2 text-sm'>
                            <data.icon size={50} className='xl:block hidden' />
                            <data.icon size={30} className='block xl:hidden' />
                            <div>
                                <h4>{data.title}</h4>
                                <p className='font-bold'>{data.details}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </header>
    );
}

export default PageTop;
