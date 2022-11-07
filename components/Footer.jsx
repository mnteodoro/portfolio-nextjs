import React,{useEffect} from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Main = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id="home" className='w-full h-screen text-center bg-[#131628]'>

            </div>
            
    ) 
}

export default Main;
