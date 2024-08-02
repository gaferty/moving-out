'use client'
import React from 'react'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
export default function BasketCard(item: {
  title: string;
  id: number;
  price: number;
  image: string;
}) {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/items/${item.id}`);
  };

  return (
    <Card key={item.id} isPressable onPress={handlePress} className="w-full my-2">
      <CardBody className="flex flex-row max-sm:flex-col justify-between">
        <Image
          alt={item.title}
          className="w-full object-cover h-[200px] flex-none"
          radius="lg"
          src={item.image}
          width="100%"
        />
        <div className='grow mx-10 max-sm:my-4'>
          <b>{item.title}</b>
          <p className="text-default-500">{item.price}</p>
        </div>
        <Button className="sm:self-center" color="danger" size="lg">
          Remove
        </Button>
      </CardBody>
    </Card>
  );
}
