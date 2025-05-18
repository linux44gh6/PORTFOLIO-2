"use client"
import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { AnimatedText } from "../Animation"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
// Import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { getProject } from "@/services/actions/getProject"
import type { Project } from "@/Types"


const ProjectPage = () => {
  const [projects, setProject] = useState<Project[]>([])
  useEffect(()=>{
    const fetchProject=async()=>{
      const res=await getProject()
      setProject(res.data)
    }
    fetchProject()
  },[])
  // const projects = [
  //   {
  //     id: 1,
  //     title: "ShowFlix",
  //     image: "/show.png",
  //     link: "https://movie-series-client.vercel.app",
  //   },
  //   {
  //     id: 2,
  //     title: "Study Hub",
  //     image: "/project-2.jpg",
  //     link: "https://study-hub-ec69a.web.app",
  //   },
  //   {
  //     id: 3,
  //     title: "Bistro BOSS",
  //     image: "/project-3.jpg",
  //     link: "https://bistro-boss-df988.web.app",
  //   },
  //     {
  //     id: 4,
  //     title: "GlobeGazzer",
  //     image: "/project-1.jpg",
  //     link: "https://tourist-guide-2db3b.web.app",
  //   },
  // ]

  return (
    <section id="project-section">
      <div className="min-h-screen bg-gradient-to-r from-color3 to-color4 p-4 py-16">
        <AnimatedText>
          <h1 className="text-center text-3xl md:text-5xl lg:text-5xl font-font1 bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text font-extrabold mb-12">
            My Recent Projects
          </h1>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 mt-10"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {projects&&projects?.map((project) => (
              <SwiperSlide key={project._id} className="swiper-slide">
                <div className="p-4" >
                  <Link href={project.live_link} target="_blank">
                    <div className="transition duration-300 group relative rounded-lg overflow-hidden">
                      <div className="h-[300px] md:h-[400px] lg:h-[500px] relative w-full">
                        <Image
                          className="rounded-lg object-cover"
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <div className="bg-gradient-to-r from-color1 to-color4 w-full p-4 flex items-center justify-between">
                          <h1 className="text-white text-2xl font-font1 font-bold duration-500">{project.title}</h1>
                          <MdArrowOutward className="text-4xl text-yellow-50" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <style jsx global>{`
                    .swiper {
                        width: 100%;
                        padding-top: 50px;
                        padding-bottom: 80px;
                    }
                    
                    .swiper-slide {
                        width: 300px;
                        height: auto;
                        margin: 0 auto;
                    }
                    
                    @media (min-width: 768px) {
                        .swiper-slide {
                            width: 500px;
                        }
                    }
                    
                    @media (min-width: 1024px) {
                        .swiper-slide {
                            width: 700px;
                        }
                    }
                    
                    .swiper-pagination-bullet {
                        background: #f5f5f5;
                        opacity: 0.6;
                    }
                    
                    .swiper-pagination-bullet-active {
                        background: var(--color1, #f59e0b);
                        opacity: 1;
                    }
                    
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: var(--color1, #f59e0b);
                        background: rgba(0, 0, 0, 0.3);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .swiper-button-next:after,
                    .swiper-button-prev:after {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    
                    .swiper-container-3d .swiper-slide-shadow-left,
                    .swiper-container-3d .swiper-slide-shadow-right {
                        background-image: none;
                    }
                `}</style>
      </div>
    </section>
  )
}

export default ProjectPage
