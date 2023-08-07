import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider } from '@mui/material';
import HomehubTheme from './HomehubContext/homehubTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={HomehubTheme}>
        <App />
    </ThemeProvider>
);
