import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
const About = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id="about" className="scroll-smooth w-full md:h-screen sm:h-full lg:h-full pt-10 p-2 flex items-center py-8 bg-[#131628]">
            <div className="max-w-[1240px] h-75% m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2 px-5">
                    <div>
                    <p className="text-[#5651e5] uppercase px-2 py-1 text-l tracking-widest" data-aos='fade-right' data-aos-offset='250'>About</p>
                    </div>
                    <div>
                    <h2 className="py-4 text-gray-300" data-aos='fade-right' data-aos-offset='300'>Who I am</h2>
                    <div className="pt-3" data-aos='fade-left' data-aos-offset='400'>
                        <p className="py-1 text-gray-100">I am <span className='text-[#60c985]'>Mark Emmanuel Teodoro</span>, a 4th Year, graduating student from the University of the Philippines Diliman taking up a BS in Computer Engineering. I have always been into technology and love working with computers. 
                        </p>
                        <p className="text-gray-100 pt-4 pb-5">In 2020, I started exploring HTML and CSS, and that simple exploration turned into a passion for programming. I then started learning javascript and was even more enthused with making websites interactive. I am now spending my time studying and building projects with React JS, Firebase, and other new technologies.</p>
                    
                    </div>
                    </div>
                    <p id="about-proj" className="py-2 text-gray-300 cursor-pointer" data-aos='fade-right' data-aos-offset='250'>Check out some of my latest projects.</p>
                    </div>
                    <div data-aos='fade-left' data-aos-offset='300'>
                    <div className="w-full h-auto m-auto shadow-xl bg-gray-900 shadow-gray-800  rounded-xl  flex items-center justify-center px-5 py-4 ease-in duration-200 hover:scale-105">
                        <Image alt='/' width='400' height='400' className="rounded-l" src="/../public/assets/my-pic.jpg"></Image>
                    </div>
                    </div>
                </div>
            </div>
    );
} 

export default About;