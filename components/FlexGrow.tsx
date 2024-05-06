import React from 'react'

const FlexGrow = () => {
  return (
    <>
        <h2 className=''>FLEX</h2>
        <div className='hover:bg-black border-blue-900 w-1/2 border border-solid p-4 rounded-md flex flex-wrap gap-3 justify-center resize overflow-auto items-center'>
            {(new Array(6)).fill(0).map((index) => (
                <div key={index} className="box h-20 bg-red-600 rounded-md flex-grow basis-20"></div>
            ))}
        </div>
    </>
  )
}

export default FlexGrow