import React, { Component } from 'react';

class Child extends Component {
  render() {
    return <div>
      child
      {this.props.children}
    </div>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>1111111</div>
          {
            // children
          }
        </Child>
      </div>
    );
  }
}

// 插槽为了复用和减少父子通信

export default App;
