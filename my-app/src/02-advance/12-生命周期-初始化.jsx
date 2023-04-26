import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    console.log('constructor')
  }

  UNSAFE_componentWillMount() {
    // 弃用原因：有可能会被高优先级任务打断
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }



  render() {
    console.log('render')
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
