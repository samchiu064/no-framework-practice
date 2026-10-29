"use client"

import { useState } from "react"

export default function ClientComponent() {
  console.log('Rendering client component: ClientComponent')
  const [counter, setCounter] = useState(0)

  return (
    <fieldset>
      <legend>Client component</legend>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(count => count + 1)}>Increment</button>
    </fieldset>
  )
}