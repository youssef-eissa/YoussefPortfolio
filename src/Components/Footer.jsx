import React from 'react'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer() {
return (
    <div style={{backgroundColor:"black"}} className='row p-5'>
        <div className='footer col-12 d-flex flex-column flex-md-row'>
            <div className='left mb-md-0 mb-4 col-md-6 col-12 d-flex justify-content-center'>
            <p className='col-12 text-center m-0' style={{fontSize:"24px"}}>Made <span style={{fontFamily:"'Dancing Script'"}}>With</span> <FavoriteIcon sx={{color:"red"}}/> By <span style={{fontStyle:"italic"}}>Youssef Eissa</span></p>
            </div>
            <div className='col-md-6 col-12 right d-flex justify-content-center'>
                <Link target='_blank' to='https://github.com/youssef-eissa' className='me-3'><GitHubIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "#171515", backgroundColor: "white" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://wa.me/1003003433' className='me-3'><WhatsAppIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "white", backgroundColor: "#25D366" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/youssef-eissa-875aa227b/' className='me-3'><LinkedInIcon className='rounded' fontSize='large' sx={{ color: "gray", "&:hover": { color: "#0072b1", backgroundColor: "white" }, transition: "0.3s" }} /></Link>
                <Link target='_blank' to='https://www.facebook.com/Youssef3issa' className='me-3'><FacebookIcon className='rounded' fontSize='large' sx={{ color: "gray","&:hover":{color:"#4267B2",backgroundColor:"white"},transition:"0.3s" }} /></Link>
            </div>
        </div>
    </div>
)
}

export default Footer