import React, { Component } from 'react';

class Setstate extends Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 1
    })
  }

  add2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      }, () => {
        console.log(this.state.count)
      })
      this.setState({
        count: this.state.count + 1
      })
      this.setState({
        count: this.state.count + 1
      })
    }, 0)
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}>add</button>
        <button onClick={this.add2}>add2</button>
      </div>
    );
  }
  /*
    setState处在同步逻辑中，异步更新状态，更新真实DOM

    setState处在异步逻辑中，同步更新状态，同步更新真实DOM

    setState接受第二个参数，第二个参数是回调函数，状态和DOM更新完后会被触发
  */
}

export default Setstate;
