import React from 'react'
import './Banner.css'
import { StyledLinkDiv } from './styled/StyledLink'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
            <div className='row d-flex justify-content-center'>
                <div id='banner' className='col-md-10 col-12 p-0 d-flex flex-column banner justify-content-center'>
                    <motion.div animate='animate' initial='start' transition={{delay:0.5}} variants={variants} className='col-12 '>Hi, My name is</motion.div>
                    <motion.h1 animate='animate' initial='start' transition={{delay:0.6}} variants={variants} className='col-12'>Youssef Eissa.</motion.h1>
                    <motion.h1 animate='animate' initial='start' transition={{delay:0.7}} variants={variants} className='col-12'>Frontend Developer React.Js</motion.h1>
                    <motion.p animate='animate' initial='start' transition={{delay:0.8}} variants={variants} className='col-md-6 col-12'>A self-taught <span>Frontend developer</span> who has recently learned stuff about web development. Also, I made a few projects on my own using <span>Frontend</span> technologies and by getting real designs. Seeking to be part of a reputable organization where i can sharpen my skills and gain more knowledge. </motion.p>

                    <motion.div animate='animate' initial='start' transition={{delay:0.9}} variants={variants} className='col-md-2 col-6 mt-md-0 mt-3 '>
                        <StyledLinkDiv target={'_blank'} to='https://github.com/youssef-eissa?tab=repositories' padding={'20px 25px'} link='Check out my Projects!'/>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className='links d-md-flex d-none flex-column align-items-center'>
                        <SocialIcon target='_blank' url='https://github.com/youssef-eissa' className='icon rounded mb-3' network='github' bgColor='transparent' />
                        
                        <SocialIcon target='_blank' className='icon rounded mb-3' network='linkedin' bgColor='transparent' url='https://www.linkedin.com/in/youssef-eissa1812' />
                        
                        <SocialIcon target='_blank' className='icon rounded mb-3' network='whatsapp' bgColor='transparent' url='https://wa.me/+201003003433?text=Hi,I%27m%20interested%20in%20your%20portfolio' />
                        
                        <SocialIcon target='_blank' url='https://www.instagram.com/youssef3issa/' className='icon rounded mb-3' network='instagram' bgColor='transparent' />
                        
                        <div className='line'></div>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className='mail d-md-flex d-none align-items-center'>
                        <Link className='mailLink me-3' to={"mailto:Youssefeissa1812@gmail.com"}>Youssefeissa1812@gmail.com</Link>
                        <div className='line ms-'></div>
                    </motion.div>
                </div>
            </div>
    </div>
)
}

export default Banner