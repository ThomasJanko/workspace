import React from 'react'

const TextTruncate = () => {
  return (
    <div className='flex justify-center flex-col gap-4'>
        <h2 className='text-center font-bold text-xl'>TextTruncate</h2>
        <div className='flex justify-center resize-x overflow-auto w-40 border mx-auto border-white rounded-md'>
            <span className='w-full overflow-hidden text-ellipsis text-nowrap px-2 py-1'>This is a very long text, so there are dots if width to small</span>
        </div>
    </div>
  )
}

export default TextTruncate