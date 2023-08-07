import React from 'react';
import './imageTwo.css';

//ASSETS
import hh2 from '../../assets/imgs/hh2.jpg';
import hhCircle from '../../assets/imgs/hcircle-08.png';
import hhOfficeLogo from '../../assets/imgs/hhOfficeLogo.png'
import hhApp from '../../assets/imgs/mock-up-hand1.png';
import hhOffice from '../../assets/imgs/hhofficeLogoBlack.png'

//MATERIAL UI & OTHER
import { Parallax } from 'react-parallax';
import { Typography, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const ImageTwo = () => {
  return (
    <>
        {/* <Parallax className='hhcorp2' bgImage={hh2} strength={700}> */}
        <Box className='hhcorp2'>

        <Box className='hhCircleBox2'>
          <img className='hhCircle2' src={hhCircle} sx={{zIndex:'0'}}/>
        </Box>

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingLeft:'5rem', paddingTop:'20rem', paddingBottom:'15rem', paddingRight:'8rem'}}>

            {/* <Box className='v-line' sx={{minHeight:'5rem', maxHeight:'7rem'}}>
            </Box> */}

            <Typography variant='body1' sx={{color:'#fdfdfd', fontWeight:'300', fontSize:'1rem', letterSpacing:'0.25rem', lineHeight:'2rem', paddingRight:'3rem'}}>
            Transform your home into a smart, connected space with our innovative home automation app. HomeHub360 gives you full control of your home devices from the convenience of your smartphone, tablet or computer.
            <br></br><br></br>
            This way, you will just have one task to do in your home... <b>relax</b>.
            </Typography>

        </Box>

        {/* <Box className='appHandMockUpBox'>
              <img className='appHandMock' src={hhApp} alt='homehubApp'/>
            </Box> */}


        {/* HOMEHUB OFFICE SECTION */}
        <Box sx={{ bgcolor:'#f5f5f5',  display:'flex', justifyContent:'center', alignItems:'center', p:'5rem', boxShadow:'0px 0px 25px #10506B'}}>
            
            <img src={hhOfficeLogo} className='hhOfficeLogo'/>
            
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', gap:'2rem'}}>
              <Typography variant='body1' color='secondary' sx={{fontWeight:'300', fontSize:'1rem', letterSpacing:'0.25rem', lineHeight:'2rem', paddingRight:'3rem'}}>
                  Access the control of the different devices in your work areas thanks to our app designed fully for work environments: Homehub Office.
                  <br></br><br></br>
                  Hundreds of customers and businesses already rely on us to make their daily lives easier and more enjoyable.
              </Typography>

              <Box sx={{display:'flex', justifyContent:'start', alignItems:'flex-start', gap:'1rem', marginTop:'2rem'}}>
                <img src={hhOffice} className='hhOfficeBlackLogo' />

                <ArrowForwardIosIcon fontSize="large" sx={{alignSelf:'center'}}/>
              </Box>
            </Box>
        </Box>
        </Box>
    </>
  )
}

export default ImageTwo