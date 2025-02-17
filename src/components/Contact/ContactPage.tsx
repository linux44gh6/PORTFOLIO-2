'use client'
import { createContact } from "@/actions/contact";
import Form from "next/form";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const ContactPage = () => {

    return (
       <section id='contact-section'>
             <div className=' flex flex-col lg:flex-row bg-black w-full gap-5 p-10'>
            <div className="hero  min-h-screen w-full md:w-[700px] lg:w-[700px] bg-color3 rounded-2xl ">
                <div className="hero-content flex-col pe-20 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text">Let’s work together!</h1>
                        <p className="py-6 text-yellow-50">
                        I design and code beautifully simple things and i love what i do. Just simple like that!
                        </p>
                    </div>
                    <div className="  w-full  shrink-0 shadow-2xl">
                        <Form action={createContact} className=" space-y-10">
                            <div className=' flex flex-col lg:flex-row gap-4'>
                                <div className="form-control">
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered lg:pe-20 bg-black bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered lg:pe-20 bg-black bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                            </div>
                            <div className=' flex  flex-col lg:flex-row gap-4'>
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered lg:pe-20 bg-black bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                                <div className="form-control">
                                    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered lg:pe-20 bg-black bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                            </div>
                            <div>
                                <select name="service" className="select select-bordered w-full bg-black bordered hover:border-color1 transition hover:shadow-lg text-yellow-50 " defaultValue=""> 
                                    <option value="" disabled>-choose-</option>
                                    <option value="web development">web development</option>
                                </select>
                            </div>
                            <div className="form-control bg-black">
                                <textarea name="message" className="textarea bg-black bordered hover:border-color1 transition hover:shadow-lg" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn w-[200px] rounded-full bg-gradient-to-r from-color1 text-yellow-50 to-color4 text-lg">Send Message</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <h1 className=' text-5xl bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text font-font1 font-extrabold mb-4'>Contact Info</h1>
                <div className='flex items-center gap-4 mb-5'>
                    <span className=' bg-gradient-to-t from-color4 to-color3 rounded-full lg:p-3'>
                        <FiPhoneCall className='lg:text-5xl text-white'></FiPhoneCall>
                    </span>
                    <span>
                        <h1 className=' text-2xl lg:text-4xl font-font1 font-bold text-yellow-50'>Phone</h1>
                        <h1 className=' text-yellow-50 text-lg'>01781613674</h1>
                    </span>
                </div>
                <div className='flex items-center gap-4 mb-5'>
                    <span className=' bg-gradient-to-t from-color4 to-color3 rounded-full lg:p-3'>
                        <MdOutlineMailOutline className='lg:text-5xl text-white'></MdOutlineMailOutline>
                    </span>
                    <span>
                        <h1 className=' text-4xl font-font1 font-bold text-yellow-50'>Email</h1>
                        <h1 className=' text-yellow-50 text-lg'>abireshan32@gmail.com</h1>
                    </span>
                </div>
                <div className='flex items-center gap-4'>
                    <span className=' bg-gradient-to-t from-color4 to-color3 rounded-full lg:p-3'>
                       <MdLocationPin className='lg:text-5xl text-white'></MdLocationPin>
                    </span>
                    <span>
                        <h1 className=' text-4xl font-font1 font-bold text-yellow-50'>Address</h1>
                        <h1 className=' text-yellow-50 text-lg'>Chaybithi,Basabo,Dhaka</h1>
                    </span>
                </div>
            </div>
        </div>
       </section>
    );
};

export default ContactPage;
