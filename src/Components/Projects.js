import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Projects() {
    const { ref, inView } = useInView({
        threshold:0.1
    })

    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration:0.7,
                }
            })
        } else {
            animation.start({
                x: "-200px",
                opacity: 0,
                transition:{duration:0.7}
            })
        }
    },[inView,animation])
return (
    <div className='container'>
<motion.div
        id='portfolio'
        ref={ref}
        animate={animation}
        className=' my-5 projects row'>
        <h1 className='col-12 my-5 title text-center'>My <span style={{color:"coral"}}>Projects</span></h1>
        <div className=' projects-container p-0 d-flex row-gap-5 justify-content-md-between justify-content-center flex-wrap'>
            <Link to='https://youssef-eissa.github.io/Audiophile-e-commerce/' style={{textDecoration:"none"}} className='col-md-5 col-11 rounded overflow-hidden project-box d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/ecom.jpeg') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>Audiophile e-commerce website</h3>
                    <p>A website that allows users to Add/Remove products from the cart, checkout and keep track of what's in the cart, even after refreshing the browser.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://youssef-eissa.github.io/Audiophile-e-commerce/'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            <Link to='https://youssef-eissa.github.io/PayApi-Project' style={{textDecoration:"none"}} className='col-md-5 col-11 project-box rounded overflow-hidden d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/payapi.jpeg') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>PayAPI multi-page website</h3>
                    <p>A 4 multi-page Website that view the optimal layout for each page depending on their device's screen size.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://youssef-eissa.github.io/PayApi-Project'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            <Link to='https://youssef-eissa.github.io/multi-step-app-form' style={{textDecoration:"none"}} className='col-md-5 col-11 project-box rounded overflow-hidden d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/form.webp') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>Multi-step form</h3>
                    <p>A form  allows users to complete each step of the sequence, go back to a previous step to update their selections and see a summary of their selections on the final step and confirm their order.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://youssef-eissa.github.io/multi-step-app-form'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            <Link style={{textDecoration:"none"}} to='https://youssef-eissa.github.io/REST-Countries-API'  className='col-md-5 col-11 project-box rounded overflow-hidden d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid  h-100 w-100' src={require('../assest/countries.webp') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className=' col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>REST Countries API with color theme switcher
                    </h3>
                    <p>A website that allows users to list, search, filter and see details of all countries from the API on the homepage, also can toggle the color scheme between light and dark mode.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://youssef-eissa.github.io/REST-Countries-API'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
        </div>
        <div className='col-12 d-flex my-5 justify-content-center'>
            <Link target='_blank' to='https://github.com/youssef-eissa?tab=repositories' className='link col-md-2 col-11 rounded py-2 text-center'>See More</Link>
        </div>
    </motion.div>
    </div>
)
}

export default Projects