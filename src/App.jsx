import React from 'react';
import './App.css';

//Importamos los componentes
import ImageOne from './components/ImageOne/ImageOne';
import NavBar from './components/NavBar/NavBar';
import ImageTwo from './components/ImageTwo/ImageTwo';
import ImageThree from './components/ImageThree/ImageThree';

function App() {


  return (
    <>
      <NavBar />
      <ImageOne />
      <ImageTwo />
      <ImageThree />
    </>
  )
}

export default App
