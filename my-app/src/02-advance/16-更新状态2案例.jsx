import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
    current: 0
  }

  render() {
    return (
      <div>
        <input type="number" style={{border: '1px solid #000'}} onChange={(e) => this.setState({
          current: e.target.value * 1
        })}/>
        <div style={{overflow: 'hidden'}}>
          {
            this.state.list.map((item, index) => <Box key={item} current={this.state.current} index={index}/>)
          }
        </div>
      </div>
    )
  }
}

class Box extends Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true
    }
    return false
  }

  render() {
    console.log('update')
    return (
      <div style={{
        width: '100px', 
        height: '100px', 
        backgroundColor: this.props.current===this.props.index?'darkcyan':'#777', 
        margin: '10px', 
        float: 'left'
      }}>
        {this.props.current},{this.props.index}
      </div>
    )
  }
}