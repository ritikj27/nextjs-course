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
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      ReviewDetails {params.reviewId} product {params.productid}
    </div>
  );
}
