import React, { useEffect, useState } from 'react';
const CSS = () => {

    const [volume, setVolume] = useState({target:{value: 50}});

    // useEffect(() => {
    //     console.log(volume)
    // }, [volume]);
    
    return (
        <div className='container'>
            <h1 className='title'>CSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</h1>
            <div className='div_center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt="" />
                
            <input style={{width: '90%'}}  type="range" id='volume' name='volume' min='0' max='100%'   step='1' onChange={(e) => setVolume(e)} />
           {volume.target? volume.target.value : '' }%
            </div>


        </div>
    );
}

export default CSS;
