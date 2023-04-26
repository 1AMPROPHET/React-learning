import React, { Component } from 'react'

export default class App extends Component {

  state = {
    text: '111111111'
  }

  render() {
    return (
      <div>
        {
          this.state.text
        }
        <button onClick={() => {
          this.setState({
            text: '2222222222'
          })
        }}>click</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}


class Child extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  render() {
    return <div>
      child
    </div>
  }
}