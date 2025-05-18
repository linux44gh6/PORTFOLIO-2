import { Blog } from "@/Types";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-md rounded-xl overflow-hidden mb-10">
      {/* Banner Image */}
      <div className="w-full h-72 relative">
        <Image
          src={blog.image}
          alt="Blog banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 sm:p-10">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center leading-tight">
          {blog.title}
        </h1>

        {/* Author and Meta */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 mb-6 text-sm">
          <div className="flex items-center space-x-2">
            <MdPerson className="text-lg" />
            <span>{blog.name}</span>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <FaCalendar className="text-md" />
            <span>{blog.date}</span>
          </div>
        </div>

        {/* Blog Description */}
        <div className="prose max-w-none prose-lg text-gray-700 leading-relaxed">
          <p>{blog.description}</p>
        </div>

        {/* Likes */}
        <div className="mt-10 flex items-center space-x-2 text-teal-600 text-lg font-medium">
          <AiFillLike />
          <span>{blog.likes} Likes</span>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailsCard;
