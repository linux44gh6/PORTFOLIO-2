
import CardComponent from "@/components/Card";
import { Project } from "@/Types";

const ProjectPage = async() => {
    const res=await fetch(`${process.env.SERVER_URL}/api/project`,{
        cache:"no-cache"
    });
    const projects=await res.json();
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-10 mx-auto py-1 bg-color2">
            {
                projects.data.map((project:Project)=>{return<CardComponent project={project} key={project._id}/>} )
            }
        </div>
    );
};

export default ProjectPage;