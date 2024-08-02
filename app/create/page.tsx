"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="bg-gray-50 mt-4 p-4 rounded-lg">
        <div className="text-3xl text-center font-bold text-primary mb-4">
          Add new item
        </div>
        <div className="flex flex-col align-items-center justify-center justify-items-center">
          <Input
            className="w-8/12 mb-4 mx-auto"
            color="primary"
            label="Title"
            variant="bordered"
          />
          <Textarea
            isRequired
            className="w-8/12 mb-2 mx-auto"
            color="primary"
            label="Description"
            labelPlacement="inside"
            placeholder="Enter your description here"
            variant="bordered"
          />
          <Input
            className="w-8/12 mb-4 mx-auto"
            color="primary"
            label="Price"
            placeholder="0.00"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">£</span>
              </div>
            }
            type="number"
            variant="bordered"
          />
          <Input
            className="w-8/12 mb-4 mx-auto"
            color="primary"
            label="Image"
            type="file"
            variant="bordered"
          />
          <Button
            className="text-white font-bold w-fit mx-auto mt-6"
            color="primary"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
