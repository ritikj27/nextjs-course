import Link from "next/link";
import React from "react";

export default function ProductsList() {
  return (
    <div>
      <Link href="/">Home page</Link>
      ProductsList
      <Link href="/products/1">
        <h1>p 1</h1>
      </Link>
      <Link href="/products/2">
        <h1>p 2</h1>
      </Link>
      <Link href="/products/3" replace>
        <h1>p3</h1>
      </Link>
      <Link href="/products/100" >
        <h1>p1</h1>
      </Link>
    </div>
  );
}
