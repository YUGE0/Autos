import { createClient } from '@/supabase/client';
import { url } from 'inspector';
import Image from 'next/image';
import React from 'react'

export const revalidate = 0;

type Props = {
  params: {slug: string},
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data:product, error } = await supabase.from("autos").select()

  if(!product){return[]}
    
    return product.map((pro) => ({
      slug: pro.id,
    }))
  
  
}

export default async function Page({params}: Props) {

  const supabase = createClient();
  const { data:product, error } = await supabase.from("autos").select().match({id: params.slug}).single()
  const bgurl = `${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imgs}`
  //console.log(product)

  return (
    <div className="">
      <div className="p-10 flex justify-between items-center">
        <Image className="relative w-20" width={100} height={0} alt={product.cname} style={{objectFit: "cover"}} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.logo}`}/>
        <h1 className="text-5xl font-medium uppercase">{product.cname}</h1>
      </div>
      <div className=" bg-cover bg-no-repeat bg-clip-text bg-fixed bg-center" style={{backgroundImage: `url(${bgurl})`}}>
        <h1 className="py-10 font-black text-Fcolor text-center text-[1780%] text-opacity-30 uppercase">{product.model}</h1>
      </div>
      <div>
        <h1 className="px-24 py-2 text-5xl font-bold">EXTERIOR</h1>
        <div className="flex w-full justify-center">
          <Image className="w-fit relative" style={{objectFit:"cover"}} width={820} height={0} alt={product.model} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imgb}`}/>
          <Image className="w-fit relative" style={{objectFit:"cover"}} width={820} height={0} alt={product.model} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imgf}`}/>
        </div>
        <div className="py-10 flex justify-around">
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-xl">Top speed</h1><h1 className="text-[10rem] font-medium">{product.speed}</h1></div>
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-xl">Power</h1><h1 className="text-[10rem] font-medium">{product.power}</h1></div>
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-xl">0-100 KM/h</h1><h1 className="text-[10rem] font-medium">{product.time}</h1></div>
        </div>
        <h1 className="px-24 py-2 text-5xl font-bold text-right">INTERIOR</h1>
        <div className="flex w-full justify-center p-5">
          <Image className="w-fit" width={820} height={0} alt={product.model} style={{objectFit: "cover"}} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imginb}`}/>
          <Image className="w-fit" width={820} height={0} alt={product.model} style={{objectFit: "cover"}} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imginf}`}/>
        </div>
        <div className="p-20 w-full space-y-20">
          <div className="flex flex-wrap justify-between p-2"><h1 className="pr-10 text-6xl font-semibold">OVERVIEW</h1><h1 className="w-[75%] text-xl text-balance">{product.overview}</h1></div>
          <div className="flex flex-wrap justify-between p-2"><h1 className="w-[65%] text-xl text-balance">{product.description}</h1><h1 className="pr-10 text-6xl font-semibold">SPECIAL FEATURES</h1></div>
        </div>
        <div className="bg-contain bg-no-repeat bg-fixed bg-center" style={{backgroundImage: `url(${bgurl})`}}>
          <h1 className="py-10 font-black text-Fcolor text-center text-[25rem] text-opacity-0 uppercase">{product.price}</h1>
        </div>
      </div>
  </div>
  )
}
/* <div className="p-10">Name
      <div className="p-2 tNameext-5xl font-semibold">SPECS</div>
      <div className="py-10Name px-2 flex gap-10">
        <div className="w-fNameull">
          <Image className=Name"relative rounded-xl shadow-Fcolor shadow-xl" width={800} height={0} alt="Revolto" style={{objectFit: "cover"}} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imgs}`}/>
        </div>Name
        <div className="w-fNameull rounded-2xl shadow-FScolor shadow-xl p-10">
          <h1 className="teNamext-3xl font-semibold uppercase">{product.model}</h1>
          <div className="fNamelex gap-10 items-center">
            <Image classNamNamee="relative w-20" width={100} height={0} alt="Revolto" style={{objectFit: "cover"}} src={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.logo}`}/>
            <h1 className="text-5xl uppercase ">{product.cname}</h1>
          </div>
          <div className="p-10 flex justify-around">
            <div className="p-5 rounded-lg shadow-md shadow-Tcolor"><h1 className="text-5xl font-medium">{product.speed}</h1><h1 className="font-semibold">Top speed</h1></div>
            <div className="p-5 rounded-lg shadow-md shadow-Tcolor"><h1 className="text-5xl font-medium">{product.power}</h1><h1 className="font-semibold">Power</h1></div>
            <div className="p-5 rounded-lg shadow-md shadow-Tcolor"><h1 className="text-5xl font-medium">{product.time}</h1><h1 className="font-semibold">0-100 KM/h</h1></div>
          </div>
          <h1 className="text-4xl font-bold ">{product.price} $</h1>
        </div>
      </div>
    </div> */