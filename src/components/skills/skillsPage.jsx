"use client";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const skills = [
  {name:'C',src: '/C_Logo.png'},
  {name:'C++',src: '/ISO_C++_logo.svg.png'},
  { name: "JavaScript", src: "/js.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Express.js", src: "/express-js.png" },
  { name: "React.js", src: "/react.png" },
  { name: "Next.js", src: "/next.svg" },
  {name:'SQL',src: '/sqlLogo.webp'},
  {name:'NO-SQL',src: '/no-sql-logo.png'},
  {name:'Prisma',src: '/prisma-3.svg'},
  {name:'PostGreSQL',src: '/postgressLogo.png'},
  { name: "MongoDB", src: "/mongo.png" },
  { name: "HTML", src: "/Html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "Tailwind CSS", src: "/tailwinds.png" },


];

export default function SkillPage() {
  return (
    <section className="bg-color3 py-10 overflow-hidden">
      <h1 className="text-center text-5xl font-extrabold font-font1 bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text mb-8">
        My Skills
      </h1>

      <BackgroundBeamsWithCollision>
        <div className="space-y-10">
          {/* Row 1: Left to Right */}
          <div className="relative w-full h-[260px] overflow-hidden">
            <div className="animate-scroll-right flex flex-row gap-8 w-max">
              {[...skills, ...skills].map((skill, index) => (
               
                 <div
                  key={`r1-${index}`}
                  className="w-60 h-60 bg-white/10 backdrop-blur-lg rounded-xl border border-color1 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
                >
                
                 <Image
                    src={skill.src}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="mb-3"
                  />
               
                  <p className="text-yellow-50 font-font1 text-xl">{skill.name}</p>
                </div>
               
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative w-full h-[260px] overflow-hidden">
            <div className="animate-scroll-left flex flex-row gap-8 w-max">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className="w-60 h-60 bg-white/10 backdrop-blur-lg rounded-xl border border-color1 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="mb-3"
                  />
                  <p className="text-yellow-50 font-font1 text-xl">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Custom animation styles */}
      <style jsx>{`
        .animate-scroll-right {
          animation: scrollRight 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
