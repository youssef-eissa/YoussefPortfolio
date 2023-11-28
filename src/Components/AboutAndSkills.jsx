import React from 'react'
import './AboutMe.css'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function AboutAndSkills() {
    const { ref,inView} = useInView({
        threshold:0.1
    })
    const animation = useAnimation()
    const animation2 = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition:{duration:0.7 }
            })
            animation2.start({
                opacity: 1,
                transition:{duration:0.7}
            })
        } else {
            animation.start({
                opacity: 0,
                transition:{duration:0.7}
            })
            animation2.start({
                opacity: 0,
                transition:{duration:0.7}
            })
        }
    },[inView,animation,animation2])

return (
    <div className='container my-5'>
        <div ref={ref} id='about' className='row d-flex justify-content-center align-items-md-center flex-wrap '>
        <motion.div
            animate={animation}
            className='about col-md-6 col-11 p-0'>
            <h1 className='col-12 text-center'><span style={{ color: "coral" }}>About</span> Me</h1>
            <p className='col-12 text-center'>
            I'm a <span style={{color:"coral",fontWeight:"bold"}}>Frontend Developer</span> based in Egypt who is passionate about delivering value to businesses through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results. <br></br> <br></br>
            I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients. <br></br> <br></br>
            I pay great attention to details in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the client's objectives.
            </p>
        </motion.div>
        <motion.div
            animate={animation2}
            className='skills col-md-6 col-11 p-3 flex-wrap justify-content-between d-flex'>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/html.jpeg")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>HTML</div>
            </div>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/css.jpeg")} className='img-fluid' />
                </div>
                <div className='col-md-5 col-12 text text-center'>CSS</div>
            </div>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/JS.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>JavaScript</div>
            </div>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/react.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>React</div>
            </div>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/bootstrap.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>Bootstrap</div>
            </div>
            <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/github.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>GitHub</div>
                </div>
                <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                    <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/redux.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>Redux</div>
                </div>
                <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                    <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/RQ.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>React Query</div>
                </div>
                <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                    <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/typescript.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>Typescript</div>
                </div>
                <div className='col-md-5 col-12 box align-items-center flex-column d-flex '>
                <div className='logo col-4'>
                    <img alt='logo' src={ require("../assest/MaterialUI.png")} className='img-fluid' />
                </div>
                <div className='col-12 text text-center'>Material UI</div>
            </div>
        </motion.div>
    </div>
</div>
)
}

export default AboutAndSkills