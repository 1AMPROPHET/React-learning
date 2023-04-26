import React, {useCallback, useState} from 'react'

export default function App() {

  const [text, settext] = useState('');
  const [list, setlist] = useState([
    {text: 'aa', id: 1},
    {text: 'bb', id: 2},
    {text: 'cc', id: 3},
  ]);

  // useCallback (记忆函数)，防止组件重新渲染，导致方法被重新创建，起到缓存作用，只有第二个参数变化了，才重新声明一次
  const handleDel = useCallback((id) => {
    const newList = list.filter(item => {
      return item.id !== id
    })
    setlist(newList)
  }, [list])

  const handleClick = useCallback((e) => {
    settext(e.target.value)
  }, [])

  const handleAdd = useCallback(() => {
    setlist([...list, {text, id: Math.random() * 10000}])
    settext('')
  }, [list, text])

  return (
    <div>
      <input type="text" value={text} onChange={handleClick}/>
      <button onClick={handleAdd}>add</button>
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
