import React from 'react';
import './imageOne.css';

//ASSETS
import hh1 from '../../assets/imgs/hh1.jpg';
import hhCircle from '../../assets/imgs/hcircle-08.png';
import hhLogoWhite from '../../assets/imgs/HH-whiteLogo-400.png';

//MATERIAL & OTHER IMPORTS
import { Typography, Box, Container, Grid } from '@mui/material';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import FlareIcon from '@mui/icons-material/Flare';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import SecurityIcon from '@mui/icons-material/Security';
import { Parallax } from 'react-parallax';



const ImageOne = () => {
  return (
    <>
      <Parallax className='hhcorp1' bgImage={hh1} strength={600}>


        <Box className='hhCircleBox'>
          <img className='hhCircle' src={hhCircle} />
        </Box>

        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', marginTop:'5rem', zIndex:'100',}}>

          <img src={hhLogoWhite} alt='Homehub Logo' />
          <Typography variant='h2' sx={{color:'#ffffff', fontSize:'1rem', fontWeight:'100', padding:'2rem', letterSpacing:'0.3rem'}}>Living life in a simpler way</Typography>

        </Box>

        <Container>
        <Grid container spacing={4} sx={{marginBottom:'12rem', marginTop:'4rem'}}>

          <Grid item xs={6} sm={6} lg={3}>
            <Box className='benefitCard' sx={{height:'250px', bgcolor:'#ffffff40', borderRadius:'1rem', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B4D', color:'#f5f5f5', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <FlareIcon fontSize='large' variant='' sx={{color:'#ffffff'}}></FlareIcon>
              <Typography variant='h5' sx={{letterSpacing:'0.3rem', textAlign:'center', fontWeight:'300', fontSize:'1.2rem'}}>ENERGY SAVINGS</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <Box className='benefitCard' sx={{height:'250px', bgcolor:'#ffffff40', borderRadius:'1rem', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B4D', color:'#f5f5f5', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <SettingsPowerIcon fontSize='large' sx={{color:'#ffffff'}}></SettingsPowerIcon>
              <Typography variant='h5' sx={{letterSpacing:'0.3rem', textAlign:'center', fontWeight:'300', fontSize:'1.2rem'}}>INTUITIVE CONTROLS</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <Box className='benefitCard' sx={{height:'250px', bgcolor:'#ffffff40', borderRadius:'1rem', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B4D', color:'#f5f5f5', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <SecurityIcon fontSize='large' sx={{color:'#ffffff'}}></SecurityIcon>
            <Typography variant='h5' sx={{letterSpacing:'0.3rem', textAlign:'center', fontWeight:'300', fontSize:'1.2rem'}}>ADVANCED SECURITY</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} lg={3}>
            <Box className='benefitCard' sx={{height:'250px', bgcolor:'#ffffff40', borderRadius:'1rem', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B4D', color:'#f5f5f5', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <ControlCameraIcon fontSize='large' sx={{color:'#ffffff'}}></ControlCameraIcon>
              <Typography variant='h5' sx={{letterSpacing:'0.3rem', textAlign:'center', fontWeight:'300', fontSize:'1.2rem'}}>INTELLIGENT DEVICES</Typography>
            </Box>
          </Grid>

        </Grid>
        </Container>


        {/* FRANJA BLANCA */}
        <Box sx={{bgcolor:'#f5f5f5', height:'4rem', textTransform:'uppercase', display:'flex', alignItems:'center', justifyContent:'space-between', p:'2rem', letterSpacing:'0.25rem', boxShadow:'0px 0px 50px #10506B'}}>
          <Typography variant='h6' sx={{fontWeight:'300'}}>in the palm of your hand,</Typography>
          <Typography variant='h6' sx={{textAlign:'right', fontWeight:'300'}}>at any time...</Typography>
        </Box>

      </Parallax>
    </>
  )
}

export default ImageOne