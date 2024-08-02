'use client'
import React, { useState } from 'react'
type totals ={
  total: number;
  number_of_items: number;
};
export default function Totals({total, num}: {total:number, num:number}) {

  return (
    <div className='flex justify-around bg-primary text-white font-bold w-full sm:w-8/12 px-4 py-2 rounded-lg'>
      <div>
        Total: £{total}
      </div>
      <div> Number of Items: {num} </div>
    </div>
  )
}
