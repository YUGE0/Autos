import React from 'react'
import Image from 'next/image'

export default function Build( con:{
  model:string,
  conpo:string,
  conpt:string,
  conimgo:string,
  conimgt:string,
}) 
{ 
  return (
    <div className="mt-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center pt-10">
        <Image className="rounded-xl shadow-lg shadow-black" width={500} height={300} src={con.conimgo} style={{height: 'auto', width:'auto'}} alt="Aero"/>
        <div className="py-10 px-0 lg:px-10 lg:py-0 ">
          <h1 className="font-bold text-2xl">CONSTRUCTION</h1>
          <p>{con.conpo}</p>
        </div>
      </div>
      {con.conimgt!==null && <div className="flex flex-wrap lg:flex-nowrap justify-between items-center pt-10">
        <h1 className="py-10 px-0 lg:px-10 lg:py-0">{con.conpt}</h1>
        <Image className="h-96 rounded-xl shadow-lg shadow-black" width={500} height={300} src={con.conimgt} alt="" style={{height: 'auto', width:'auto'}}/>
      </div>}
    </div>
  )
}