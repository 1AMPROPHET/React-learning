import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  // PureComponent state 或者 props 不断变化的情况下，PureComponent并不会比较快，因为ShallowEqual也需要时间

  state = {
    name: 'wang'
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false // 阻止更新
  //   // return true
  //   if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
  //     return true
  //   }
  //   return false
  // }

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
    console.log('render')
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

