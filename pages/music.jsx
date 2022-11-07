import React from 'react'
import Image from 'next/image'
import spotifyImg from '../public/assets/projects/twitch.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const music = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
                <Image className='absolute z-1' layout='fill' objectFit='cover' alt='/' src={spotifyImg}></Image>
                <div className='absolute top-[70%] right-[50%] left-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-4 z-10 text-white'>
                    <h2 className='py-2 text-[#60c985]'>
                        Music Streaming Website
                    </h2>
                    <h3>React | Tailwind | Firebase</h3>
                    <div className='flex pt-6 gap-5'> 
                        <Image src='/../public/assets/skills/tailwind.png' alt='/' height='30' width='30'></Image>
                        <Image src='/../public/assets/skills/spotify.png' alt='/' height='30' width='30'></Image>
                        <Image src='/../public/assets/skills/react.png' alt='/' height='30' width='30'></Image>
                        <Image src='/../public/assets/skills/firebase.png' alt='/' height='30' width='30'></Image>
                    </div>
                </div>
            </div>
        <div className='max-w-[1240px] mx-auto grid p-2 md:grid-cols-5 gap-8 pt-8'>
        <div className="col-span-4">
            <p className="text-white">Project</p>
            <h2 className='pb-5 pt-2 text-gray-400'>Overview</h2>
            <p className="text-gray-100 pb-5">
                This app was built using React and is hosted on Firebase. Users are able
                to search properties based on an Address, City, or ZIP code 
                to retrieve a list of active properties currently for sale. You will 
                be able to view property information as well as the specific location of 
                the property integrated with the Google Maps API. User authentication 
                is available so you can sign up and sign in to your account with an email address 
                in order to save your favorite properties. This is made possible with Zillow API.
            </p>
        <button className='px-8 py-2 mt-4 mr-8 font-semibold hover:scale-105 duration-300'>Website</button>
        <button className='px-8 py-2 mt-4 font-semibold text-gray-800 hover:scale-105 duration-300'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 rounded-xl shadow-xl shadow-gray-800'>
            <div className='p-2'>
                <p className='text-center font-bold pb-2 text-[#60c985]'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1 pl-2'>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>React</span></p>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>Tailwind</span></p>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>JavaScript</span></p>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>Firebase</span></p>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>Google API</span></p>
                    <p className='text-[#5651e5] py-2 flex items-center'><RiRadioButtonFill className='pr-2'/><span className='text-gray-300'>Zillow API</span></p>
                
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer text-gray-300'>Back</p>
        </Link>
        </div>

        </div>
    );
}

export default music