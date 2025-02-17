import { Project } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
const ProjectDetailsCard = ({project}:{project:Project}) => {
    return (
        <div>
             <div className="w-2/3 bg-white shadow-lg rounded-lg mx-auto p-6">
                  <p className="flex items-center justify-center mx-auto text-color4 bg-purple-200 w-fit px-3 py-1 rounded-full">
                    <FaCalendar className="mr-2" />
                    {project.date}
                  </p>
                  <h2 className="text-center text-4xl font-semibold my-5">{project.title}</h2>
                  <div className="flex items-center justify-center bg-gray-100 mb-5 py-2 rounded-lg gap-2">
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                      width={30}
                      height={30}
                      alt="author image"
                    />
            
                    <span className="text-lg font-medium">{project.title}</span>
                  </div>
                  <figure className="mb-5">
                    <Image
                      src={project.image}
                      width={600}
                      height={100}
                      alt="blog image"
                      className="rounded-lg w-full object-cover"
                    />
                  </figure>
                  <div className="text-gray-700 text-lg leading-relaxed">
                    <p className="text-justify text-gray-500">{project.description}</p>
                  </div>
                  <div className="flex justify-between  mt-5">
                    <div className="flex flex-col text-xl text-gray-600">
                     <span>Live-Link-<Link className="hover:underline text-color1" href={project.github_link}>{project.github_link}</Link></span>
                     <span>GitHub-Link-<Link className="hover:underline text-color1" href={project.live_link}>{project.live_link}</Link></span>

                    </div>
                  </div>
                </div>
        </div>
    );
};

export default ProjectDetailsCard;