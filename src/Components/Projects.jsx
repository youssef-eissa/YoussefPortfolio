import React from 'react'
import './Projects.css'
import { StyledHeader } from './styled/StyledHeader'
import ProjectBox from './ProjectBox'
import allocate from '../assest/allocate.png'
import hypershop from "../assest/hypershop.png"
import netflex from '../assest/netflix.png'
import cooclicious from '../assest/cooclicious.png'
import { StyledLinkDiv } from './styled/StyledLink'

function Projects() {
    return (
        <div className='container '>
            <div className='row d-flex justify-content-center'>
                <div id='projects' className='col-10 p-0 d-flex flex-column align-items-center projects'>
                    <StyledHeader className='d-flex me-auto'><span>02.</span>Some Things I’ve Built</StyledHeader>
                    <ProjectBox
                        Align={'align-items-end'}
                        img={allocate}
                        link={'https://allocate-realestate.vercel.app/'}
                        projectDescription='An integrated API website with sign in and sign up for users and admins for listing existing properties and allow users to sell their own properties by creating an account and ability to show information of every property separately.'
                        projectTitle={'Allocate Real Estate'}
                        iconsJustify={'justify-content-end'}
                        github='https://github.com/youssef-eissa/allocate-realestate'
                        flex={'flex-row'}
                    />
                    <ProjectBox
                        img={hypershop}
                        link={'https://hypershop-three.vercel.app'}
                        projectDescription='An integrated API website with login authentication for shopping online and allow users to discover all products by categories and ability to show information of every product separately.'
                        projectTitle={'Hypershop Online Store'}
                        iconsJustify={'justify-content-start'}
                        github='https://github.com/youssef-eissa/hypershop'
                        flex={'flex-row-reverse'}
                    />
                        <ProjectBox
                        Align={'align-items-end'}
                        img={netflex}
                        link={'https://netflix-clone-wine-one.vercel.app/'}
                        projectDescription='An integrated API Netflix clone with sign in for users to discover existing movies and series and allow users to all similar for movies and series and info of each one separately.'
                        projectTitle={'Netflix Clone'}
                        iconsJustify={'justify-content-end'}
                        github='https://github.com/youssef-eissa/netflix-clone'
                        flex={'flex-row'}
                    />
                    <ProjectBox
                        
                        img={cooclicious}
                        link={'https://cooclicious.vercel.app/'}
                        projectDescription='An integrated API website with login authentication for shopping online and allow users to discover all products by categories and ability to show information of every product separately.'
                        projectTitle={'Cooclicious Food Recipes'}
                        iconsJustify={'justify-content-start'}
                        github='https://github.com/youssef-eissa/cooclicious'
                        flex={'flex-row-reverse'}
                    />
                    <div className='col-md-2 col-6 mt-5'>
                        <StyledLinkDiv target={'_blank'} to='https://github.com/youssef-eissa?tab=repositories' padding={'20px 25px'} link='Show More!'/>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Projects