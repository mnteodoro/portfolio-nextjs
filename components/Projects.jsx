import React,{useEffect} from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import ProjectItem from './ProjectItem'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import spotifyImg from '../public/assets/projects/twitch.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="projects" className='w-full h-full p-2'>
        <div data-aos="fade-down" data-aos-duration='1200' className='max-w-[1240px] mx-auto py-16 px-5'>
        <p className="text-[#5651e5] uppercase px-2 py-1 text-l tracking-widest" data-aos='fade-right' data-aos-offset='250'>Projects</p>
        <h2 className="py-4 text-gray-300" data-aos='fade-right' data-aos-offset='250'>What I Have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <div data-aos='flip-down' data-aos-duration='400' data-aos-offset='400' ><ProjectItem title='Hotel Booking App' backgroundImg={propertyImg} projectUrl='property'/></div>
        <div data-aos='flip-down' data-aos-duration='400' data-aos-offset='400' ><ProjectItem title='Netflix Website Clone' backgroundImg={netflixImg} projectUrl='netflix'/></div>
        <div data-aos='flip-down' data-aos-duration='400' data-aos-offset='400' ><ProjectItem title='Twitch Website UI' backgroundImg={twitchImg} projectUrl='twitch'/></div>
        <div data-aos='flip-down' data-aos-duration='400' data-aos-offset='400' ><ProjectItem title='Music Streaming App' backgroundImg={spotifyImg} projectUrl='music'/></div>
        </div>
        </div>
    </div>
  )
}

export default Projects