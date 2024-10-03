import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { RiMenu2Line } from "react-icons/ri";
import { Modal } from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {

    const navLinks = [
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
        },
        {
            name: 'Blogs',
            link: '/blogs'
        }
    ]

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <header className='bg-[#00369a] lg:flex justify-between items-center  px-20 py-5 hidden'>

                <nav className='flex gap-5 text-xl text-white'>
                    {navLinks.map((data, index) => {
                        return (
                            <NavLink className={({ isActive }) => isActive ? 'font-medium' : ''} to={data.link} key={index}>
                                {data.name}
                            </NavLink>
                        )
                    })}
                    <NavHashLink
                        smooth // Enable smooth scrolling
                        className={({ isActive }) => isActive ? 'font-medium' : ''}
                        to='/about#faqs'
                    >
                        FAQs
                    </NavHashLink>
                </nav>

                <Link to='/cost-calculator' className='bg-[#ffffff] text-gray-950 text-xl py-2 px-6 rounded-md'>
                    Calculate Cost
                </Link>

            </header>

            <header className='bg-[#004AAD] flex justify-between items-center px-5 py-5 lg:hidden'>
                <RiMenu2Line onClick={handleOpen} size={30} className='text-white' />
                <Link to='/cost-calculator' className='bg-[#ffffff] text-gray-950 text-xl py-2 px-6 rounded-md'>
                    Calculate Cost
                </Link>
            </header>

            <Modal
                open={open}
                onClose={handleClose}
                className='flex justify-center items-center'
            >
                <div className='bg-white p-10 rounded-xl'>
                    <nav className='flex flex-col gap-5 text-xl text-[#004AAD]'>
                        {navLinks.map((data, index) => {
                            return (
                                <NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'font-medium' : ''} to={data.link} key={index}>
                                    {data.name}
                                </NavLink>
                            )
                        })}
                        <NavHashLink
                            smooth // Enable smooth scrolling
                            className={({ isActive }) => isActive ? 'font-medium' : ''}
                            to='/about#faqs'
                        >
                            FAQs
                        </NavHashLink>
                    </nav>
                </div>
            </Modal>

        </>
    )
}

export default Header