import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Sling as Hamburger } from 'hamburger-react'
import '../Navbar.css'
import ScrollIntoView from 'react-scroll-into-view'
import { motion } from 'framer-motion';
import { StyledLinkDiv } from '../styled/StyledLink';
import { SocialIcon } from 'react-social-icons';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';




export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
    left: false,
    });
  
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    const list = (anchor) => (
    <Box
      sx={{ width:  300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='d-flex p-0 navlinks flex-column align-items-center justify-content-center' style={{backgroundColor: '#0A1930', color: 'white',height: '100vh'}}>
          <ScrollIntoView selector='#aboutSection' >
                            <motion.div id='about' initial='start' animate='animate' transition={{delay:0.1}} variants={variants} className=' d-flex flex-column align-items-center'>
                            <span className='mb-2 '>01.</span>
                            About Me
                        </motion.div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#projects'>
                            <motion.div initial='start' animate='animate' transition={{delay:0.2}} variants={variants} className=' my-3 d-flex flex-column align-items-center'>
                            <span className='mb-2 col-3'>02.</span>
                            Projects
                        </motion.div>
                        </ScrollIntoView>
                        <ScrollIntoView selector='#experience'>
                            <motion.div initial='start' animate='animate' transition={{delay:0.3}} variants={variants} className='d-flex flex-column align-items-center '>
                            <span className='mb-2 '>03.</span>
                           My Experience
                        </motion.div>
                    </ScrollIntoView>
                    <ScrollIntoView selector='#contact'>
                            <motion.div initial='start' animate='animate' transition={{delay:0.3}} variants={variants} className='d-flex flex-column align-items-center '>
                            <span className='mb-2 '>04.</span>
                            Contact
                        </motion.div>
                    </ScrollIntoView>
                    <motion.div initial='start' animate='animate' transition={{delay:0.4}} variants={variants} className='col-5 mt-3 '>
                      <StyledLinkDiv target={'_blank'} padding={'6px 16px'} to='https://drive.google.com/file/d/1MIFUbm4PygoLIanNEhK2LDigInJx1pYP/view?usp=drive_link' link='Resume'/>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className=' d-flex justify-content-around mt-5 col-12 '>
                        <SocialIcon target='_blank' url='https://github.com/youssef-eissa' className='icon rounded mb-3' network='github' bgColor='transparent' />
                        
                        <SocialIcon target='_blank' className='icon rounded' network='linkedin' bgColor='transparent' url='https://www.linkedin.com/in/youssef-eissa1812' />
                        
                        <SocialIcon  target='_blank' className='icon rounded ' network='whatsapp' bgColor='transparent' url='https://wa.me/+201003003433?text=Hi,I%27m%20interested%20in%20your%20portfolio' />
                        
                      
                        <Link target='_blank' to='tel:+201003003433' className='icon rounded mb-3  d-flex justify-content-center align-items-center'>
                                              <BiPhoneCall  size={25}  color='white' />
                                              </Link>
                        
                    </motion.div>
                    <Link className='mailLink me-3' to={"mailto:Youssefeissa1812@gmail.com"}>Youssefeissa1812@gmail.com</Link>

            
      </List>
     
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Hamburger color='#64FFDA' size={20} toggled={state[anchor]} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{zIndex: 1321321321}}
          >
            
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}