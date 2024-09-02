import Image from 'next/image'
import React from 'react'


export default function Aero(aerodynamics: {
  model:string,
  aeropo:string,
  aeropt:string,
  aeroimgo:string,
  aeroimgt:string,
}) 
{
  return (
    <div className="mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center pt-10">
        <Image className="rounded-xl shadow-lg shadow-black" width={500} height={300} src={aerodynamics.aeroimgo} style={{height: 'auto', width:'auto'}} alt="Aero"/>
        <div className="py-10 px-0 lg:px-10 lg:py-0 ">
          <h1 className="font-bold text-2xl">AERODYNAMICS</h1>
          <p>{aerodynamics.aeropo}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center pt-10">
        <h1 className="px-10">{aerodynamics.aeropt}</h1>
        <Image className="rounded-xl shadow-lg shadow-black" width={800} height={300} alt="Aero" style={{height: 'auto', width:'auto'}} src={aerodynamics.aeroimgt}/>
      </div>
    </div>
  )
}
