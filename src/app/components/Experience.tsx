import React from 'react'
import Heading from '../lib/Heading'

function Experience() {
    const experience=[
        {
            id:1,
            company:"Pixel Crafters",
            position:"Frontend Developer",
            location:"Saudi Arabia, Riyadh",
            type:"Hybrid",
            time:"September 2024 - Current",
            role:"As a Frontend Developer with expertise in React.js and Next.js, I specialize in creating high-performance, scalable, and visually engaging web applications. I am proficient in leveraging modern tools like TypeScript, Redux, React Query, Tailwind CSS, and CSS Modules to deliver responsive and accessible user interfaces. My experience includes building dynamic, feature-rich applications using Next.js's advanced features, such as server-side rendering (SSR), static site generation (SSG), and API integration. I prioritize writing efficient, well-structured code and enhancing web performance while collaborating with diverse teams to turn concepts into seamless and intuitive digital solutions."
        },
         {
            id:2,
            company:"E-Ramo for digital solutions",
            position:"Frontend Developer",
            location:"Egypt, Cairo",
            type:"Onsite",
            time:"January 2024 - August 2024",
            role:"Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages."
        }
    ]
  return (
    <section id='experience' className='flex flex-col items-center lg:p-10 lg:px-14 p-5  gap-5 lg:gap-10 relative'>
        
        <Heading title='Experience'/>

        <ul className='w-full flex  lg:gap-5 gap-8 flex-wrap relative' >
            <span className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-secondaryText rounded-2xl hidden lg:block'></span>
            
            {
                experience.map(exp=>(
                    <li className={`flex lg:w-1/2 flex-col gap-3 ${exp.id%2===0?'lg:ms-auto lg:ps-5':''}`} key={exp.id}>
                        <div className='flex flex-col gap-2 relative'>
                            <span className={`absolute hidden lg:block top-1/2 -translate-y-1/2  ${exp.id%2===0?'-left-[26px]':'-right-[6px]'} w-3 aspect-square bg-secondaryText rounded-full`}></span>
                            <h4 className='font-oswald sm:text-2xl font-bold text-white relative'>{exp.position}
                                
                                 </h4>
                                 <div className='flex items-center gap-1 font-bebas text-sm sm:text-xl flex-wrap'>
                                 <span>{exp.company},</span> <span>{exp.time},</span> <span>{exp.location},</span> <span>{exp.type}</span>
                                 </div>
                                 <p className='sm:text-lg text-sm font-oswald break-words'>{exp.role}</p>

                        </div> 
                    </li>
                ))
            }
        </ul>
        
    </section>
  )
}

export default Experience