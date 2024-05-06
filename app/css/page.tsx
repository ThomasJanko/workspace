import React from 'react'
import './sibling_box.css';

const CssPage = () => {
  return (
    <div>
        <h1 className='text-center text-3xl text-primary font-bold'>CSS Page</h1>

        <div className='mt-10'>
            <div className='container justify-center flex gap-4 items-center'>
                {(new Array(6)).fill(0).map((index) => (
                    <div key={index} className="box w-20 h-20 bg-purple-600 rounded-md"></div>
                ))}
            </div>
            
        </div>
        
        <div className='mt-8'>
            <h2 className=''>FLEX</h2>
            <div className='border-blue-900 border p-4 rounded-md flex gap-3 justify-center'>
                {(new Array(6)).fill(0).map((index) => (
                    <div key={index} className="box w-20 h-20 bg-red-600 rounded-md"></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CssPage