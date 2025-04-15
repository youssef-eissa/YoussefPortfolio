import './experience.css'
import React, { useEffect, } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { StyledHeader } from './styled/StyledHeader';

function Experience() {
    const { ref, inView } = useInView({ threshold: 0.2 })
    const animate = useAnimation()
    useEffect(() => {
        if(inView){
            animate.start({
                opacity:1,
                y: 0,
                transition: {
                    duration:0.5
                }
            })
        } else {
            animate.start({
                opacity:0,
                y: 20,
                transition: {
                    duration:0.5
                }
            })
        }
    },[inView,animate])

    const exp=[
        {
            id:1,
            title:"Frontend Developer at Pixelcrafters.tech, KSA, Riyadh",
            time:"September 2024 - Current",
            desc:"As a Frontend Developer with expertise in React.js and Next.js, I specialize in creating high-performance, scalable, and visually engaging web applications. I am proficient in leveraging modern tools like TypeScript, Redux, React Query, Tailwind CSS, and CSS Modules to deliver responsive and accessible user interfaces. My experience includes building dynamic, feature-rich applications using Next.js's advanced features, such as server-side rendering (SSR), static site generation (SSG), and API integration. I prioritize writing efficient, well-structured code and enhancing web performance while collaborating with diverse teams to turn concepts into seamless and intuitive digital solutions."
        },
        {
            id:2,
            title:"Junior Frontend Developer React Js E-Ramo for digital solutions, Egypt, Cairo",
            time:"January 2024 - August 2024",
            desc:"Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages."
        }
    ]

    
return (
    <div  className='container-md container-fluid mt-5'>
        
        <div  className='row d-flex justify-content-center'>
            <motion.div animate={animate} ref={ref} id='experience' className='col-lg-10 col-xl-11 col-12 d-flex flex-column about p-0'>
                <StyledHeader><span>03.</span>My Experience</StyledHeader>
                <div className='col-12 mt-3 d-flex flex-column gap-3'>

                    {exp.map(item=>(
                        <div key={item.id} className='d-flex flex-column gap-2'>
                            <span style={{
                                color:"#64FFDA"
                            }} className=''>{item.time}</span>
                            <span className='title' style={{
                                color:"#ccd6f6"
                            }}>{item.title}</span>
                            <p  className='desc' style={{
                                color:"#8892B0"
                            }}>{item.desc}</p>
                        </div>
                    ))}
                   
                   
                </div>
            </motion.div>
        </div>
    </div>
)
}

export default Experience