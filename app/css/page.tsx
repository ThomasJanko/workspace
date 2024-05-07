import React from 'react'
import './sibling_box.css';
import HoverBlur from '@/components/HoverBlur';
import FlexGrow from '@/components/FlexGrow';
import ImageSlider from '@/components/ImageSlider';
import NthChild from '@/components/NthChild';
import TextTruncate from '@/components/TextTruncate';
import CreditCard from '@/components/CreditCard';


const CssPage = () => {
  return (
    <div>
        <h1 className='text-center text-3xl text-primary font-bold'>CSS Page</h1>

        <div className='mt-10'>
           <HoverBlur />
        </div>

        <div className='border-b py-2' />
        
        <div className='mt-8 justify-center flex flex-col items-center'>
           <FlexGrow />
        </div>

        <div className='border-b py-2' />

        <div className='mt-8 justify-center flex flex-col items-center'>
            <ImageSlider />
        </div>

        <div className='border-b py-2' />

        <div className='mt-6'>
            <NthChild />
        </div>

        <div className='border-b py-2' />

        <div className='mt-6'>
            <TextTruncate />
        </div>

        <div className='border-b py-2' />
        
        <div className='mt-8'>
          <CreditCard />
        </div>
        
    </div>
  )
}

export default CssPage