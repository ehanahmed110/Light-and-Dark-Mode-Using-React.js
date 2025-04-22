import React from 'react'
import { useState } from 'react';

export function Mode() {
    const [mode, setMode] = useState("🌞")
  
    const Light =()=>{
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black";
     setMode ("🌞");
    }
    const Dark =()=>{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        setMode ("🌙");
    }

    return (
        <>
             <div id='body' className="h-screen md:flex justify-center items-center">
               <div >
                <h2 className="text-4xl font-semibold pb-4">Current Mode:{mode}</h2>
                <p className='pb-4'>this box is designed for light and dark mode</p>
                  <div className='flex space-x-6'>
                    <button onClick={Light} className="px-4 py-2 bg-gray-200 rounded">Light Mode</button>
                    <button onClick={Dark}  className="px-4 py-2 bg-gray-800 text-white rounded"> Dark Mode</button>
                  </div>
               </div>
           </div> 
        </>
    )
}
