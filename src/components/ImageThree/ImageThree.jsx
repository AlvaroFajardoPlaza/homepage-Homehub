import React from 'react';
import './imageThree.css';
import { Parallax } from 'react-parallax';

import hh3 from '../../assets/imgs/hh3.jpg';
import hhSymbol2 from '../../assets/imgs/hhSymbol2.png'
import { Box, Typography } from '@mui/material';

const ImageThree = () => {
  return (
    <Parallax className='hhcorp3' bgImage={hh3} strength={700}>

        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

            <Typography variant='h6' sx={{lineHeight:'3.5rem', fontSize:'1.5rem', fontWeight:'300', color:'#ffffff', textAlign:'center',  paddingTop:'20rem', paddingLeft:'15rem', paddingRight:'15rem', letterSpacing:'0.3rem'}}>
                Simplify your everyday life and experience a new way of living in your home.
            </Typography>

            <img className='hhSymbol2' src={hhSymbol2} alt='homehubSymbol2' />

        </Box>

    </Parallax>
  )
}

export default ImageThree