import React from 'react';
import './footer.css';

import { Typography, Box, IconButton, Container, Grid } from '@mui/material';
import logoWhite from '../../assets/imgs/HH-whiteLogo-400.png';



const Footer = () => {
  return (
    <>
        <Box className='hhFooter' sx={{p:'1rem'}}>
          
          
          <section>
              <img
                src={logoWhite}
                className='hhLogo' 
                title='HomehubLogo' 
                alt='Logo'
                />


              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'center', marginLeft:'-6rem'}}>
              <span className='socialLinks' >
                <a>
                  <img
                    src='https://cdn.icon-icons.com/icons2/3406/PNG/512/instagram_logo_icon_216343.png'
                    title='Instagram'
                    alt='Instagram'   
                    />
                </a>
                <a>
                  <img
                    src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'
                    title='Facebook'
                    alt='Facebook'   
                    />
                </a>
                {/* <a>
                  <img
                    src='https://blog.waalaxy.com/wp-content/uploads/2021/01/index.png'
                    title='Linkedin'
                    alt='Linkedin'   
                    />
                </a> */}
              </span>
              </Box>
          </section>

          <section>
            <menu>
              <Typography variant='h5' sx={{textAlign:'left', color:'#fdfdfd', marginBottom:'1rem', fontSize:'1.5rem', fontWeight:'300'}}>Homehub Cloud</Typography>
              <li>
                <a>Data Cloud</a>
              </li>
              <li>
                <a>Clients Private Area</a>
              </li>
              <li>
                <a>Configuration & Documentation</a>
              </li>
            </menu>
          </section>

          <section>
            <menu>
              <Typography variant='h5' sx={{textAlign:'left', color:'#fdfdfd', marginBottom:'1rem', fontSize:'1.5rem', fontWeight:'300'}}>Homehub Company</Typography>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Work with us</a>
              </li>
            </menu>
          </section>
        </Box>

        <Box className='hhFooter' sx={{paddingBottom:'.5rem'}}>
          <section classname='footerBottom'>
              <Typography variant='body1' sx={{fontWeight:'100', fontSize:'1rem', letterSpacing:'.15rem'}}>© Homehub - Living life a simpler way. 2023 All rights reserved</Typography>
          </section>
        </Box>
        
    </>
  )
}

export default Footer


{/* <Box
        className='hhFooter'
          component="footer"
          sx={{
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>

              <Grid item xs={12} sm={4}>
                <img className='logoFooter' src={logoWhite} alt='HomeHubLogo' />
                <Typography variant="body2" color="secondary" sx={{letterSpacing:'.15rem', my:'1rem'}}>
                  Living life in a simpler way.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom sx={{color:'#ffffff', fontWeight:'400'}}>
                  Get in touch with us 
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{letterSpacing:'.15rem', my:'.25rem'}}>
                  123 anywhere, Spain 
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{letterSpacing:'.15rem', my:'.25rem'}}>
                  Email: info@homehub.com
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{letterSpacing:'.15rem', my:'.25rem'}}>
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>
            </Grid>

            </Container>
        </Box> */}
