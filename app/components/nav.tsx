import Link from "next/link";
import React from "react";

export default function Nav(){
    return(
        <div className="flex justify-between p-6 w-full shadow-Scolor shadow-sm text-white">
            <Link className="text-Fcolor font-bold text-4xl" href="/">Auto</Link>
            <Link className="self-center text-FFcolor font-bold text-2xl" href="/sell">Upload  </Link>
        </div>
    )
}