import React, { Component } from 'react';
import './css/01-index.css'

class Todolist extends Component {

  state = {
    list: [
      {value: '111', id: 1, isChecked: false},
      {value: '222', id: 2, isChecked: false},
      {value: '333', id: 3, isChecked: false},
    ],
    myText: ''
  }

  // myRef = React.createRef('')

  add = () => {
    console.log('click', this.state.myText)
    // 新的数组
    let newList = [...this.state.list]

    // 添加元素
    newList.push(
      {value: this.state.myText, id: Math.random()*10000, isChecked: false}
    )

    // 修改状态
    this.setState({
      list: newList,
      myText: ''
    })
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

  textChange = (e) => {
    this.setState({
      myText: e.target.value
    })
  }

  handleChange = (index) => {
    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list: newList
    })
  }

  render() {
    const {list} = this.state
    return (
      <div>
        <input value={this.state.myText} onChange={this.textChange}/>
        <button onClick={this.add}>add</button>
        <ul>
          {
            list.map((item, index) => 
            <li key={item.id}>
              <input type="checkbox" value={item.isChecked} onChange={() => this.handleChange(index)}/>
              <span dangerouslySetInnerHTML={
                {
                  __html: item.value
                }
              } style={{textDecoration: item.isChecked?'line-through':'none'}}></span>
              <button onClick={() => this.delete(item.id)}>
                delete
              </button>
            </li>)
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
