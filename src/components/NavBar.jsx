import React from 'react';
import { WavyLink } from 'react-wavy-transitions';
import '../assets/css/navbar.scss'
const NavBar = () => {

    
    return (
        
        <nav>
           
            <WavyLink  to="/home" color="#ff44fd">
               <span>Home</span> 
            </WavyLink>
           
            <WavyLink to="/css" color="#8f44fd">
                <span>CSS</span> 
            </WavyLink>

            <WavyLink to="/wrap" color="#ee6055">
               <span>Wrap</span>
            </WavyLink>

            <WavyLink to="/grid" color="#ee4055">
                <span>Grid</span>   
            </WavyLink>

            <WavyLink to="/grid" color="#ee4055">
                <span>Grid</span>   
            </WavyLink>

            <WavyLink to="/grid" color="#ee4055">
                <span>Grid</span>   
            </WavyLink>
        </nav>
    
  
    );
}

export default NavBar;


