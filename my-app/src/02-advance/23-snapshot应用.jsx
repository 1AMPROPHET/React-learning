import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [1,2,3,4,5,6,7,8,9]
  }

  myRef = React.createRef(null)

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            list: [...[11,12,13,14,15,16], ...this.state.list]
          })
        }}>新来邮件</button>
        <h1>邮箱应用</h1>
        <div ref={this.myRef} style={{height: '200px', overflow: 'auto'}}>
          <ul>
            {
              this.state.list.map(item => {
                return <li style={{height: '100px', backgroundColor: 'darkcyan', border: '1px solid #000'}} key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }

  getSnapshotBeforeUpdate() {
    console.log(this.myRef.current.scrollHeight, this.myRef.current.scrollTop)
    return this.myRef.current.scrollHeight
  }

  componentDidUpdate(preProps, preState, snapShot) {
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - snapShot
    console.log(this.myRef.current.scrollTop)
  }
}
