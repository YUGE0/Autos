'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import arrow from "./Arrow.svg"

export default function Features() {
    const [features, setFeatures] = useState(" ");
    //console.log(features);
    
  return (
    <div className="justify-between gap-2">
      <div className="flex flex-wrap sm:flex-nowrap">
          <button className="px-5 w-72 rounded-r-lg" onClick={()=>setFeatures("Aerodynamics")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Aerodynamics</h1><Image alt="" className="py-2" src={arrow} width={50} height={50}/></div></button>
          <button className="px-5 w-72 rounded-r-lg" onClick={()=>setFeatures("Performence ")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Performence </h1><Image alt="" className="py-2" src={arrow} width={50} height={50}/></div></button>
          <button className="px-5 w-72 rounded-r-lg" onClick={()=>setFeatures("Construction")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Construction</h1><Image alt="" className="py-2" src={arrow} width={50} height={50}/></div></button>
      </div>
      {features==="Aerodynamics" && <div className="w-full p-10"><h1>{features}</h1></div>}
      {features==="Performence " && <div className="w-full p-10"><h1>{features}</h1></div>}
      {features==="Construction" && <div className="w-full p-10"><h1>{features}</h1></div>}
    </div>
  )
}
