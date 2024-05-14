import { Icons } from '@/constants/icons.svg'
import React from 'react'
import './css/HoverIconCard.css'

const HoverIconCard = () => {

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <h2 className='text-xl font-bold'>HoverIconCard</h2>
        <div className='main'>
            {Icons.map((icon, index) => (
                <div key={index} className='card'>
                    {icon.icon}
                </div>
            ))}
             <p className="text">HOVER<br/><br/>FOR<br/><br/>SOCIAL</p>
            <div className="main_back"></div>
        </div>
    </div>
  )
}

export default HoverIconCard