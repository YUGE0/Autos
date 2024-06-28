'use client'
import React, { useState } from 'react'

export default function Features() {
    const [features, setFeatures] = useState(" ");
    //console.log(features);
    
  return (
    <div className="py-5 flex justify-between gap-2">
        <div className="flex flex-col gap-2">
            <button className="p-5 bg-Fcolor w-40 text-xl hover:bg-white" onClick={()=>setFeatures("white")}>White</button>
            <button className="p-5 bg-Fcolor w-40 text-xl hover:bg-white" onClick={()=>setFeatures("Black")}>Black</button>
            <button className="p-5 bg-Fcolor w-40 text-xl hover:bg-white" onClick={()=>setFeatures("Blue")}>Blue</button>
        </div>
        {features==="Black" && <div className="w-full p-10 bg-black">yo</div>}
    </div>
  )
}
