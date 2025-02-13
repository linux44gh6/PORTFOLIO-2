import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
const ResumePage = () => {
    return (
        <section id='education-section'>
            <div className=' bg-color3 mt-0 lg:mt-20 pb-16'>
            <h1 className='text-center text-2xl  lg:text-5xl font-font1 font-extrabold text-yellow-50 ; pt-20 lg:pt-10'><span className='bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text'>Education</span> & <span className='bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text'>Experience</span></h1>

            <div className='flex flex-col lg:flex-row justify-between px-10 mt-10'>
                <div className=' border-r pe-3'>
                    <h1 className=' text-yellow-50 text-5xl font-font1 flex gap-2'><FaGraduationCap className=' text-color1'></FaGraduationCap>Education</h1>
                    <div className=' mt-5 space-y-1'>
                        <h1 className=' text-3xl text-color1 font-font1'>Bachelor of Computer Science</h1>
                        <h1 className='text-yellow-50'>2021-2026</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>Dhaka International university</h1>
                        <p className=' text-yellow-50'>I am studing at Dhaka International university department of computer science & Engineering.My Graduation will complete estamit 2026</p>
                    </div>
                    <div className=' mt-5 space-y-1'>
                        <h1 className=' text-3xl text-color1 font-font1'>Higher secondery </h1>
                        <h1 className='text-yellow-50'>2017-2019</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>N.S Govt collage,Natore</h1>
                        <p className=' text-yellow-50'>I  completed my Higher secondery at N.S govt collage natore.My department was secience</p>
                    </div>
                    <div className=' mt-5 space-y-1'>
                        <h1 className=' text-3xl text-color1 font-font1'>Secondary</h1>
                        <h1 className='text-yellow-50'>2015-2017</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>Austomonisha High school</h1>
                        <p className=' text-yellow-50'>I  completed my Higher secondery at Austomonisha high school,pabna.My department was secience</p>
                    </div>
                </div>
                
                <div className=' ps-4'>
                    <h1 className=' text-yellow-50 text-2xl lg:text-5xl font-font1 flex gap-2'><span><SlBadge className=' text-color1'></SlBadge></span>Experience</h1>

                    <div className=' mt-5'>
                        <h1 className=' text-3xl text-color1 font-font1'>web development</h1>
                        <h1 className=' text-yellow-50'>2024</h1>
                        <p className=' text-yellow-50'>Its my learning experince.I complete my web developmet from programing hero.During my learning I was develop some several projects</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ResumePage;