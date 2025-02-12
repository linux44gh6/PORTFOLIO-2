"use client"
import Link from 'next/link';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';
const BannerPage = () => {

    return (
        <div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center'>
            <div className=''>
                <h1 className=' text-yellow-50 text-5xl font-extrabold font-font1'>I am Milon</h1>
                <h1 className='text-3xl lg:text-8xl font-extrabold font-font1 bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text'>Web Developer </h1>
                <p className=' w-full md:w-[500px] lg:w-[500px] text-yellow-50 text-xl mt-4 mb-10'>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center'>
                   <a href="https://drive.google.com/file/d/1sLPyA6rkMf-8Si5eJMgEpCvw7xv3rE3c/view" download='download.pdf' target='blank'>
                   <button className='btn rounded-full border border-color1 text-color1 bg-color2 hover:text-yellow-50 hover:bg-color1'>Download Resume <span className='text-xl'><MdOutlineFileDownload></MdOutlineFileDownload></span></button>
                   </a>
                    <div className='flex gap-2'>
                    
                   <Link className=' border border-color1 text-color1 hover:bg-color1 hover:text-yellow-50 transition duration-300 p-3 rounded-full' href={'https://web.facebook.com/MilonHossain32'} target='_blank'>
                   <FaFacebookF></FaFacebookF></Link>
                   <Link className=' border border-color1 text-color1 hover:bg-color1 hover:text-yellow-50 transition duration-300 p-3 rounded-full' href={'https://www.linkedin.com/in/mdmilonhossain32'} target='_blank'>
                   <FaLinkedinIn></FaLinkedinIn></Link>
                   <Link className=' border border-color1 text-color1 hover:bg-color1 hover:text-yellow-50 transition duration-300 p-3 rounded-full' href={''}>
                   <FaDribbble></FaDribbble></Link>
                   <Link className=' border border-color1 text-color1 hover:bg-color1 hover:text-yellow-50 transition duration-300 p-3 rounded-full' href={'https://github.com/linux44gh6'} target='_blank'>
                   <FaGithub></FaGithub></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-2 border-color4 hover:border-color1 rounded-lg lg:rotate-3 hover:rotate-0 transition-all duration-300'>
                    
                    <img className='bg-black w-[400px] rounded-lg ' src="https://i.ibb.co/rxtT0Nz/tinywow-change-bg-photo-59253256.png" alt="Imge not found" />
                </div>
            </div>
           
        </div>
        
             
               <div className='text-white flex flex-col md:flex-row justify-center lg:flex-row lg:justify-around gap-4 lg:gap-0 mt-10'>
               <h1 className='flex items-center gap-2  font-font1'><span className='text-5xl font-extrabold'>{ <CountUp start={0} end={1}></CountUp>}</span> <span className='text-xl'>Years of
                    <br />
                Experience</span></h1>
                <h1 className='flex items-center gap-2  font-font1'> <span className='text-5xl font-extrabold'>{ <CountUp start={0} end={50}></CountUp>}+</span><span className='text-xl'>Project <br />
                Completed</span></h1>
                <h1 className='flex items-center gap-2  font-font1'> <span className='text-5xl font-extrabold'>{ <CountUp start={0} end={50}></CountUp>}+</span><span className='text-xl'>Happy <br />
                Clients</span></h1>
                <h1 className='flex items-center gap-2  font-font1 '> <span className='text-5xl font-extrabold'>{<CountUp start={0} end={3}></CountUp>}</span><span className='text-xl'> Years of <br /> Educational  Experience</span></h1>
                </div>

          
        </div>
    );
};

export default BannerPage;