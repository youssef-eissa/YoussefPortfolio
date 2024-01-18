import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { StyledLinkDiv } from './styled/StyledLink'
import { motion } from 'framer-motion'
import ScrollIntoView from 'react-scroll-into-view'
import TemporaryDrawer from './antd/Menu'
function Navbar() {
    const NavBarRef=useRef(null)
    const variants = {
        start: {
            opacity: 0,
            y: -20,
        },
        animate: {
            opacity: 1,
            y:0,
        }
    }
    const [lastScroll, setScroll] = useState(0)

    function handleScroll() {
        const windowScroll = window.scrollY
        if (windowScroll > lastScroll+50) {
            NavBarRef.current.style.transform='translateY(-100%)'
            NavBarRef.current.style.transition = '0.3s'
            NavBarRef.current.style.position = 'fixed'
            NavBarRef.current.style.top = '0'
            setScroll(windowScroll)

        } else if (windowScroll+50 < lastScroll) {
            NavBarRef.current.style.transform='translateY(0)'
            NavBarRef.current.style.transition = '0.3s'
            NavBarRef.current.style.position = 'fixed'
            NavBarRef.current.style.top = '0'
            setScroll(windowScroll)
            
        } else if (windowScroll === 0 ||lastScroll === 0) {
            NavBarRef.current.style.transition = '0.3s'
            NavBarRef.current.style.position = 'relative'
            setScroll(windowScroll)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    })
    
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div ref={NavBarRef} className='p-0 navbar col-md-10 col-12  d-flex justify-content-cente align-items-center'>
                        <ScrollIntoView selector='#banner'>
                        <div className='logo ms-2 d-flex align-items-center justify-content-center'>
                        <h4 className=' d-flex align-items-center justify-content-center m-0'>Y</h4>
                        <div className='smallPolygon'></div>
                    </div>
                    </ScrollIntoView>
                    <div className='navlinks d-md-flex d-none col-9 d-flex justify-content-end align-items-center'>
                        <ScrollIntoView selector='#aboutSection' >
                            <motion.div id='about' initial='start' animate='animate' transition={{delay:0.1}} variants={variants} className='me-4'>
                            <span className='me-2'>01.</span>
                            About Me
                        </motion.div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#projects'>
                            <motion.div initial='start' animate='animate' transition={{delay:0.2}} variants={variants} className='me-4'>
                            <span className='me-2 col-3'>02.</span>
                            Projects
                        </motion.div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#contact'>
                            <motion.div initial='start' animate='animate' transition={{delay:0.3}} variants={variants} className='me-4 '>
                            <span className='me-2 '>03.</span>
                            Contact
                        </motion.div>
                        </ScrollIntoView>
                        <motion.div initial='start' animate='animate' transition={{delay:0.4}} variants={variants} className='col-1 '>
                            <StyledLinkDiv target={'_blank'} padding={'6px 16px'} to='https://drive.google.com/file/d/1MIFUbm4PygoLIanNEhK2LDigInJx1pYP/view?usp=drive_link' link='Resume'/>
                        </motion.div>
                    </div>
                    <div className='col-4 d-md-none d-flex justify-content-end'>
                        <TemporaryDrawer/>
                </div>
                </div>
            </div>
    </div>
)
}

export default Navbar