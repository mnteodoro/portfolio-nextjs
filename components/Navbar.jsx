import Image from "next/image"
import Link from "next/link";
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logoImg from "../public/assets/hero-logo.png"

const Navbar = () => { 
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    /* Function for toggling menu */
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => { 
        const handleShadow = () => {
            if (window.scrollY >= 90) { 
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    },
    []
    )

    return (
        <div className={shadow ? 'fixed shadow-gray-900 shadow-xl w-full h-20 z-[100] bg-[#131628]': 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center px-2 w-full h-full 2xl:px-16">
            <Link href='/'>
            <Image src={logoImg} alt="/" width='130' height='500'/>
            </Link>
              <div>
                <ul className="hidden md:flex px-5">
                    <Link href="/#home"> 
                    <li id="nav-home" className="ml-10 text-gray-100 text-sm uppercase duration-300 p-2">Home</li> 
                    </Link>
                    <Link href="/#about"> 
                    <li id="nav-about" className="ml-10 text-gray-100 text-sm uppercase duration-300">About</li> 
                    </Link>
                    <Link href="/#skills"> 
                    <li id='nav-skills' className="ml-10 text-gray-100 text-sm uppercase duration-300">Skills</li> 
                    </Link>
                    <Link href="/#projects"> 
                    <li id="nav-projects" className="ml-10 text-gray-100 text-sm uppercase duration-300">Projects</li> 
                    </Link>
                    <Link href="/#contact"> 
                    <li id="nav-contact" className="ml-10 text-gray-100 text-sm uppercase duration-300">Contact</li> 
                    </Link>
                </ul>
                <div onClick={handleNav} className="cursor-pointer md:hidden">
                    <AiOutlineMenu size={25}/>
                </div>
              </div>
            </div>

        <div className={nav ? "flex md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "}>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-out duration-700" 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                <div className="flex w-full items-center justify-between">
                    <Image src="/../public/assets/hero-sig.png" width="180" height="5" alt="/" /> 
                    <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="border-b border-gray-400 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Let us build something amazing!</p>
                </div>
            </div>
            <div className="flex flex-col py-3">
                <ul className="uppercase">
                    <Link href='/#home'>
                    <li onClick ={() => setNav(false)} className="py-4 text-sm hover:text-blue-900 hover:font-bold ease-out duration-300">Home</li>
                    </Link>
                    <Link href='/#about'>
                    <li onClick ={() => setNav(false)} className="py-4 text-sm hover:text-blue-900 hover:font-bold ease-out duration-300">About</li>
                    </Link>
                    <Link href='/#skills'>
                    <li onClick ={() => setNav(false)} className="py-4 text-sm hover:text-blue-900 hover:font-bold ease-out duration-300">Skills</li>
                    </Link>
                    <Link href='/#projects'>
                    <li onClick ={() => setNav(false)} className="py-4 text-sm hover:text-blue-900 hover:font-bold ease-out duration-300">Projects</li>
                    </Link>
                    <Link href='/#contacts'>
                    <li onClick ={() => setNav(false)} className="py-4 text-sm hover:text-blue-900 hover:font-bold ease-out duration-300">Contact</li>
                    </Link>
                </ul>
                <div className="pt-20">
                    <p className="uppercase tracking-widest">Let us connect</p>
                    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 hover:text-white hover:bg-blue-900">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 hover:text-white hover:bg-violet-900">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 hover:text-white hover:bg-red-900">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 hover:text-white hover:bg-green-900">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Navbar