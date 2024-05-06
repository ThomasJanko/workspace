"use client";

import RobotHead from '@/components/spline/RobotHead';
import React, { Suspense } from 'react'
const Chips = React.lazy(() => import('@/components/spline/Chips'));

const ModelsPage = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute left-0 top-0 w-screen h-screen overflow-hidden'>
          <RobotHead />
          </div>
        <h1 className='text-center text-3xl text-primary font-bold'>Models Page</h1>
        <div className='flex items-center flex-wrap mt-10'>
          
          <div className='flex-grow basis-1/2 rounded-md p-4 h-40 w-40'>
          </div>
          <div className='flex-grow basis-1/2'>
            <Suspense fallback={<div>Loading...</div>}>
              <Chips />
            </Suspense>
          </div>
        </div>
    </div>
  )
}

export default ModelsPage