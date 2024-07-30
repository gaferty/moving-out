"use client";
import { NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavButtons(
  item: { text: string; link: string },
  key: string,
) {
  const pathname = usePathname();

  if (pathname === item.link){
    return (
      <NavbarItem key={key} isActive>
        <Link className="font-bold bg-primary text-white px-4 py-2 rounded-full"
          href={item.link}
        >
          {item.text}
        </Link>
      </NavbarItem>
    );
  }

  return (
    <NavbarItem key={key}>
      <Link className="font-bold text-black" href={item.link}>
        {item.text}
      </Link>
    </NavbarItem>
  );
}
