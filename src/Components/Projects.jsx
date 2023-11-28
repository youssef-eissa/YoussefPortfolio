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
    const animation2 = useAnimation()
    const animation3 = useAnimation()
    const animation4 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    bounce: 0.5,
                    type: "spring"
                }
            })
            animation2.start({
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    bounce: 0.5,
                    type: "spring"
                }
            })
            animation3.start({
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    bounce: 0.5,
                    type: "spring"
                }
            })
            animation4.start({
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    duration: 0.7,
                    bounce: 0.5,
                    type: "spring"
                }
            })
        } else {
            animation.start({
                x: "-100%",
                y: '-100%',
                rotate: 360,
                opacity: 0,
                transition:{duration:0.7}
            })
            animation2.start({
                x: "100%",
                y: '-100%',
                rotate: 360,
                opacity: 0,
                transition:{duration:0.7}
            })
            animation3.start({
                x: "-100%",
                y: '100%',
                rotate: 360,
                opacity: 0,
                transition:{duration:0.7}
            })
            animation4.start({
                x: "100%",
                y: '100%',
                rotate: 360,
                opacity: 0,
                transition:{duration:0.7}
            })
        }
    },[inView,animation,animation2,animation3,animation4])
return (
    <div className='container'>
<div
        id='portfolio'
        className=' my-5 projects row'>
        <h1 className='col-12 my-5 title text-center'>My <span style={{color:"coral"}}>Projects</span></h1>
            <motion.div ref={ref} className=' projects-container p-0 d-flex row-gap-5 justify-content-md-between justify-content-center flex-wrap'>

                <motion.div
                className='col-md-5 col-11'
                animate={animation}
                >
                <Link target='_blank' reloadDocument to='https://hypershop-three.vercel.app' style={{textDecoration:"none"}} className='col-12 rounded overflow-hidden project-box d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/hypershop.png') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>Hypershop Online Store</h3>
                    <p>An integrated API website with login authentication for shopping online and allow users to discover all products by categories and ability to show information of every product separetly. </p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://hypershop-three.vercel.app'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            </motion.div>

                <motion.div className='col-md-5 col-11' animate={animation2}>

                <Link target='_blank' reloadDocument style={{textDecoration:"none"}} to='https://youssef-eissa.github.io/shopzone/' className='col-12 project-box rounded overflow-hidden d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid  h-100 w-100' src={require('../assest/shopzone.png') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className=' col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>ShopZone e-commerce website with API
                    </h3>
                    <p>An integrated API website with login page that allow user to add and remove products from the cart.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://youssef-eissa.github.io/shopzone/'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            </motion.div>

          
           <motion.div animate={animation3} className='col-md-5 col-11'>
             <Link target='_blank' reloadDocument to='https://movieflix-chi.vercel.app/' style={{textDecoration:"none"}} className='col-12 project-box rounded overflow-hidden d-flex flex-column project-box'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/movieflex.png') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>Movieflix Movies store</h3>
                    <p className='col-12' >A 4 multi-page Website that view the optimal layout for each page depending on their device's screen size.</p>
                    <span  style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://movieflix-chi.vercel.app/'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
        </motion.div>
                <motion.div animate={animation4} className='col-md-5 col-11'>
                    <Link target='_blank' reloadDocument to='https://cooclicious.vercel.app/' style={{textDecoration:"none"}} className='col-12 project-box rounded overflow-hidden d-flex flex-column'>
                <div className='theImg overflow-hidden col-12'>
                    <img className='img-fluid h-100 w-100' src={require('../assest/cooclicious.png') } alt='proj-img' />
                </div>
                <div style={{ backgroundColor: "#dbd5d5",color:"black"}} className='col-12 p-3 text'>
                    <h3 style={{ color: "coral" }} className='col-12'>Cooclicious Food Receipe</h3>
                    <p>An integrated API website for many of food receipes and allow users for see each recipe details in separated page.</p>
                    <span style={{textDecoration:"none",fontSize:"16px",color:"coral"}} to='https://cooclicious.vercel.app/'>Show More <KeyboardDoubleArrowRightIcon/> </span>
                </div>
            </Link>
            </motion.div>
        </motion.div>
        <div className='col-12 d-flex my-5 justify-content-center'>
            <Link reloadDocument target='_blank' to='https://github.com/youssef-eissa?tab=repositories' className='link col-md-2 col-11 rounded py-2 text-center'>See More</Link>
        </div>
    </div>
    </div>
)
}

export default Projects