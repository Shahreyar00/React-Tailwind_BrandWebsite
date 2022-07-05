import React, { useState } from 'react';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
                    <ul className="hidden md:flex gap-5 text-lg text-slate-500">
                        <li className="cursor-pointer"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li className="cursor-pointer"><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li className="cursor-pointer"><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li className="cursor-pointer"><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li className="cursor-pointer"><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex gap-2 items-center pr-4">
                    <button className="border-none bg-indigo-600 text-white px-6 py-2 rounded-lg drop-shadow-lg shadow-indigo-500">Sign In</button>
                    <button className="border-none bg-indigo-600 text-white px-5 py-2 rounded-lg drop-shadow-lg shadow-indigo-500">Sign Up</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav?<HiMenuAlt1 className="text-[28px]" />:<HiX className="text-[28px]" />}
                </div>
            </div>

            <ul className={!nav?"hidden":"absolute bg-zinc-200 w-full px-8 py-5"}>
                <li className='border-b-2 mb-2 py-2 border-zinc-300 w-full'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 mb-2 py-2 border-zinc-300 w-full'><Link onClick={handleClick} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 mb-2 py-2 border-zinc-300 w-full'><Link onClick={handleClick} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='border-b-2 mb-2 py-2 border-zinc-300 w-full'><Link onClick={handleClick} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='border-b-2 mb-2 py-2 border-zinc-300 w-full'><Link onClick={handleClick} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

                <div className="flex flex-col items-center my-4 w-full">
                    <button className="bg-indigo-600 text-white px-8 py-3 mb-4 rounded-lg">Sign In</button>
                    <button className="bg-indigo-600 text-white px-7 py-3 mb-4 rounded-lg">Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar