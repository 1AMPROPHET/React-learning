import React, { useReducer } from 'react'

const reducer = (preState, action) => {
  let newState = {...preState}
  switch (action.type) {
    case 'increment':
      newState.count++
      return newState
    case 'decrement': 
      newState.count--
      return newState
    default: 
      return newState
  }
}

// 外部状态，一个对象
const initialState = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
