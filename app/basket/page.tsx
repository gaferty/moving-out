"use client"

import { useRouter } from "next/navigation";

import BasketCard from "@/components/cards/basketCard";
import ItemCard from "@/components/itemCard";
import Totals from "@/components/totals";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

type Item ={
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Page() {
  const list: Item[] = [
    {
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
  {
      id: 5,
      title: "Book 2",
      price: 9.99,
      image: "/images/fruit-1.jpeg",
  },
];

  const calcTotal = (items: Item[]) => {
    return items.reduce(
      (accumulator: number, item: Item) => accumulator + item.price,
      0,
    );
  }
  const [total, setTotal] = useState(0);
  const [itemNumbers, setItemNumbers] = useState(0);

  useEffect(() => {
    console.log("loading");
    setTotal(calcTotal(list));
    setItemNumbers(list.length);
  }, [])

  return (
    <div>
      <div className="flex justify-center mb-2">
        <Totals num={itemNumbers} total={total} />
      </div>
      <div className="mb-2 flex flex-col justify-items-center">
        {list.map((item) => (
         <BasketCard id = {item.id} title={item.title} price={item.price} key ={item.id} image={item.image}/>
        ))}
      </div>
    </div>
  )
}
