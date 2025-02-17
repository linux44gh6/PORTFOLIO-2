import ProjectDetailsCard from "@/components/ui/ProjectDetailsCard";

const singleProject =async ({params}:{params:Promise<{projectId:string}>}) => {
    const {projectId} = await params
    const res=await fetch(`http://localhost:5000/api/project/${projectId}`,{cache:'no-store'})
    const project=await res.json()
    console.log(project);
    return (
        <div className='min-h-screen'>
            <ProjectDetailsCard project={project.data}/>
        </div>
    );
};

export default singleProject;