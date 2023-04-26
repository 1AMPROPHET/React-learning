import React, { Component } from 'react';

class EventBinding extends Component {

  add = () => {
    console.log(this)
  }

  add2() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <input/>
        <button id='btn' onClick={this.add}>add</button>
        <button id='btn' onClick={() => this.add2()}>add</button>
      </div>
    );
  }
}

export default EventBinding;
