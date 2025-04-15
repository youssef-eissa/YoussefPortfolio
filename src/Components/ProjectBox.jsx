import React from 'react'
import { ImgStyledDiv } from './styled/ImgStyledDiv'
import { Link } from 'react-router-dom'
import IosShareIcon from '@mui/icons-material/IosShare';
import { SocialIcon } from 'react-social-icons';


function ProjectBox({flex,img,link,projectDescription,projectTitle,github}) {
    return (
        <div className='container-fluid  mt-0 mt-md-5'>
            <div className='row'>
                <div className={`col-12 gap-md-0 gap-4 projectBox mt-4 mt-md-0 p-0 d-flex  ${flex} position-relative`}>
                    <div className='col-md-6 col-12 ProjectImgContainer'>
                        <Link target='_blank' to={link}>
                            <ImgStyledDiv width='100%' height='300px'>
                        <img alt='me' className='img-fluid h-100 w-100'src={img} />
                        </ImgStyledDiv>
                        </Link>
                    </div>
                    <div className={`col-md-6 col-12 ProjectInfoContainer d-flex flex-column ${flex==='flex-md-row-reverse flex-column'?'align-items-start':'align-items-md-end '} rightBox`}>
                        <span style={{ color: '#64FFDA' }}>Featured Project</span>
                        <h1 className='my-3'>{ projectTitle}</h1>
                        <p className='p-3  rounded'>{projectDescription}</p>
                        <div className={`col-12 d-flex  align-items-center ${flex==='flex-md-row-reverse flex-column'?'justify-content-start  ':'justify-content-md-end '}`}>
                        <Link target='_blank' to={link}>
                        <IosShareIcon  style={{color: '#A8b2d1'}}/>
                        </Link>
                        {github &&<SocialIcon bgColor='transparent' url={github} target='_blank' network='github' style={{color: '#A8b2d1'}}/>}

                    </div>
                    </div>
                 
                </div>
            </div>
    </div>
)
}

export default ProjectBox