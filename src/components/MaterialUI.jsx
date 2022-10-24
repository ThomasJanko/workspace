import * as React from 'react';
import Button from '@mui/material/Button';
import '../assets/css/grid.scss'
import MusicCard from './MusicCard';




const MaterialUI = () => {

    
    return (
        <div className='container'>
            <h1 className='title'>Material UI</h1>
            <div style={{display: 'grid', placeContent: 'center'}} >
            <Button sx={{marginTop: '40px'}} className='textError' style={{background: '#ff0000'}} variant="contained">Click Me!</Button>
            
                 <MusicCard  />
         
           
            </div>


        </div>
    );
}

export default MaterialUI;
