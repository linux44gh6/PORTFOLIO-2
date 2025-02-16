import { Project } from "@/Types";
import Image from "next/image";
import { Button } from "./button";

const ProjectCard = ({ project }: { project: Project }) => {
    console.log(project);
    return (
        <div>
            <div className=" shadow-xl p-4">
                <div className="flex gap-5 flex-col lg:flex-row">
                    <Image
                        src={project.image}
                        className="max-w-sm rounded-lg shadow-2xl" alt="project-img" width={400} height={200} />
                    <div>
                        <h1 className="text-3xl font-bold">{project.title}</h1>
                        <p className="text-gray-400 mt-2 text-left ">
                            {project.description.length > 100
                                ? project.description.slice(0, 90) + "..."
                                : project.description}
                        </p>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;