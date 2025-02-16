import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/Types";

const ProjectPage = async() => {
    const res=await fetch(`${process.env.SERVER_URL}/api/project`,{
        cache:"no-cache"
    });
    const projects=await res.json();
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[95%] mx-auto py-10">
            {
                projects.data.map((project:Project)=>{return <ProjectCard project={project} key={project._id}/>} )
            }
        </div>
    );
};

export default ProjectPage;