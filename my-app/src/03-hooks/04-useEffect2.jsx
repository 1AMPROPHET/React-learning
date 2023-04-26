import React, {useState} from 'react'
import { useEffect } from 'react';

export default function App() {

  const [name, setname] = useState('wang');

  useEffect(() => {
    setname(name.substring(0, 1).toUpperCase() + name.substring(1))
  }, [name])

  return (
    <div>
      App-{name}
      <button onClick={() => setname('tom')}>click</button>
    </div>
  )
}
