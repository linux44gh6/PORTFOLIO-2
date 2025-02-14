"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const skills = [
  { name: "JavaScript", src: "/js.png" },
  { name: "React.js", src: "/react.png" },
  { name: "Next.js", src: "/next.svg" },
  { name: "MongoDB", src: "/mongo.png" },
  { name: "HTML", src: "/Html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "Tailwind CSS", src: "/tailwinds.png" },
];

const SkillPage = () => {
  return (
    <section id="skill-section" className="bg-color3 py-5 ">
      <h1 className="text-center text-5xl pt-10 font-font1 font-extrabold bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text">
        My Skills
      </h1>
      <div className="px-10 flex flex-wrap gap-16 mt-8">
        {/* First Marquee */}
        <Marquee direction="right">
          <div className="flex gap-10 mt-3">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="w-32 h-32 border-2 rounded-[10px] hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4">
                  <Image src={skill.src} alt={skill.name} width={100} height={100} />
                </div>
                <p className="text-yellow-50 font-font1 text-center text-xl">{skill.name}</p>
              </div>
            ))}
          </div>
        </Marquee>

        {/* Second Marquee */}
        <Marquee direction="left" className="-mt-10 lg:-mt-5">
          <div className="flex gap-8 mt-3">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="w-32 h-32 border-2 rounded-[10px]  hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4">
                  <Image src={skill.src} alt={skill.name} width={100} height={100} />
                </div>
                <p className="text-yellow-50 font-font1 text-center text-xl">{skill.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SkillPage;
