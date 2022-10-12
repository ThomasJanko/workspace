import React from 'react';
import { WavyLink } from 'react-wavy-transitions';
import '../assets/css/navbar.scss'
const NavBar = () => {

    const input = document.querySelector('input');
    const body = document.querySelector('body');

    const toggleDarkMode = () => {
        body.classList.toggle("dark")
    }

    input.onchange = toggleDarkMode;
    return (
        
        <nav>

            <label className='switch'>
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>
           
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


