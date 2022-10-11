import React from 'react';
import { WavyLink } from 'react-wavy-transitions';
import '../assets/css/navbar.css'
const NavBar = () => {
    return (
        
        <nav>
            <WavyLink to="/home" color="#ff44fd">
                Home
            </WavyLink>
            <WavyLink to="/css" color="#8f44fd">
                CSS
            </WavyLink>
            <WavyLink to="/wrap" color="#ee6055">
                Wrap
            </WavyLink>
            <WavyLink to="/grid" color="#ee4055">
                Grid
            </WavyLink>
        </nav>
    
  
    );
}

export default NavBar;


