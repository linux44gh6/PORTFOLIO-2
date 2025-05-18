'use server'
import { Project } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaGithub, FaGlobe } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const ProjectDetailsCard = ({ project }: { project: Project }) => {
  console.log(project);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Project Header */}
        <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="flex items-center justify-center mb-4">
            <FaCalendar className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{project.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-white/10 rounded-full">
              <FiUser className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold">{project.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Project Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.image}
              width={1200}
              height={630}
              alt={project.title}
              className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-8 text-gray-600">
            <p className=" text-gray-500 font-semibold leading-10">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href={project.live_link}
              target="_blank"
              className="p-6 bg-white border-2 border-purple-100 rounded-xl hover:border-purple-200 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaGlobe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Live Demo</h4>
                  <p className="text-gray-500 text-sm mt-1 truncate">{project.live_link}</p>
                </div>
              </div>
            </Link>

            <Link 
              href={project.github_link}
              target="_blank"
              className="p-6 bg-white border-2 border-purple-100 rounded-xl hover:border-purple-200 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaGithub className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">GitHub Repository</h4>
                  <p className="text-gray-500 text-sm mt-1 truncate">{project.github_link}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;