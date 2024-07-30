import React from 'react'
import { Button } from '@nextui-org/button'
export default function Status({ bought, id }: { bought: string; id: number }) {
  switch (bought) {
    case "sold":
      return (
        <div className="text-red-900 font-bold"> This item has been sold!</div>
      );
    case "bid":
      return (
        <Button className="text-white font-bold mt-4" color="primary" size="lg">
          Bid
        </Button>
      );
    default:
      return (
        <Button className="text-white font-bold mt-4" color="primary" size="lg">
          Buy
        </Button>
      );
  }
}
