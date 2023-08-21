import React from 'react'
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
      name: "Book-Hub",
      description:
        "Book search website with Open Library Search API using ReactJs",
      image: "/book-hub.png",
      github: "https://github.com/alaswadiyy/book-hub",
      link: "https://aswad-bookhub.netlify.app/",
    },
    {
      name: "HooBank",
      description:
        "Modern HooBank Landing page is a single page website built with RaectJs and styled with TailwindCSS",
      image: "/book-hub.png",
      github: "https://github.com/alaswadiyy/HooBank",
      link: "https://aswad-hoobank-modern.netlify.app",
    },
    {
      name: "Space Tourism Multi-Page Website",
      description: "Space Tourism Multi-Page Website built with HTML, CSS and JavaScript",
      image: "/book-hub.png",
      github: "https://github.com/alaswadiyy/space-tourism",
      link: "https://alaswadiyy.github.io/space-tourism/",
    },
    {
      name: "Huddle Landing Page",
      description:
        "Huddle Landing Page created with HTML and CSS",
      image: "/book-hub.png",
      github: "https://github.com/alaswadiyy/Huddle-landingpage",
      link: "https://alaswadiyy.github.io/Huddle-landingpage/",
    },
  ]

const ProjectSection = () => {
  return (
    <section id='projects'>
        <h1 className="text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className='flex flex-col space-y-20'>
            {projects.map((item, idx) => {
                return (
                    <div key={idx}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                <div className='mt-8 md:w-1/2'>
                                    <Link href={item.link} target='_blank'>
                                        <img 
                                            src={item.image} 
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className='rounded-xl shadow-xl hover:opacity-70' 
                                        />
                                    </Link>
                                </div>
                                <div className='mt-12 md:w-1/2'>
                                    <h1 className='text-4xl font-bold mb-6'>{item.name}</h1>
                                    <p className='text-xl leading-7 mb-4 text neutral-600 dark:text-neutral-400'>{item.description}</p>
                                    <div className='flex flex-row align-bottom space-x-4'>
                                        <Link href={item.github} target='_blank'>
                                            <BsGithub
                                            size={30}
                                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                                            />
                                        </Link>
                                        <Link href={item.link} target='_blank'>
                                            <BsArrowUpRightSquare
                                            size={30}
                                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                                            />    
                                        </Link>                                
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                        
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProjectSection