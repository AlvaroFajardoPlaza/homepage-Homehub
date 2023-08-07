import React from 'react';
import { createTheme } from '@mui/material';

const HomehubTheme = createTheme({
  palette: {
    primary: {main: '#B3568E', light: '#CC8FB3'},
    secondary: {main: '#082936', light: '#10506B'},
    info: {main: '#FCAF49'}
},
typography: {
    fontFamily: [
          'Work sans',
          'Helvetica Neue',
    ].join(','),
},
});

export default HomehubTheme