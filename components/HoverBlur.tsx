import React from 'react'

const HoverBlur = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='containe justify-center w-fit flex gap-4'>
            {(new Array(6)).fill(0).map((index) => (
                <div key={index} className="box w-20 h-20 bg-purple-600 rounded-md"></div>
            ))}
        </div>
    </div>
  )
}

export default HoverBlur