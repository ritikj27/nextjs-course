import { notFound } from "next/navigation";
import React from "react";

export default function ReviewDetails({
  params,
}: {
  params: {
    reviewId: string;
    productid: string;
  };
}) {
  const id = getRandomInt(2);
  if (id === 2) {
    throw new Error("error in review page");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      ReviewDetails {params.reviewId} product {params.productid}
    </div>
  );
}
function getRandomInt(max: any) {
  return Math.floor(Math.random() * Math.floor(max));
}
