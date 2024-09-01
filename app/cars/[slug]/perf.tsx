import Image from 'next/image'
import React from 'react'

export default function Per( per:{
  model:string,
  perpo:string,
  perpt:string,
  perimgo:string,
  perimgt:string,
}) 
{ 
  console.log(per.perimgo);
  
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center pt-10">
        <Image className="rounded-xl shadow-lg shadow-black" width={800} height={300} style={{height: 'auto', width:'auto'}} alt="" src={per.perimgo}/>
        <div className="px-10 w-[50rem]">
          <h1 className="font-bold text-2xl">AERODYNAMICS</h1>
          <p>{per.perpo}</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-10">
        <h1 className="px-10 w-[50rem]">{per.perpt}</h1>
        <Image className="rounded-xl shadow-lg shadow-black" width={800} height={300} style={{height: 'auto', width:'auto'}} alt="Aero" src={per.perimgo}/>
      </div>
    </div>
  )
}

