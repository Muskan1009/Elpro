import React from 'react'
import ContImg from '../assets/ContImg.jpg'


const ContactForm = () => {
    return (
        <section className='flex flex-col lg:flex-row h-max '>

            <form className='w-auto lg:w-[60%] flex flex-col gap-5 px-5 sm:px-10 md:px-20 py-10 bg-slate-100'>

                <div className='text-4xl font-bold '>
                    Contact Us
                </div>

                <p>
                    We are always ready to help you. There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.
                </p>

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Name' />

                <input type="email" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Email' />

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Contact No' />

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Service Type' />

                <textarea type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' rows={5} placeholder='Message' />

                <button className='bg-[#00369a] text-lg text-white font-medium py-2 px-10 w-max rounded-lg'>
                    Submit Now
                </button>

            </form>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4418879043296!2d-73.7487295!3d40.66423160000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26723ecd6615b%3A0xf9d5f6d9a23d8f97!2sEl-Pro%20Cleaning%20Services%20LLC!5e0!3m2!1sen!2sin!4v1727901758095!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-[50vh] lg:h-auto w-full lg:w-[40%]'></iframe>

        </section>
    )
}

export default ContactForm