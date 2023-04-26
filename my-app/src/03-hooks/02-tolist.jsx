import React, {useState} from 'react'

export default function App() {

  const [text, settext] = useState('');
  const [list, setlist] = useState([
    {text: 'aa', id: 1},
    {text: 'bb', id: 2},
    {text: 'cc', id: 3},
  ]);


  const handleDel = (id) => {
    const newList = list.filter(item => {
      return item.id !== id
    })
    setlist(newList)
  }

  return (
    <div>
      <input type="text" value={text} onChange={(e) => {
        settext(e.target.value)
      }}/>
      <button onClick={() => {
        setlist([...list, {text, id: Math.random() * 10000}])
        settext('')
      }}>add</button>
        <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                {item.text}
                <button onClick={() => handleDel(item.id)}>delete</button>
              </li>
            )
          })
        }
      </ul>
      { !list.length && <div>无待办事项</div> }
    </div>
  )
}
