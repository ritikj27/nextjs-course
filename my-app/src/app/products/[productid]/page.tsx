import React from "react";

export default function ProductDetails({
  params,
}: {
  params: {
    productid: string;
  };
}) {
  return <div>ProductDetails {params.productid}</div>;
}
