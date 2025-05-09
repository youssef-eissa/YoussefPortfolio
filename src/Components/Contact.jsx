import React from 'react'
import './contact.css'
import { StyledLinkDiv } from './styled/StyledLink'
import { StyledHeader } from './styled/StyledHeader';
function Contact() {
    return (
        <div className='container-md container-fluid pb-5'>
            <div className='row d-flex justify-content-center'>
                <div id='contact' className='col-lg-10 col-xl-11 col-12 contact d-flex flex-column'>
                    <StyledHeader ><span>04.</span>What’s Next?</StyledHeader>
                    <div className='col-12 d-flex flex-column align-items-center contactInnerBox'>
                        <h1 className='mt-5'>Get In Touch</h1>
                        <p className='col-md-7 col-12 text-center'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

                        <div className='col-md-2 col-6 mt-3'>
                        <StyledLinkDiv target={'_blank'} to='mailto:youssefeissa1812@gmail.com.com' padding={'18px'} link='Say Hello'/>
                    </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default Contact