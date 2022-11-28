
import React, {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const ProjectItem = ({title,backgroundImg, projectUrl}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='relative flex items-center justify-center w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:scale-105 duration-500 grayscale hover:grayscale-0'>
                <div><Image className="rounded-xl group-hover:opacity-70 group-hover:brightness-70 duration-300" src={backgroundImg} alt="/" /></div>
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React JS </p>
                    <Link href={projectUrl}>
                        <p className='text-center p-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
  )
}

export default ProjectItem