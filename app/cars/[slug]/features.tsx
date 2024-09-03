'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import arrow from "./Arrow.svg"
import Aero from './aero';
import Build from './build';
import Perf from './perf';

export default function Features(feature: {
  model:string,
  aeropo:string,
  aeropt:string,
  aeroimgo:string,
  aeroimgt:string,
  perpo:string,
  perpt:string,
  perimgo:string,
  perimgt:string,
  conpo:string,
  conpt:string,
  conimgo:string,
  conimgt:string,
}) 
{
    const [features, setFeatures] = useState("");
    //console.log("Logging here: "+feature.perimgo);
    
  return (
    <div className="justify-between">
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
          {features==="Aerodynamics"?<button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Aerodynamics")}><div className="flex justify-between text-xl sm:text-3xl border-b-Fcolor border-b-2 font-semibold items-center"><h1 className="text-left">Aerodynamics</h1></div></button>:<button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Aerodynamics")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Aerodynamics</h1></div></button>}
          {features==="Performence"? <button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Performence")}><div className="flex justify-between text-xl sm:text-3xl border-b-Fcolor border-b-2 font-semibold items-center"><h1 className="text-left">Performence </h1></div></button>:<button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Performence")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Performence </h1></div></button>}
          {features==="Construction"?<button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Construction")}><div className="flex justify-between text-xl sm:text-3xl border-b-Fcolor border-b-2 font-semibold items-center"><h1 className="text-left">Construction</h1></div></button>:<button className=" w-72 rounded-r-lg" onClick={()=>setFeatures("Construction")}><div className="flex justify-between text-xl sm:text-3xl hover:border-b-Fcolor hover:border-b-2 hover:font-semibold items-center"><h1 className="text-left">Construction</h1></div></button>}
      </div>
      {features==="Aerodynamics" && <Aero {...feature} />}
      {features==="Performence" && <Perf {...feature}/>}
      {features==="Construction" && <Build {...feature}/>}
    </div>
  )
}
