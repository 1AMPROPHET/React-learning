import React, { Component } from 'react'

export default class App extends Component {

  state = {
    name: 'wang',
    age: 18
  }

  // componentWillMount
  // 在初始化和更新阶段都可以执行
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps')
    return {
      name: nextState.name.substring(0, 1).toUpperCase() + nextState.name.substring(1)
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'Tom'
          })
        }}>click</button>
        {this.state.name}
      </div>
    )
  }
}
