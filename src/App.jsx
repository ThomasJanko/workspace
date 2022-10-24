import React, { useEffect, useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
import { WavyContainer } from 'react-wavy-transitions';
import CSS from './components/CSS';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import Main from './Main';
import './assets/css/global.scss'
import Wrap from './components/Wrap';
import Grid from './components/Grid';
import MaterialUI from './components/MaterialUI';







const App = () => {
  <>
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
</>
  return (
    
    <BrowserRouter>
      <WavyContainer/>
      <Routes>
        <Route path='/' element={<><NavBar/> <Main/></>} >
          <Route path='/home' element={<HomeScreen/>} />
          <Route path='/css' element={<CSS/>} />
          <Route path='/wrap' element={<Wrap/>} />
          <Route path='/grid' element={<Grid/>} />
          <Route path='/materialUI' element={<MaterialUI/>} />
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

