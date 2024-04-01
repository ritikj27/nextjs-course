import { cookies } from 'next/headers'
import React from 'react'

export default function About() {
  const theme  = cookies().get("theme")
    console.log("server",theme)
  return (
    <div>About Page {new Date().toLocaleTimeString()}</div>
  )
}

