import React,{useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                        <Image src='/../public/assets/skills/html.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/css.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/javascript.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/react.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/tailwind.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/nextjs.png' alt="" width="60" height="60" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Next</h3>
                    </div>
                </div>
                </div>
                </div>
                <div data-aos='fade-up' data-aos-offset='270'>
                <div className='p-5 bg-[#111218] text-slate-100 shadow-slate-800 shadow-xl rounded-xl hover:text-orange-600 hover:scale-105 ease-out duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/firebase.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/figma.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/python3.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/c.png' alt="" width="60" height="60" />
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
                        <Image src='/../public/assets/skills/cpp.png' alt="" width="60" height="60" />
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