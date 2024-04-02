import { Reviews } from "@/components/Product";
import { Product } from "@/components/Review";
import React, { Suspense } from "react";

export default function ProductDetails() {
  return (
    <div>
      ProductDetails
      <Suspense fallback="Loading... ">
        <Product />
      </Suspense>
      <Suspense fallback="Loading... ">
        <Reviews />
      </Suspense>

    </div>
  );
}
