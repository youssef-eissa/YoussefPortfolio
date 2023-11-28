import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { Twirl as Hamburger } from 'hamburger-react'
import ScrollIntoView from 'react-scroll-into-view'


export default function TemporaryDrawer() {
const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
    <Box
        sx={{ width:  350 ,backgroundColor:'#ff7f5038',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <div className='col-12'>
            <ScrollIntoView style={{color:'black',fontSize:'1.5rem',fontFamily:'Bebas Neue'}} className=' col-12 text-center my-md-0 my-3' selector='#home'>
                <li>Home</li>
                    </ScrollIntoView>

            <ScrollIntoView style={{color:'black',fontSize:'1.5rem',fontFamily:'Bebas Neue'}} className=' col-12 text-center my-md-0 my-3' selector='#about'>
                <li>About</li>
            </ScrollIntoView>

            <ScrollIntoView style={{color:'black',fontSize:'1.5rem',fontFamily:'Bebas Neue'}} className='col-md-3 col-12 text-center my-md-0 my-3' selector='#portfolio'>
                <li >Projects</li>
            </ScrollIntoView>

            <ScrollIntoView style={{color:'black',fontSize:'1.5rem',fontFamily:'Bebas Neue'}} className='col-md-3 col-12 text-center my-md-0 my-3' selector='#contact'>
                <li>Contact</li>
            </ScrollIntoView>
        </div>
        </List>
      
    </Box>
);

    return (
    <div>
        {['left' ].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><Hamburger toggled={state[anchor]} color='coral'/></Button>
            <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            >
            {list(anchor)}
            </Drawer>
        </React.Fragment>
    ))}
    </div>
);
}