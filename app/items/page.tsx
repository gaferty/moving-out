'use client'

import ItemCard from '@/components/itemCard';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  const list = [{
      id: 1,
      title: "Desk",
      price: 9.99,
      image: "/images/fruit-1.jpeg",
    },
    {
      id: 2,
      title: "Lamp",
      price: 9.99,
      image: "/images/fruit-1.jpeg",
    },
    {
      id: 3,
      title: "Book",
      price: 9.99,
      image: "/images/fruit-1.jpeg",
    },
    {
      id: 4,
      title: "Book 2",
      price: 9.99,
      image: "/images/fruit-1.jpeg",
  },

];


  return (
    <div>
      <div className="gap-2 grid grid-cols-1  lg:grid-cols-4 sm:grid-cols-2">
        {list.map((item) => (
         <ItemCard id = {item.id} title={item.title} price={item.price} key ={item.id} image={item.image} status=""/>
        ))}
      </div>
    </div>
  )
}
