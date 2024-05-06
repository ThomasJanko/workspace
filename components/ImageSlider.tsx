import React from 'react'
import './css/ImageSlider.css';
import { images } from '@/app/constants';
const ImageSlider = () => {
  return (
    <div className='flex justify-center flex-col gap-3'>
        <h2 className='text-center font-bold text-xl'>ImageSlider</h2>
        <div className='items'>
            {images.map((image, index) => (
                <div key={index} tabIndex={0} className='item rounded-md' style={{ backgroundImage: `url(${image.url})` }}></div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider