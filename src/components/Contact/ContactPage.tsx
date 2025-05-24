'use client'
import { createContact } from "@/services/actions/contact";
import Form from "next/form";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";

const ContactPage = () => {
    return (
        <section id='contact-section'>
            <div className='flex flex-col lg:flex-row  w-full md:w-[80%] lg:w-[80%] mx-auto min-h-screen gap-5  rounded-xl'>
                {/* Form Section */}
                <div className="hero min-h-screen w-full md:w-[700px] lg:w-[700px] bg-color3 rounded-2xl">
                    <div className="hero-content flex-col pe-20">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text">Let’s work together!</h1>
                            <p className="py-4 text-base text-yellow-50">
                                I design and code beautifully simple things and I love what I do. Just simple like that!
                            </p>
                        </div>
                        <div className="w-full shrink-0 shadow-2xl">
                            <Form action={createContact} className="space-y-8">
                                <div className='flex flex-col lg:flex-row gap-4'>
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered bg-black text-base bordered hover:border-color1 transition hover:shadow-lg" required />
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered bg-black text-base bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                                <div className='flex flex-col lg:flex-row gap-4'>
                                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered bg-black text-base bordered hover:border-color1 transition hover:shadow-lg" required />
                                    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered bg-black text-base bordered hover:border-color1 transition hover:shadow-lg" required />
                                </div>
                                <select name="service" className="select select-bordered w-full bg-black text-base text-yellow-50 bordered hover:border-color1 transition hover:shadow-lg" defaultValue="">
                                    <option value="" disabled>-choose-</option>
                                    <option value="web development">Web Development</option>
                                </select>
                                <textarea name="message" className="textarea bg-black text-base bordered hover:border-color1 transition hover:shadow-lg w-full" placeholder="Message"></textarea>
                                <div className="form-control mt-4">
                                    <button type="submit" className="btn w-[200px] rounded-full bg-gradient-to-r from-color1 to-color4 text-yellow-50 text-lg">Send Message</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className='w-full'>
                    <h1 className='text-3xl bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text font-bold mb-6'>Contact Info</h1>
                    <div className='flex items-center gap-4 mb-5'>
                        <span className='bg-gradient-to-t from-color4 to-color3 rounded-full p-3'>
                            <FiPhoneCall className='text-3xl text-white' />
                        </span>
                        <div>
                            <h2 className='text-2xl font-bold text-yellow-50'>Phone</h2>
                            <p className='text-base text-yellow-50'>01781613674</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-5'>
                        <span className='bg-gradient-to-t from-color4 to-color3 rounded-full p-3'>
                            <MdOutlineMailOutline className='text-3xl text-white' />
                        </span>
                        <div>
                            <h2 className='text-2xl font-bold text-yellow-50'>Email</h2>
                            <p className='text-base text-yellow-50'>abireshan32@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <span className='bg-gradient-to-t from-color4 to-color3 rounded-full p-3'>
                            <MdLocationPin className='text-3xl text-white' />
                        </span>
                        <div>
                            <h2 className='text-2xl font-bold text-yellow-50'>Address</h2>
                            <p className='text-base text-yellow-50'>Chaybithi, Basabo, Dhaka</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
