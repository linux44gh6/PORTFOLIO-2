import React from 'react';

const FooterPage = () => {
    return (
        <div className='bg-gradient-to-r from-color3 to-color4'>
            <div className=' flex justify-center'>
                <img className='w-32' src="logo.png" alt="" />
            </div>
           <div>
           <ul className=' flex flex-col md:flex-row lg:flex-row items-center gap-4 text-yellow-50 text-xl font-font1 font-semibold justify-center'>
                <li>Service</li>
                <li>Work</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Blog</li>
            </ul>
           </div>
            <p className=' text-color1 text-center'>© 2024 All Rights Reserved by MilonHossain</p>
        </div>
    );
};

export default FooterPage;