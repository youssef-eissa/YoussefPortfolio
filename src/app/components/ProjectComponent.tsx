import React from 'react'
import { projectType } from '../types/projects'
import Image from 'next/image'
import { bebas } from '../lib/fonts'
import Link from 'next/link'

type props={
    project:projectType
}

function ProjectComponent({project}:props) {
  return (
    <div className='w-full bg-mainText rounded sm:p-5 p-3 grid lg:grid-cols-3 gap-5 col-span-1'>
        <div className={`col-span-1 lg:h-[400px] h-[150px] sm:h-[200px] flex items-center ${project.id%2===0?'lg:col-start-3':''}`}>
            <Image src={project.image} alt={project.title} className='lg:object-cover rounded h-full lg:h-fit' />
        </div>
        <div className={`lg:col-span-2 flex flex-col gap-5 justify-between ${project.id%2===0?'lg:col-start-1 lg:row-start-1':''}`}>
            <div className='flex flex-col gap-3'>
                 <h3 className='text-title font-oswald font-bold xl:text-5xl lg:text-3xl text-lg sm:text-2xl uppercase'>{project.title}</h3>
                 <ul className='flex flex-wrap items-center gap-3'>
        {project.tags.map(tag=>(
            <li className={`${bebas.className} font-bold xl:text-2xl lg:text-xl sm:text-base text-sm p-2 rounded bg-icon`} key={tag}>{tag}</li>

        ))}
    </ul>
            </div>
           
    

    <p className={`lg:text-2xl xl:text-3xl sm:text-xl text-base ${bebas.className}`}>{project.description}</p>
    <div className={`flex items-center mx-auto lg:mx-0 ${project.id % 2 !==0?'lg:justify-end ':''}`}>
        <Link href={project.link} target='_blank' className='lg:text-xl xl:text-2xl sm:text-lg text-xs font-oswald font-bold text-white bg-icon p-3 rounded uppercase hover:bg-secondaryText transition-all duration-300'>visit live</Link>
    </div>

        </div>
    </div>
  )
}

export default ProjectComponent