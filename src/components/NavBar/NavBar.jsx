import React from 'react';
import './navbar.css';

import hhLogoWhite from '../../assets/imgs/HH-whiteLogo-400.png';
import { Typography, Box, AppBar, Toolbar, Divider, List, ListItem, Button } from '@mui/material';

const navItems = [ 'application', 'services', 'support', 'team']

const NavBar = () => {
  return (
    <>
    <AppBar position='fixed' sx={{bgcolor:'#ffffff50'}}>
        <Toolbar sx={{width:'100%'}}>
          <img className='hhLogo' src={hhLogoWhite} alt='Homehub logo'/>

          <Divider />

          <List sx={{display:'flex'}}>
            { navItems.map( (item) => {
              return(
                <ListItem key={item} sx={{textTransform: 'uppercase', letterSpacing:'0.25rem', fontSize:'1rem'}}>
                  <Typography>{item}</Typography>
                </ListItem>
              )
            })}
          </List>

          <Divider />

          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'2rem'}}>
            <Button sx={{color:'white', fontSize:'1rem', textTransform: 'uppercase', letterSpacing:'0.25rem', p:'0.5rem', border:'1px solid #ffffff', borderRadius:'5rem'}}>REGISTER</Button>
            <Button sx={{color:'white', fontSize:'1rem', textTransform: 'uppercase', letterSpacing:'0.25rem', p:'0.5rem', border:'1px solid #ffffff', borderRadius:'5rem'}}>LOGIN</Button>
          </Box>

        </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar