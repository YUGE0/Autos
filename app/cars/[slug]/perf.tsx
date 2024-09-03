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
  return (
    <div className="mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center pt-10">
        <Image className="rounded-xl shadow-lg shadow-black" width={500} height={300} src={per.perimgo} style={{height: 'auto', width:'auto'}} alt="Aero"/>
        <div className="py-10 px-0 lg:px-10 lg:py-0 ">
          <h1 className="font-bold text-2xl">PERFORMENCE</h1>
          <p>{per.perpo}</p>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center pt-10">
        <h1 className="py-10 px-0 lg:px-10 lg:py-0">{per.perpt}</h1>
        <Image className="rounded-xl shadow-lg shadow-black" width={500} height={300} src={per.perimgt} alt="Aero" style={{height: 'auto', width:'auto'}}/>
      </div>
    </div>
  )
}

