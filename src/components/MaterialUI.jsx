import * as React from 'react';
import Button from '@mui/material/Button';
import '../assets/css/grid.scss'
import MusicCard from './MusicCard';
import bg_img from '../assets/img/bg_shadeColor.jpg'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MaterialUISwitch from './Switch';
// import {MaterialUISwitch} from '../components/Switch'



const MaterialUI = () => {

    
    return (
        <div className='container'
            style={{
                backgroundImage: `url(${bg_img})`,
                backgroundRepeat: 'no-repeat',
                height: '1080px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                
               
            <h1 className='title'>Material UI  <NotificationsActiveIcon onClick={() => console.log('Notification')}  /> </h1>
            <div style={{display: 'grid', placeContent: 'center'}} >
            <Button  sx={{marginTop: '40px'}} className='textError' style={{background: '#ff0000'}} variant="contained">Click Me!</Button>
            
                 <MusicCard  />
                <MaterialUISwitch/>
           
            </div>


        </div>
    );
}

export default MaterialUI;
