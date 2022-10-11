import React, { useEffect, useState } from 'react'
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



const App = () => {
  return (
    <BrowserRouter>
      <WavyContainer/>
      <Routes>
        <Route path='/' element={<><NavBar/> <Main/></>} >
          <Route path='/home' element={<HomeScreen/>} />
          <Route path='/css' element={<CSS/>} />
          <Route path='/wrap' element={<Wrap/>} />
          <Route path='/grid' element={<Grid/>} />
        </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
