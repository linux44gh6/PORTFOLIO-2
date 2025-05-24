"use client";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const skills = [
  { name: "C", src: "/C_Logo.png" },
  { name: "C++", src: "/ISO_C++_logo.svg.png" },
  { name: "JavaScript", src: "/js.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Express.js", src: "/express-js.png" },
  { name: "React.js", src: "/react.png" },
  { name: "Next.js", src: "/next.svg" },
  { name: "SQL", src: "/sqlLogo.webp" },
  { name: "NO-SQL", src: "/no-sql-logo.png" },
  { name: "Prisma", src: "/prisma-3.svg" },
  { name: "PostGreSQL", src: "/postgressLogo.png" },
  { name: "MongoDB", src: "/mongo.png" },
  { name: "HTML", src: "/Html.png" },
  { name: "CSS", src: "/css.png" },
  { name: "Tailwind CSS", src: "/tailwinds.png" },
];

export default function SkillPage() {
  return (
    <section className="bg-color3 py-16 overflow-hidden">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold font-font1 bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text mb-12">
        My Skills
      </h1>

      <BackgroundBeamsWithCollision>
        <div className="space-y-16">
          {/* Row 1 */}
          <div className="relative w-full h-[240px] overflow-hidden">
            <div className="animate-scroll-right flex flex-row gap-10 w-max">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`r1-${index}`}
                  className="w-48 h-48 rounded-2xl bg-gradient-to-br from-color1/30 to-color4/20 border border-yellow-100/30 shadow-xl hover:shadow-yellow-300/40 transform hover:scale-105 hover:rotate-1 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-md"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={70}
                    height={70}
                    className="mb-2 object-contain"
                  />
                  <p className="text-yellow-50 text-lg font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative w-full h-[240px] overflow-hidden">
            <div className="animate-scroll-left flex flex-row gap-10 w-max">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className="w-48 h-48 rounded-2xl bg-gradient-to-br from-color4/30 to-color1/20 border border-yellow-100/30 shadow-xl hover:shadow-yellow-300/40 transform hover:scale-105 -hover:rotate-1 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-md"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={70}
                    height={70}
                    className="mb-2 object-contain"
                  />
                  <p className="text-yellow-50 text-lg font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

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
