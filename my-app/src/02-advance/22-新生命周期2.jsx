import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: '1111111'
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: '222222222'
          })
        }}>click</button>
        {this.state.text}
      </div>
    )
  }

  componentDidUpdate(nextProps, nextState, value) {
    console.log('componentDidUpdate', value)
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}
