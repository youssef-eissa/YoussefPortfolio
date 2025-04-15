import React from 'react'
import './Banner.css'
import { StyledLinkDiv } from './styled/StyledLink'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BiPhoneCall } from "react-icons/bi";


function Banner() {
    const variants = {
        start: {
            opacity: 0,
            y: 20,
           
        },
        animate: {
            opacity: 1,
            y:0,
            
        }
    }
    return (
        <div className='container-md container-fluid'>
            <div className='row d-flex justify-content-center '>
                <div id='banner' className=' col-lg-10 col-xl-10 col-11 p-0 d-flex flex-column banner justify-content-center '>
                    <motion.div animate='animate' initial='start' transition={{delay:0.5}} variants={variants} className='col-12 '>Hi, My name is</motion.div>
                    <motion.h1 animate='animate' initial='start' transition={{delay:0.6}} variants={variants} className='col-12'>Youssef Eissa.</motion.h1>
                    <motion.h1 animate='animate' initial='start' transition={{delay:0.7}} variants={variants} className='col-12'>Frontend Developer React.Js And Next.Js</motion.h1>
                    <motion.p animate='animate' initial='start' transition={{delay:0.8}} variants={variants} className='col-md-12 col-12 col-lg-12 col-xxl-6'>I'm a passionate junior <span>Frontend Developer</span> with a solid foundation in building responsive, user-friendly web applications. Proficient in <span>React.js and Next.js</span>, I specialize in crafting dynamic, scalable user interfaces with a focus on performance and usability. With hands-on experience in modern styling tools like Tailwind CSS and CSS Modules, I bring clean, visually appealing designs to life. I'm committed to delivering high-quality, user-focused solutions— whether working independently or as part of a team—while continuously learning and staying up-to-date with the latest in <span>Frontend development</span>.</motion.p>
                    

                    <motion.div animate='animate' initial='start' transition={{delay:0.9}} variants={variants} className='col-md-4 col-6 mt-md-0 mt-3 '>
                        <StyledLinkDiv target={'_blank'} to='https://github.com/youssef-eissa?tab=repositories' padding={'20px 25px'} link='Check out my Projects!'/>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className='links d-lg-flex d-none flex-column align-items-center'>
                        <SocialIcon target='_blank' url='https://github.com/youssef-eissa' className='icon rounded mb-3' network='github' bgColor='transparent' />
                        
                        <SocialIcon target='_blank' className='icon rounded mb-3' network='linkedin' bgColor='transparent' url='https://www.linkedin.com/in/youssef-eissa1812' />
                        
                        <SocialIcon target='_blank' className='icon rounded mb-3' network='whatsapp' bgColor='transparent' url='https://wa.me/+201003003433?text=Hi,let%27s%start%20working%20together' />
                        
                        
                      <Link target='_blank' to='tel:+201003003433' className='icon rounded mb-3  d-flex justify-content-center align-items-center'>
                      <BiPhoneCall  size={25}  color='white' />
                      </Link>

                        
                        <div className='line'></div>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className='mail d-lg-flex d-none align-items-center'>
                        <Link className='mailLink me-3' to={"mailto:Youssefeissa1812@gmail.com"}>Youssefeissa1812@gmail.com</Link>
                        <div className='line ms-'></div>
                    </motion.div>
                </div>
            </div>
    </div>
)
}

export default Banner