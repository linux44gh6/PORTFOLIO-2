import BannerPage from "@/components/Banner/Banner";
import ProjectPage from "@/components/projects/Project";
import ResumePage from "@/components/resume/Resume";
import SkillPage from "@/components/skills/skillsPage";
export default function Home() {
  return (
    <div className="">
      <BannerPage/>
      <SkillPage/>
      <ProjectPage/>
      <ResumePage/>
    </div>
  );
}
