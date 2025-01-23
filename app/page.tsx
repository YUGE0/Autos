//import Image from "next/image";
import { notFound } from "next/navigation";
import Card from "./components/card";
import { createClient } from "@/supabase/client";


export const revalidate = 0;

export default async function Home() {
 
  // const product = [
  //   {
  //     id:0,
  //     url:"/LR_1.jpg",
  //     logo:"/lamborghini_Black.svg",
  //     name:"lamborghini",
  //     model:"Revolto",
  //     price:100000
  //   },
  //   {
  //     id:1,
  //     url:"/LU_2.jpg",
  //     logo:"/lamborghini_Black.svg",
  //     name:"Lamborgini",
  //     model:"Urus se",
  //     price:100000
  //   },
  // ];

  const supabase = createClient();

  const { data:product, error } = await supabase.from("autos")
  .select()

  const { data:topproduct, error:toperror } = await supabase.from("autos")
  .select().eq("boost",true)

  if(!product){return(notFound())}
  // if(!topproduct){return<p>Not Found</p>}
  //console.log({product})

  return (
    <main className="min-h-screen items-center justify-between p-2 sm:p-10 xl:p-20">
      <div className="w-full flex flex-wrap justify-center">
        <div className="p-10 items-center">
          <h1 className="text-4xl md:text-5xl font-bold">TOP SELLERS</h1>
          <p className="text-xl">This are the top sellers</p>
        </div>
        <div className="flex flex-wrap justify-around gap-8">  
          {topproduct && topproduct.map((pro) => (<Card key={`${pro.id}`} {...pro} url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${pro.url}`}/>))} 
        </div>
      </div>
      <div className="mt-10">
          <h1 className="uppercase text-4xl font-semibold">All Products</h1>
        <div className="flex flex-wrap gap-12 mt-10 justify-center"> 
          {product.map((pro) => (<Card key={`${pro.id}`} {...pro} url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/autos/${pro.url}`}/>))} 
        </div>
      </div>
      
    </main>
  );
}
