import React, { Component } from 'react';
import './css/01-index.css'

class Todolist extends Component {

  state = {
    list: [
      {value: '111', id: 1},
      {value: '222', id: 2},
      {value: '333', id: 3},
    ]
  }

  myRef = React.createRef('')

  add = () => {
    console.log('click', this.myRef.current.value)
    // 新的数组
    let newList = [...this.state.list]

    // 添加元素
    newList.push(
      {value: this.myRef.current.value, id: Math.random()*10000}
    )

    // 修改状态
    this.setState({
      list: newList
    })

    // 清空输入框
    this.myRef.current.value = ''
  }

  delete = (id) => {
    console.log(id)
    // let newList = [...this.state.list] // this.state.list.slice() 也返回新数组
    let newList = this.state.list.filter((item) => {
      return item.id !== id
    })
    // 修改状态
    this.setState({
      list: newList
    })
  }

  render() {
    const {list} = this.state
    return (
      <div>
        <input ref={this.myRef}/>
        <button onClick={this.add}>add</button>
        <ul>
          {
            list.map(item => <li key={item.id}>{item.value}<button onClick={() => this.delete(item.id)}>delete</button></li>)
          }
        </ul>

        {/* {list.length === 0 ? <div>清空了</div> : null} */}
        {/* {list.length === 0 && <div>清空了</div>} */}
        <div className={list.length === 0 ? '' : 'hidden'}>清空了</div>
      </div>
    );
  }
}

export default Todolist;
