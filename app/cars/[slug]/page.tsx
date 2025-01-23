import { createClient } from '@/supabase/client';
import { url } from 'inspector';
import Image from 'next/image';
import React from 'react';
import Features from './features';
import SoudPlayer from './soud';

export const revalidate = 0;

type Props = {
  params: {slug: string},
}

export async function generateStaticParams() {

  const supabase = createClient();
  const { data:product } = await supabase.from("autos").select()

  if(!product){return[]}
    
    return product.map((pro) => ({
      slug: pro.id,
    }))
  
  
}

export default async function Page({params}: Props) {

  const supabase = createClient();
  const { data:product } = await supabase.from("autos").select().match({id: params.slug}).single()
  const { data:aero } = await supabase.from("aero").select().match({model: product.model}).single()
  const { data:per } = await supabase.from("per").select().match({model: product.model}).single()
  const { data:con } = await supabase.from("con").select().match({model: product.model}).single()
  //console.log(aero);
  
  const bgurl =`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${product.imgs}`;

  return (
    <div className="">
      <div className="p-10 flex justify-between items-center">
        <Image className="relative w-10 sm:w-20" width={100} height={0} alt={product.cname} style={{objectFit: "cover"}} src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.logo}`}/>
        <h1 className="text-4xl sm:text-5xl font-medium uppercase">{product.cname}</h1>
      </div>
      <div className=" bg-cover bg-no-repeat bg-clip-text bg-fixed bg-center" style={{backgroundImage: `url(${bgurl})`}}>
        <h1 className="py-10 font-black text-Fcolor text-center leading-loose xl:text-[1780%] md:text-[1050%] sm:text-[880%] text-[400%] text-opacity-30 uppercase">{product.model}</h1>
      </div>
      <div className="p-1 sm:p-0">
        <h1 className="xl:ml-44 md:ml-16 py-1 text-3xl sm:text-5xl font-bold">EXTERIOR</h1>
        <div className="flex flex-wrap w-full justify-center">
          <Image className="w-fit" style={{objectFit:"cover"}} width={700} height={0} alt={product.model} src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.imgf}`}/>
          <Image className="w-fit" style={{objectFit:"cover"}} width={700} height={0} alt={product.model} src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.imgb}`}/>
        </div>
        <div className="py-10 flex flex-wrap sm:flex-nowrap justify-around">
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-sm md:text-xl">Top speed</h1> <h1 className="xl:text-[10rem] md:text-8xl text-6xl font-medium">{product.speed}</h1></div>
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-sm md:text-xl">Power</h1>     <h1 className="xl:text-[10rem] md:text-8xl text-6xl font-medium">{product.power}</h1></div>
          <div className="p-5 rounded-lg shadow-Tcolor"><h1 className="font-semibold text-sm md:text-xl ordinal">0-100KM/h</h1><h1 className="xl:text-[10rem] md:text-8xl text-6xl font-medium">{product.time}</h1></div>
        </div>
        <h1 className="xl:mr-44 md:mr-16 py-1 text-3xl sm:text-5xl font-bold text-right">INTERIOR</h1>
        <div className="flex flex-wrap w-full justify-center">
          <Image className="w-fit" width={700} height={0} alt={product.model} style={{objectFit: "cover"}} src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.imginb}`}/>
          <Image className="w-fit" width={700} height={0} alt={product.model} style={{objectFit: "cover"}} src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.imginf}`}/>
        </div>
        <div className="p-10 sm:p-20 md:p-40  w-full space-y-12">
          <div className="p-2"><h1 className="pr-10 text-5xl font-semibold">OVERVIEW</h1><h1 className="mt-10 text-xl text-balance">{product.overview}</h1></div>
          {aero!==null && <h1 className="text-6xl font-semibold">FEATURES</h1>}
          {aero!==null? <Features key={aero.id} {...aero} {...per} {...con}
            aeroimgo={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${aero.aeroimgo}`} 
            aeroimgt={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${aero.aeroimgt}`} 
            perimgo={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${per.perimgo}`} 
            perimgt={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${per.perimgt}`}
            conimgo={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${con.conimgo}`} 
            conimgt={`${process.env.SUPABASE_URL}/storage/v1/object/public/autos/${con.conimgt}`}/>
            :null}
        </div>
        <div className="p-1 sm:p-10">
        {product.sound && <SoudPlayer so={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${product.sound}`}/>}
        </div>
        <div className="bg-cover bg-no-repeat bg-fixed bg-center " style={{backgroundImage: `url(${bgurl})`}}>
          <h1 className="font-black text-center h-[40rem] text-[8rem] md:text-[10rem] lg:text-[12rem] text-transparent uppercase">{product.model}</h1>
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