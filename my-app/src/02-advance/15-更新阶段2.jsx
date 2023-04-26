import React, { Component } from 'react'

export default class App extends Component {

  state = {
    name: 'wang'
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return false // 阻止更新
    // return true
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true
    }
    return false
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillUpdate() {
    console.log('will update')
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'Tom'
          })
        }}>click</button>
        <span>{this.state.name}</span>
      </div>
    )
  }
}
