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
            <div data-aos='fade-left' data-aos-duration='700' className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-400'>
                        Let us build something amazing!
                    </p>
                    <h1 className='py-4 text-gray-300'> Hi, I am <span className='text-[#5651e5]'>Mark</span></h1>
                    <h1 className='py-2 text-slate-400'>A <span className='text-[#60c985]'>Front-End </span>Web Developer</h1>
                    <p className='py-4 text-slate-200 max-w-[70%] m-auto'>I am a graduating <span className='font-semibold text-[#60c985]'>BS Computer Engineering</span> student at the 
                    <span className='font-semibold text-[#69c985]'> University of the Philippines Diliman</span>, and an aspiring front-end web developer. Currently, I am focused on building responsive front-end web applications while learning back-end technologies</p>
                <div className='flex gap-8 justify-center items-center max-w-[330px] m-auto py-4'>
                <a href='https://www.linkedin.com/in/mark-emmanuel-teodoro-a4b5b523a/'><div id='main-button' className='rounded-full text-gray-300 shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-200 hover:text-gray-900 hover:bg-[#5ec383]'><FaLinkedinIn/></div></a>
                <a href='https://github.com/markteodoro08' ><div id='main-button' className='rounded-full text-gray-300  shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-200 hover:text-gray-900 hover:bg-[#5ec383]'><FaGithub/></div></a>
                <a href='mailto:mark.teodoro@eee.upd.edu.ph'><div id='main-button' className='rounded-full text-gray-300  shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-105 ease-in duration-200 hover:text-gray-900 hover:bg-[#5ec383]'><AiOutlineMail/></div></a>
                </div>

                <div className='shadow-gray-400 flex justify-center items-center p-4 cursor-pointer hover:scale-110 ease-in duration-300 pt-5'>
                <a href='https://drive.google.com/drive/folders/14lzxyWCM-RLFbfWsa5sg3a-QCovVoG_y?usp=share_link'><p className='rounded-xl bg-[#5651e5] px-4 pt-2 pb-2 text-gray-900 hover:text-[#5651e5] hover:bg-gray-800 duration-300'>Download Resume</p></a>
                </div>

                </div>

                       
                </div>
                
            </div>
            
    ) 
}

export default Main;
