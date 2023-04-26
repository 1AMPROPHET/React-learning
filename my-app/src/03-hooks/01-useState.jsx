import React, { useState } from 'react'

export default function App() {

  const [name, setName] = useState('Wang')

  return (
    <div>
      <button onClick={() => {
        setName('Tom')
      }}>click</button>
      app-{name}
    </div>
  )
}
