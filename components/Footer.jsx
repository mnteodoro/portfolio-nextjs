import React,{useEffect} from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos='zoom-in-down' data-aos-offset='300' className='text-center pt-8'>
            <p className='text-gray-200'>Designed and built by <span className='text-[#5651e5]'>Mark Teodoro</span></p>
        </div>
            
    ) 
}

export default Footer;
