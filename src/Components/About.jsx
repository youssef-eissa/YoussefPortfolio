import React, { useEffect, useRef } from 'react'
import './About.css'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import me from '../assest/me.png'
import { ImgStyledDiv } from './styled/ImgStyledDiv';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { StyledHeader } from './styled/StyledHeader';

function About() {
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
    const ShadowRef = useRef(null)
    const ImgRef = useRef(null)
    useEffect(() => {
        ImgRef.current.addEventListener('mouseover', () => {
            ShadowRef.current.style.transform='translate(5px,5px)'
            ShadowRef.current.style.transition='0.3s'
        })
        ImgRef.current.addEventListener('mouseout', () => {
            ShadowRef.current.style.transform='translate(0,0)'
            ShadowRef.current.style.transition = '0.3s'
        })
    })
    
return (
    <div  className='container-md container-fluid'>
        
        <div  className='row d-flex justify-content-center'>
            <motion.div animate={animate} ref={ref} id='aboutSection' className='col-lg-10 col-xl-11 col-11 d-flex flex-column about p-0'>
                <StyledHeader><span>01.</span>About Me</StyledHeader>
                <div className='col-12 mt-3 d-flex flex-lg-row flex-column justify-content-between  gap-4 gap-md-0'>
                    <div className='col-lg-6  col-12 d-flex flex-column leftBox'>
                        <p>I'm a <span>Frontend Developer</span> based in Egypt who is passionate about delivering value to businesses through technology. I love the challenge of finding <span>creative solutions</span> to problems, and I enjoy collaborating with teams to achieve great results. <br></br> <br></br>
                            
                        I'm dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients. <br></br> <br></br>

                            Also, I'm a <span>quick learner</span> and I pay great attention to <span>details</span> in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the client's objectives.</p>
                        <div className='col-12 d-flex flex-column techsBox'>
                            <p className='col-10'>Here are a few technologies I’ve been working with recently:</p>


                            <div className='techs col-12 d-flex flex-column flex-wrap'>
                                <div className='col-6 skill '>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>React.js</span>
                                </div>
                                
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Next.js</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Unit Testing</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Tailwind</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Typescript</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Bootstrap</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Redux</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>React Query</span>
                                </div>
                                <div className='col-6 skill'>
                                    <span><PlayArrowOutlinedIcon sx={{ color: '#64FFDA', fontSize: 10 }} /></span>
                                    <span className='ms-1' style={{ color: '#8892B0' }}>Github</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 col-12 d-flex d-md-block justify-content-center mt-10 mt-md-0  imgcon align-self-center '>
                        <ImgStyledDiv ref={ImgRef} className='imgBoxabout' width='300px' height='300px' widthSm='250px' heightSm='250px'>
                        <img alt='me' className='img-fluid h-100 w-100' src={me}/>
                        </ImgStyledDiv>
                        <div  ref={ShadowRef} className='borderShadow'></div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
)
}

export default About