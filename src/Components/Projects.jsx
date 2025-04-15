import React from 'react'
import './projects.css'
import ProjectBox from './ProjectBox'
import lemaschou from '../assest/lemaschou.png'
import pixel from "../assest/pixel.png"
import amtalek from '../assest/amtalek.png'
import cooclicious from '../assest/cooclicious.png'
import { StyledLinkDiv } from './styled/StyledLink'
import { StyledHeader } from './styled/StyledHeader'

function Projects() {
    return (
        <div className='container-md container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div id='projects' className='col-lg-10 col-xl-11 col-12 p-0 d-flex flex-column align-items-center projects'>
                    <StyledHeader className='d-flex me-auto'><span>02.</span>Some Things I’ve Built</StyledHeader>
                    <ProjectBox
                        Align={'align-items-end'}
                        img={lemaschou}
                        link={'https://www.lemaschou.sa/en'}
                        projectDescription='Le Maschou is a modern, responsive restaurant website built with
                        Next.js and Tailwind CSS. Designed for a Saudi Arabian venue, it
                        features a stunning landing page, a venue showcase, and a detailed
                        menu. The site is optimized for performance and SEO, offering users a
                        smooth and immersive experience.'
                        projectTitle={'Le Maschou restaurant'}
                        iconsJustify={'justify-content-end'}
                        flex={'flex-md-row flex-column'}
                    />
                    <ProjectBox
                        img={pixel}
                        link={'https://www.pixelcrafters.tech/en'}
                        projectDescription='A modern and dynamic Next.js website showcasing Pixel Crafters expertise. With a sleek design and seamless navigation, it features essential pages: Home, Services, About Us, Projects, and Careers,
                        ensuring an engaging user experience.'
                        projectTitle={'Pixel Crafters Portfolio'}
                        iconsJustify={'justify-content-start'}
                        flex={'flex-md-row-reverse flex-column'}
                    />
                        <ProjectBox
                        Align={'align-items-end'}
                        img={amtalek}
                        link={'https://www.amtalek.com/en'}
                        projectDescription='Amtalek allows users to create personal accounts and provides an upcoming social media platform showcasing a large scale of properties and projects. Additionally, Amtalek offers various subscription packages to cater to different user needs.'
                        projectTitle={'Amtalek Real Estate Website'}
                        iconsJustify={'justify-content-end'}
                        flex={'flex-md-row flex-column'}
                    />
                    <ProjectBox
                        
                        img={cooclicious}
                        link={'https://cooclicious.vercel.app/'}
                        projectDescription='An integrated API website with login authentication for shopping online and allow users to discover all products by categories and ability to show information of every product separately.'
                        projectTitle={'Cooclicious Food Recipes'}
                        iconsJustify={'justify-content-start'}
                        github='https://github.com/youssef-eissa/cooclicious'
                        flex={'flex-md-row-reverse flex-column'}
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