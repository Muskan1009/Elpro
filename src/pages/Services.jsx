import React from 'react'
import Servimg from '../assets/about.jpg'

import Airbnb from '../assets/serv1.jpeg'
import Resident from '../assets/serv2.webp'
import Comm from '../assets/serv3.jpg'

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import ContImg from '../assets/contact.webp'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PZIArG5MT11KApvXJgAFIKzv4iLzN2ca8IGOPmcwUQ8je8kiuUmqWEJKlWYP3D8CYUHfPKvr1uNswIav8LyAATs00f6EMku9m');

const ServiceCard = ({ data }) => {

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Redirect to Checkout with the sessionId from Stripe
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: data.priceID,
                    quantity: 1,
                },
            ],
            mode: "payment",
            successUrl: window.location.origin + "/success",
            cancelUrl: window.location.origin + "/cancel",
        });

        if (error) {
            console.error("Stripe Checkout Error:", error);
        }
    };

    return (
        <div className='flex flex-col gap-3 bg-[#EAF3FD] p-5 rounded-lg justify-between'>
            <div className='flex flex-col gap-3'>
                <img src={data.img} alt="" className='w-full h-72 object-cover rounded-lg' />
                <h4 className='font-bold text-center text-xl'>{data.title}</h4>
                <p className='text-l text-center'>{data.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-6">
                <h4 className='font-semibold text-center text-xl'>Price- {data.price} USD</h4>
                <button onClick={handleCheckout} className=' mx-20 bg-[#00369a] text-white py-3 rounded-lg hover:bg-[#002a78] transition duration-300 ease-in-out'>
                    Book Now
                </button>
            </div>
        </div>
    )
}

const Services = () => {

    const ServiceCards = [
        {
            id: 1,
            img: Airbnb,
            title: 'Airbnb Cleaning Services',
            description: 'Ensure your guests have a spotless stay with our reliable and fast Airbnb cleaning solutions.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Resident,
            title: 'Residential Cleaning Services',
            description: 'Keep your home clean and organized with our customized cleaning plans. We offer regular and deep cleaning services for houses, apartments, and condos.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Comm,
            title: 'Commercial Cleaning Services',
            description: 'We provide cleaning services for offices, retail spaces, and other commercial properties, creating a clean and welcoming environment for your employees and customers.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Airbnb,
            title: 'Post-Construction Cleaning',
            description: 'Keep your home clean and organized with our customized cleaning plans. We offer regular and deep cleaning services for houses, apartments, and condos.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Resident,
            title: 'Move-In/Move-Out Cleaning',
            description: 'Keep your home clean and organized with our customized cleaning plans. We offer regular and deep cleaning services for houses, apartments, and condos.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        }
    ]

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ]

    return (
        <>
            <section className='flex h-[50vh] md:h-[60vh] relative justify-center items-center xl:mx-24 overflow-hidden'>

                <img className='h-full w-full object-cover brightness-50' src={Servimg} alt="" />
                <div className='flex flex-col w-screen text-white absolute items-left py-5 px-5 md:px-10 xl:px-36'>
                    <div className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold lg:w-[50%]'>Our Cleaning Services</div>
                    <div className='font-normal lg:w-[30%] py-4'>At Elpro Cleaning Services, we offer a range of professional cleaning solutions to meet your needs. 
                        Whether you're looking for a spotless home, a clean workspace, or a tidy Airbnb, we've got you covered.
                    </div>
                </div>

            </section>

            <section className='px-5 md:px-24 py-10 h-max flex flex-col justify-around'>

                <div className='py-10 flex flex-col items-center'>
                    <p className='text-3xl text-center font-bold text-[#00369a]'>
                        Professional Cleaning Services Tailored to Your Needs
                    </p>
                    <p className='text-xl w-[80%] py-5 text-center text-black-700'>
                        At Cleanatrix, LLC, we offer a wide range of cleaning services to ensure your home, office, or Airbnb property is pristine. Our services include:
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        ServiceCards.map((data, index) => {
                            return (
                                <ServiceCard data={data} key={index} />
                            );
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Services