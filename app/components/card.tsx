import React from "react";
import Image from "next/image";
import { url } from "inspector";
import Link from "next/link";
//import Ig from ""


export default function Card(prop: 
    {   id:number;
        url:string;
        logo:string;
        cname:string;
        model:string;
        price:number;
        description:string;
    })
{

    return(
        <Link className="hover:shadow-lg shadow-md shadow-Scolor hover:shadow-Fcolor/80 rounded-xl" href={`/cars/${prop.id}`}>
        <div key={prop.id} className="w-96">
            <div className="h-64 p-10 relative"><Image className="rounded-t-xl" style={{objectFit: "cover"}} fill src={prop.url} alt="Image"/></div>
            <div className="rounded-b-xl w-full p-4 ">
                <div className="flex justify-between pb-4 items-start hover:animate-pulse">
                    <Image className="w-8 relative" width={0} height={0} alt="Revolto" style={{objectFit: "cover"}} src={prop.logo}/>
                    <div className="text-2xl font-semibold uppercase">{prop.cname}</div>
                </div>
                <div>
                    <h1 className="truncate py-2">{prop.description}</h1>
                </div>
                <div className="flex justify-between items-baseline">    
                    <div className="uppercase text-xl font-medium">{prop.model}</div>
                    <div className="">{prop.price} $</div>
                </div>
            </div>
        </div>
        </Link>
    )
}