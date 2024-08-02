"use client";
import React from "react";
type totals = {
  total: number;
  num: number;
};
export default function Totals({ total, num }: totals) {
  if (total <= 0) {
    return (
      <div className="flex justify-around bg-white text-primary font-bold w-full sm:w-8/12 px-4 py-2 rounded-lg">
        Nothing in your basket!
      </div>
    );
  }

  return (
    <div className="flex justify-around bg-primary text-white font-bold w-full sm:w-8/12 px-4 py-2 rounded-lg">
      <div>Total: £{total}</div>
      <div> Number of Items: {num} </div>
    </div>
  );
}
