 'use client'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';
const LoginPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen border-2 '>
            <div className=''>
                <Image src={'/LoginImage.jpg'} alt='Login Image' width={600} height={100}/>
            </div>
            
           <div className='flex items-center flex-col  justify-center '>
           <form>
               <div className='flex flex-col justify-center items-center gap-4'>
              
               <div>
               <label htmlFor="">Your Email</label>
               <input
                    type="Text"
                    placeholder="Type here"
                    className="input input-bordered input-primary   w-full" />
               </div>
               <div>
               <label htmlFor="">Password</label>
               <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered input-primary   w-full" />
               </div>
               <button className='btn bg-color1 text-white w-full'>Login</button>
               <div className="divider">OR</div>
               </div>
            </form>
            <div className='flex justify-center gap-5'>
                        <button onClick={()=>signIn('google',{
                            callbackUrl:"http://localhost:3000"
                        })} className='w-full'><FcGoogle className='text-4xl'></FcGoogle></button>
                        <button onClick={()=>signIn("github",{
              callbackUrl:"http://localhost:3000"
            })} className='  w-full'><FaGithub className='text-4xl'></FaGithub></button>
                    </div>
           </div>
        </div>
    );
};

export default LoginPage;