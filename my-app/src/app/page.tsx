import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
    welcome, Home page
    <Link href='/products'>products</Link>
    </div>
  );
}
