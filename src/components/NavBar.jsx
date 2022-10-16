import React, { useEffect, useState } from 'react';
import { WavyLink } from 'react-wavy-transitions';
import '../assets/css/navbar.scss'
import { BurgerSpin as Burger } from 'react-burger-icons';

const NavBar = () => {

    const [isClosed, setIsClosed] = useState (false)
    // const [input, setInput] = useState('input');
    // const [body, setBody] = useState('body')
    const input = document.querySelector('input');
    const body = document.querySelector('body');

    const toggleDarkMode = () => {
        body.classList.toggle("dark");
     
    }

    const toggleMenu = () => {
        setIsClosed(!isClosed);
    }

   
    return (
        <>
         <span onClick={() => toggleMenu()} style={{width: '30px', height: '30px', paddingTop: '8px', marginTop: '10px', position: 'absolute'}} > 
                <Burger isClosed={!isClosed} /> 
        </span>
           
           {isClosed?
            <></>
            :
        <nav>
           
           <div  onClick={() => toggleMenu()} style={{width: '30px', height: '30px', paddingTop: '8px'}} > 
                <Burger isClosed={!isClosed} /> 
        </div>

            <label className='switch'>
                <input type="checkbox" onClick={toggleDarkMode}/>
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
    }
        </>
    );
}

export default NavBar;


