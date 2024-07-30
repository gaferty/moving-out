'use client'
import React from 'react'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
export default function ItemCard(item: {
  title: string;
  id: number;
  price: number;
  image: string;
  status: string;
}) {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/items/${item.id}`);
  };

  return (
    <Card key={item.id} isPressable onPress={handlePress}>
      <CardBody>
        <Image
          alt={item.title}
          className="w-full object-cover h-[200px]"
          radius="lg"
          src={item.image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="justify-between">
        <b>{item.title}</b>
        <p className="text-default-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
}
