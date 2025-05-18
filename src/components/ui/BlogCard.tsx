'use client'
import { Blog } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import {motion} from "framer-motion"
const BlogCard = ({ blog }: { blog:Blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{scale:.95}}
      transition={{ duration: 0.5 }}
      animate={
        {
          cursor:["pointer"]
        }
      }
    
    className="w-full bg-color3 shadow-md rounded-2xl overflow-hidden ">
      <figure>
        <Image
          src={blog.image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        
        <h2 className="text-xl font-bold mt-4 text-left">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-400 mt-2 text-left text-2xl">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          <Link href={`/blog/${blog._id}`} className="text-color1 ml-1">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                width={100}
                height={100}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-500">
              {blog.name}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <AiFillLike className="text-color1 text-xl mr-1" />
            {blog.likes} Likes
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
