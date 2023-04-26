import React from 'react'

export default function Sidebar (props) {
  let {bg, position} = props
  console.log(bg)
  let obj = {
    background:bg,
    width:'100px',
    height: '100%',
    position:'fixed',
  }
  let obj1 = {
    left: 0
  }
  let obj2 = {
    right: 0
  }
  let styleObj = position==='left'?{...obj,...obj1}:{...obj, ...obj2}
  return (
    <div style={styleObj}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
      </ul>
    </div>
  )
}
