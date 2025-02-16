import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
const ProjectPage = () => {
    return (
       <section id='project-section '>
         <div className='  h-[120vh] bg-gradient-to-r from-color3 to-color4 p-4'>
            <h1 className='text-center  text-5xl font-font1  bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text font-extrabold'>My Recent Projects</h1>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5 mt-10'>
         <Link href='https://tourist-guide-2db3b.web.app' target='_blank'>
         <div className=' transition duration-300 group relative'>
      <Image className='rounded-lg' src="/project-1.jpg" alt="Project" width={700} height={600} />
      <div className='absolute inset-0  flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg '>
       <div className=' bg-gradient-to-r from-color1 to-color4 w-full p-4 flex items-center justify-between'>
       <h1 className='text-white text-2xl font-font1 font-bold duration-500'>GlobeGazzer</h1>
       <MdArrowOutward className=' text-4xl text-yellow-50'></MdArrowOutward>
       </div>
      </div>
    </div>
          </Link>
         <Link href='https://study-hub-ec69a.web.app' target='_blank'>
         <div className=' transition duration-300 group relative'>
      <Image className='rounded-lg' src="/project-2.jpg" alt="Project" width={700} height={600} />
      <div className='absolute inset-0  flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg '>
       <div className=' bg-gradient-to-r from-color1 to-color4 w-full p-4 flex items-center justify-between'>
       <h1 className='text-white text-2xl font-font1 font-bold duration-500'>Study Hub</h1>
       <MdArrowOutward className=' text-4xl text-yellow-50'></MdArrowOutward>
       </div>
      </div>
    </div>
          </Link>
         <Link href='https://bistro-boss-df988.web.app' target='_blank'>
         <div className=' transition duration-300 group relative'>
      <Image className='rounded-lg' src="/project-3.jpg" alt="Project" width={700} height={600} />
      <div className='absolute inset-0  flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg '>
       <div className=' bg-gradient-to-r from-color1 to-color4 w-full p-4 flex items-center justify-between'>
       <h1 className='text-white text-2xl font-font1 font-bold duration-500'>Birsto BOSS</h1>
       <MdArrowOutward className=' text-4xl text-yellow-50'></MdArrowOutward>
       </div>
      </div>
    </div>
          </Link>
          </div>
        </div>
       </section>
    );
};

export default ProjectPage;