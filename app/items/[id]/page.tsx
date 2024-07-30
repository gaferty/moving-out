'use client'
import Status from '@/components/item/status';
import { Button, Image } from '@nextui-org/react';
import React from 'react'

export default function Page() {
  const item = {
    id: 1,
    title: "Large wooden Ikea desk",
    description: `This is an ikea desk the top is made out of solid pine wood. \n\n It is 1.75m x 1m`,
    image: "/images/fruit-1.jpeg",
    price: 9.99,
    status: "buy",
  };

  return (
    <div className="flex justify-center">
      <div className='gap-5 grid sm:grid-cols-2 grid-cols-1 justify-items-center max-w-4xl bg-gray-100 py-4 px-2 rounded-lg'>
        <Image src={item.image} className='max-sm:max-h-[50vh]'/>
        <div>
          <h1 className='text-xl font-bold pb-2'>{item.title}</h1>
          <p>{item.description}</p>
          <p className="font-bold mt-2">£{item.price}</p>
          <div className='flex justify-start max-sm:justify-center'>
            <Status bought={item.status} id={item.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
