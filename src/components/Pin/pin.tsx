"use client";
import React from "react";
import { PinContainer } from "../ui/3D-Pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
      <div className="flex items-center justify-center">
        <PinContainer title="React" href="https://react.dev">
          <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
            <Image
              src="/react.png"
              width={100}
              height={100}
              alt="React"
              className="object-contain"
            />
          </div>
        </PinContainer>
      </div>

      {/* Add more cards like this one below if needed */}
      {/* <div className="flex items-center justify-center">
        <PinContainer title="Next.js" href="https://nextjs.org">
          <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center shadow-lg">
            <Image src="/next.svg" width={100} height={100} alt="Next.js" />
          </div>
        </PinContainer>
      </div> */}
    </div>
  );
}
