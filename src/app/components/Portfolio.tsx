import React from 'react'
import Heading from '../lib/Heading'
import lemaschou from '/public/assest/lemaschou.png'
import pixel from '/public/assest/pixel.png'
import amtalek from '/public/assest/amtalek.png'
import ProjectComponent from './ProjectComponent'
import { projectType } from '../types/projects'
import Link from 'next/link'



function Portfolio() {

    const projects:projectType[]=[
        {
            id:1,
            title:"le maschou restaurant",
            image:lemaschou,
            tags:["Next.js","Tailwind css","React","Typescript"],
            description:"Le Maschou is a modern, responsive restaurant website built with Next.js and Tailwind CSS. Designed for a Saudi Arabian venue, it features a stunning landing page, a venue showcase, and a detailed menu. The site is optimized for performance and SEO, offering users a smooth and immersive experience.",
            link:"https://www.lemaschou.sa/en"
        },
        {
            id:2,
            title:"Pixel Crafters Portfolio",
            image:pixel,
            tags:["Next.js","Tailwind css","React","Typescript"],
            description:"A modern and dynamic Next.js website showcasing Pixel Crafters expertise. With a sleek design and seamless navigation, it features essential pages: Home, Services, About Us, Projects, and Careers, ensuring an engaging user experience.",
            link:"https://www.pixelcrafters.tech/en"
        },
        {
            id:3,
            title:"Multi-Vendor Amtalek Real Estate Website",
            image:amtalek,
            tags:["Tailwind css","React","Typescript"],
            description:"Amtalek allows users to create personal accounts and provides an upcoming social media platform showcasing a large scale of properties and projects. Additionally, Amtalek offers various subscription packages to cater to different user needs.",
            link:"https://www.amtalek.com/en"

        },
       

    ]
  return (
    <section id='portfolio' className='flex flex-col items-center lg:p-10 p-5 lg:gap-10 gap-5'>
        <Heading title='My Portfolio'/>
        <div className={`flex flex-col  gap-3 sm:gap-5 w-full`}>
            {
                projects.map((project:projectType)=>(
                    <ProjectComponent key={project.id} project={project as projectType}/>
                ))
            }
        </div>
         <Link href={''} target='_blank' className='lg:text-xl xl:text-2xl text-sm sm:text-lg font-oswald font-bold text-white bg-mainText p-3 rounded uppercase hover:bg-secondaryText transition-all duration-300'>check out my projects</Link>
    </section>
  )
}

export default Portfolio