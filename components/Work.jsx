'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"

// import swiper react components
import {Swiper, SwiperSlide } from "swiper/react"

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination, pagination} from 'swiper/modules'

// components
import ProjectCard from "@/components/ProjectCard"

const projectData =[
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Solstice Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Lumina Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Evolve Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Ignite Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Envision Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Serinity Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Nova Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Zenith Website',
        description: 'Lorem ipsum doler sit amet consectetur adisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
]

const Work = () => {
    return (
        <section id="work" className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolar sit amet consectetur <br /> adiscing elit.</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[800px] xl:absolute right-[80px] top-0">
                    <Swiper className="h-[530px]" 
                        slidesPerView={1} 
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        }} 
                        spaceBetween={30} 
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                    >
                        {/* show only the first 4 projects for the slider */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}> 
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
  )
}

export default Work