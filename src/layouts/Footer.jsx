import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const footerData = [
        {
            title: 'Quick Links',
            links: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'Services',
                    link: '/services'
                },
                {
                    name: 'Contact Us',
                    link: '/contact'
                }
            ]
        },
        {
            title: 'Socials',
            links: [
                {
                    name: 'Facebook',
                    link: 'https://www.facebook.com'
                },
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com'
                },
                {
                    name: 'Twitter',
                    link: 'https://www.twitter.com'
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com'
                }
            ]
        },
        {
            title: 'Important Links',
            links: [
                {
                    name: 'Privacy Policy',
                    link: '/privacy'
                },
                {
                    name: 'Terms & Conditions',
                    link: '/terms'
                }
            ]
        }
    ]

    return (
        <>
            <footer className='px-5 md:px-20 py-24 bg-slate-300 flex'>

                <div className='flex flex-col md:flex-row gap-10 text-black'>
                    {footerData.map((data, index) => {
                        return (
                            <div key={index} className='text-xl'>
                                <h4 className='font-medium mb-5'>{data.title}</h4>
                                <nav className='flex flex-col gap-2'>
                                    {data.links.map((link, index) => {
                                        return (
                                            <Link to={link.link} key={index} className=' hover:underline opacity-80 hover:opacity-100 duration-300 text-lg'>
                                                {link.name}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>
                        )
                    })}
                </div>

            </footer>
            <footer>
                <div className='bg-[#004AAD] text-white/50 py-5 text-sm font-bold text-center'>
                    <p>© 2024 El-pro. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer