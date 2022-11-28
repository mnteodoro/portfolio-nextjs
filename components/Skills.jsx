import React,{useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import firebaseImg from '/public/assets/skills/firebase.png';
import htmlImg from '/public/assets/skills/html.png';
import cssImg from '/public/assets/skills/css.png';
import jsImg from '/public/assets/skills/javascript.png';
import reactImg from '/public/assets/skills/react.png';
import tailwindImg from '/public/assets/skills/tailwind.png';
import githubImg from '/public/assets/skills/github1.png';
import figmaImg from '/public/assets/skills/figma.png';
import pythonImg from '/public/assets/skills/python3.png';
import cppImg from '/public/assets/skills/cpp.png';
import cImg from '/public/assets/skills/c.png';

const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id='skills' className='bg-[#131628] w-full lg:h-screen sm:h-full md:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-screen px-5'>
            <p className='text-[#5651e5] uppercase px-2 py-1 text-l tracking-widest' data-aos='fade-right' data-aos-offset='250'>Skills</p>
            <h2 className='py-4 text-gray-100 pb-1' data-aos='fade-right' data-aos-offset='250'>What I Can Do</h2>
            <p className='text-gray-300 pt-8 pb-5' data-aos='fade-right' data-aos-offset='270'>Web Development</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-7 pb-2'>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-orange-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={htmlImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='shadow-slate-800 p-5 bg-[#111218] text-slate-100 shadow-xl rounded-xl hover:text-blue-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={cssImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 shadow-slate-800 bg-[#111218] text-slate-100 shadow-xl rounded-xl hover:text-amber-400 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={jsImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 shadow-slate-800 bg-[#111218] text-slate-100  shadow-xl rounded-xl hover:text-sky-500 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={reactImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 shadow-slate-800 bg-[#111218] text-slate-100 shadow-xl rounded-xl hover:text-cyan-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={tailwindImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 shadow-slate-800 bg-[#111218] text-slate-100 shadow-xl rounded-xl hover:text-pink-900 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={githubImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GitHub</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-orange-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={firebaseImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Firebase</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-violet-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                    <Image src={figmaImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Figma</h3>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <p className='text-gray-300 pt-8 pb-5' data-aos='fade-right' data-aos-offset='270'>Programming Languages</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-3'>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-amber-300 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={pythonImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Python</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-blue-700 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={cImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-violet-300 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={cppImg} alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C++</h3>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
  )
}

export default Skills