import './Navbar.css'
import ScrollIntoView from 'react-scroll-into-view'
import TemporaryDrawer from './MUI/Drawer';


function NavBar() {

return (
    <div className='container navbarcon'>
        <div  className='navbar p-0 d-flex justify-content-between row'>
        <div style={{color:"coral"}} className='logo col-6 p-0 text-center text-md-start'>
            YE
        </div>
        <ul  className={`links justify-content-end align-items-center m-0 fs-4 col-md-6 col-11 flex-md-row flex-column d-none d-md-flex`}>

            <ScrollIntoView  className='col-md-3 col-12 text-center my-md-0 my-3' selector='#home'>
            <li>Home</li>
            </ScrollIntoView>

            <ScrollIntoView className='col-md-3 col-12 text-center my-md-0 my-3' selector='#about'>
        <li>About</li>
            </ScrollIntoView>

            <ScrollIntoView  className='col-md-3 col-12 text-center my-md-0 my-3' selector='#portfolio'>
            <li >Projects</li>
            </ScrollIntoView>

            <ScrollIntoView  className='col-md-3 col-12 text-center my-md-0 my-3' selector='#contact'>
        <li>Contact</li>
            </ScrollIntoView>

            </ul>
            <div  className='d-md-none col-3 p-0 d-flex justify-content-center '>
                <TemporaryDrawer />
            </div>
    </div>
    </div>
)
}

export default NavBar