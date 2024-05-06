import React from 'react'
import './css/NthChild.css';

const NthItems = [
    {
        name: ":first-child",
        class: "first-child"
    },
    {
        name: ":last-child",
        class: "last-child"
    },
    {
        name: ":nth-child(odd)",
        class: "nth-child-odd"
    },
    {
        name: ":nth-child(even)",
        class: "nth-child-even"
    },
    {
        name: ":nth-child(2)",
        class: "nth-child-3"
    },
    {
        name: ":nth:last-child(2)",
        class: "nth-last-child-2"
    }
]

const nums = [1,2,3,4,5,6]

const NthChild = () => {
  return (
    <div>
        <h1 className='text-center text-xl  font-bold'>Nth Child</h1>
        <div className='mt-10 flex items-center w-full flex-col'>
            {NthItems.map((item, index) => (
                <div key={index} className={`m-2 border p-3 rounded-md w-1/2 text-white flex items-center justify-between cursor-pointer  `}>
                    <div> {item.name} </div>
                    <div className={`flex items-center gap-4`}>
                        {nums.map((num,i) => (
                            <div key={num} className={`w-6 h-6 bg-white rounded-full text-black flex items-center justify-center ${item.class}`}>{num}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NthChild