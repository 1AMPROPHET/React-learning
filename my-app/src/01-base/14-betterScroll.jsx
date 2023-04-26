import React, { Component } from 'react';
import BetterScroll from 'better-scroll'

class Betterscroll extends Component {
  state = {
    list: []
  }
  getData = () => {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]
    this.setState({
      list
    }, () => {
      new BetterScroll('.wrapper', {})
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>click</button>
        <div className='wrapper' style={{height: '200px', overflow: 'hidden'}}>
          <ul className='content'>
            {
              this.state.list.map(item => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Betterscroll;
