'use client'
import { Divz } from 'divz';
import React from 'react'

export default function Divzimg() {
  const product = [
    {id:1,url:"/LR_1.jpg"},
    {id:2,url:"/LR_2.jpg"},
    {id:3,url:"/LR_3.jpg"},
    {id:4,url:"/LR_4.jpg"},
    {id:5,url:"/LR_5.jpg"},
    {id:6,url:"/LRI_1.jpg"},
    {id:7,url:"/LRI_2.jpg"},
    {id:8,url:"/LU_2.jpg"},
    {id:9,url:"/LU_1.jpg"},
    {id:10,url:"/LU_3.jpg"},
    {id:11,url:"/LU_4.jpg"},
    {id:12,url:"/LU_5.jpg"},
    {id:13,url:"/LU_6.jpg"},
    {id:14,url:"/LUI_1.jpg"},
  ];


  return (
    <Divz>
      {product.map((prop) => (
        <div key={prop.id}><img src={prop.url} /></div>
      ))}
    </Divz>
  )
}
