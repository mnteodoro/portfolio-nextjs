import React,{useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi' 
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id="contact" className='w-full p-2 lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-5 py-16 w-full'>
            <p className="text-[#5651e5] uppercase px-2 py-1 text-l tracking-widest" data-aos-offset='250' data-aos='fade-down'>Contact</p>
            <h2 data-aos='fade-down' data-aos-offset='250' data-aos-duration='500' className='py-4 text-gray-300'>Get In Touch</h2>
            <div data-aos='fade-up' data-aos-offset='500' className='grid lg:grid-cols-5 gap-8'>
                {/* left div */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                    <img alt='/' className='pb-3 rounded-xl ease-out' src='https://images.unsplash.com/photo-1517330486404-33542d376afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMxfHxsYXB0b3AlMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'></img>
                    </div> 
                <div>
                    <h2 className='py-2 text-[#5651e5]'>Mark Teodoro</h2>
                    <p className='text-gray-200'>BS Computer Engineering | Front-End Web Developer</p>
                    <p className='py-4 text-gray-200'>I am looking for internship and freelance positions. Contact me and let us talk.</p>
                </div>
                <div>
                    <p className='uppercase pt-8 text-[#5651e5]'>Connect With Me</p>
                    <div className='flex gap-8 justify-center items-center max-w-[330px] m-auto py-4 pt-8'>
                    <a href='https://www.linkedin.com/in/mark-emmanuel-teodoro-a4b5b523a/'><div id='main-button' className='rounded-full text-gray-300 shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-gray-900 hover:bg-[#5ec383]'><FaLinkedinIn/></div></a>
                <a href='https://github.com/markteodoro08' ><div id='main-button' className='rounded-full text-gray-300  shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-gray-900 hover:bg-[#5ec383]'><FaGithub/></div></a>
                <a href='mailto:mark.teodoro@eee.upd.edu.ph'><div id='main-button' className='rounded-full text-gray-300  shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-gray-900 hover:bg-[#5ec383]'><AiOutlineMail/></div></a>
            </div>
            </div>
            </div>
        </div>
        
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 text-gray-300'>Name</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2 text-gray-300'>Phone Number</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-gray-300'>Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 text-gray-300'>Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                    </div>
                    <div className='flex flex-col py-2 pb-5'>
                    <label className='uppercase text-sm py-2 text-gray-300'>Message</label>
                    <textarea className='pb-5 border-2 rounded-lg p-3 border-gray-300 mt-4' rows='12'></textarea>
                    </div>
                    <button className='w-full p-4 text-gray-100 hover:scale-105 ease-out duration-700'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-700 bg-[#5651e5] p-4 cursor-pointer hover:scale-110 hover:bg-[#60c985] ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30}/>
                </div>
            </Link>
        </div>
    </div>
    </div> 
  );
}

export default Contact