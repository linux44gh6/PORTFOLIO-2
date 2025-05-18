"use client"
import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import {motion} from 'framer-motion'
import { AnimatedText, AnimatedTextSide, AnimatedTextSideRight } from '../Animation';
const ResumePage = () => {
    return (
        < motion.section
            initial={{ opacity: 0 }}
            viewport={{ once: true,amount:0.2 }}
            animate={{ opacity: 1 }}
            transition={({duration:2})}
        id='education-section'>
            <div className=' bg-color3 mt-0  pb-16'>
           <AnimatedText>
           <h1
            className='text-center text-2xl  lg:text-5xl font-font1 font-extrabold text-yellow-50 ; pt-20 lg:pt-10'><span className='bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text'>Education</span> & <span className='bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text'>Experience</span></h1>
           </AnimatedText>

            <div className='flex flex-col lg:flex-row justify-between px-10 mt-10'>
                <div className=' border-noe lg:border-r md:border-r pe-0 lg:pe-3 md:pe-3'>
                    <AnimatedTextSide
                    duration={4}
                    
                    >
                    <h1 className=' text-yellow-50 text-3xl md:text-5xl lg:text-5xl font-font1 flex gap-2'><FaGraduationCap className=' text-color1'></FaGraduationCap>Education</h1>
                    </AnimatedTextSide>
                    <div className=' mt-5 space-y-1'>
                        <AnimatedTextSide
                        
                        duration={5}>
                        <h1 className=' text-xl lg:text-3xl md:text-3xl text-color1 font-font1'>Bachelor of Computer Science</h1>
                        </AnimatedTextSide>
                        <AnimatedTextSide
                      
                        duration={6}>
                        <h1 className='text-yellow-50'>2021-2026</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>Dhaka International university</h1>
                        <p className=' text-yellow-50'>I am studing at Dhaka International university department of computer science & Engineering.My Graduation will complete estamit 2026</p>
                        </AnimatedTextSide>
                    </div>
                   <AnimatedTextSide
                
                   duration={7}>
                   <div className=' mt-5 space-y-1'>
                       
                        <h1 className='text-yellow-50'>2017-2019</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>N.S Govt collage,Natore</h1>
                        <p className=' text-yellow-50'>I  completed my Higher secondery at N.S govt collage natore.My department was secience</p>
                    </div>
                   </AnimatedTextSide>
                   <AnimatedTextSide
                  
                   duration={8}>
                   <div className=' mt-5 space-y-1'>
                        <h1 className=' text-xl lg:text-3xl md:text-3xl text-color1 font-font1'>Secondary</h1>
                        <h1 className='text-yellow-50'>2015-2017</h1>
                        <h1 className='text-2xl text-yellow-50 font-font1'>Austomonisha High school</h1>
                        <p className=' text-yellow-50'>I  completed my Higher secondery at Austomonisha high school,pabna.My department was secience</p>
                    </div>
                   </AnimatedTextSide>
                </div>
                
                <div className=' ps-4'>
                   <AnimatedTextSideRight duration={3}>
                   <h1 className=' text-yellow-50 text-2xl lg:text-5xl font-font1 flex gap-2 mt-10 md:mt-1 lg:mt-1'><span><SlBadge className=' text-color1'></SlBadge></span>Experience</h1>
                   </AnimatedTextSideRight>
                   <AnimatedTextSideRight duration={5}>
                   <div className=' mt-5'>
                        <h1 className=' text-xl lg:text-3xl md:text-3xl text-color1 font-font1'>web development</h1>
                        <h1 className=' text-yellow-50'>2024</h1>
                        <p className=' text-yellow-50'>Its my learning experince.I complete my web developmet from programing hero.During my learning I was develop some several projects</p>
                    </div>
                   </AnimatedTextSideRight>
                </div>
            </div>
        </div>
        </motion.section>
    );
};

export default ResumePage;