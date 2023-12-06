import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'


function Home() {
    const { ref, inView } = useInView({
        threshold:0.2
    })
    const animation = useAnimation()
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity:1,
                transition:{duration:0.7}
            })
            animation2.start({
                x: 0,
                opacity:1,
                transition: {
                    duration:0.7
                }
            })
        } else {
            animation.start({
                x: "-100vh",
                opacity:0,
                transition:{duration:0.7}
            })
            animation2.start({
                x: "100vh",
                opacity:0,
                transition: {
                    duration:0.7
                }
            })
        }
    }, [inView, animation, animation2])
    const  TypeAnimation = () => {
    return (
        <Typewriter
            words={["React JS", "TypeScript", "Redux", "React Query", "Bootstrap", "Material UI",]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
            
        />
);
};
return (
    <div className='container'>
<div ref={ref} className='row d-flex  align-items-center home'>
        <motion.div
            id='home'
            animate={animation}
            style={{ fontFamily: 'Bebas Neue' }}
            className='text d-flex flex-column align-items-center align-items-md-start p-0 col-md-6 col-12'>
            <motion.span >Hello</motion.span>
            <span>I'M <span style={{ color: "coral" ,fontSize:'inherit'}}>YOUSSEF EISSA</span></span>
            <span >Frontend Developer using <span className='typeAnimation'><TypeAnimation/></span></span>
               
            <div className='socials d-flex justify-content-center col-12'>
                <Link target='_blank' to='https://github.com/youssef-eissa' className='me-3'><GitHubIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "#171515", backgroundColor: "white" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://wa.me/1003003433' className='me-3'><WhatsAppIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "white", backgroundColor: "#25D366" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/youssef-eissa-875aa227b/' className='me-3'><LinkedInIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "#0072b1", backgroundColor: "white" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://www.facebook.com/Youssef3issa' className='me-3'><FacebookIcon className='rounded' fontSize='large' sx={{ color: "gray","&:hover":{color:"#4267B2",backgroundColor:"white"},transition:"0.3s" }} /></Link>
            </div>
            <div className='col-12 my-5 justify-content-center d-flex'>
                <Link className='rounded link text-center col-md-3 col-6 py-3 px-2' target='_blank' to='/YoussefPortfolio/Youssef_Eissa.pdf' download='Youssef_Eissa.pdf' >Download My CV</Link>
            </div>
            </motion.div>
            <motion.div
            animate={animation2}
            className='imgg p-0 d-none d-md-flex col-6'>
            <img className='img-fluid' alt='me' src={require('../assest/me.png') } />
            </motion.div>
    </div>
    </div>
)
}

export default Home