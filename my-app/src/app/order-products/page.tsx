"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProducts() {
  const router = useRouter();
  const handleOrder = () => {
    console.log("place order!!!");
    router.push("/");
    router.back();
    router.forward();
    router.replace('/');
  };
  return (
    <div>
      OrderProducts
      <button onClick={handleOrder}>placeorder</button>
    </div>
  );
}
