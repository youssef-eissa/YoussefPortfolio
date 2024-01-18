import React from 'react'
import { ImgStyledDiv } from './styled/ImgStyledDiv'
import { Link } from 'react-router-dom'
import IosShareIcon from '@mui/icons-material/IosShare';
import { SocialIcon } from 'react-social-icons';


function ProjectBox({flex,img,link,projectDescription,projectTitle,github}) {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className={`col-12 projectBox mt-4 mt-md-0 p-0 d-flex ${flex} position-relative`}>
                    <div className='col-md-6 col-12 ProjectImgContainer'>
                        <Link target='_blank' to={link}>
                            <ImgStyledDiv width='100%' height='300px'>
                        <img alt='me' className='img-fluid h-100 w-100'src={img} />
                        </ImgStyledDiv>
                        </Link>
                    </div>
                    <div className={`col-md-6 col-12 ProjectInfoContainer d-flex flex-column ${flex==='flex-row-reverse'?'align-items-start':'align-items-md-end'} rightBox`}>
                        <span style={{ color: '#64FFDA' }}>Featured Project</span>
                        <h1 className='my-3'>{ projectTitle}</h1>
                        <p className='p-3  rounded'>{projectDescription}</p>
                        <div className={`col-12 d-flex align-items-center ${flex==='flex-row-reverse'?'justify-content-start':'justify-content-md-end'}`}>
                        <Link target='_blank' to={link}>
                        <IosShareIcon  style={{color: '#A8b2d1'}}/>
                        </Link>
                        <SocialIcon bgColor='transparent' url={github} target='_blank' network='github' style={{color: '#A8b2d1'}}/>

                    </div>
                    </div>
                 
                </div>
            </div>
    </div>
)
}

export default ProjectBox