import React from 'react';
import './footer.css';

import { Typography, Box, IconButton, Container, Grid } from '@mui/material';
import logoWhite from '../../assets/imgs/HH-whiteLogo-400.png';



const Footer = () => {
  return (
    <>
     <Box
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
        </Box>
    </>
  )
}

export default Footer