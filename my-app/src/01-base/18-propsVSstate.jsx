import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        child-{this.props.text}
        <button onClick={() => this.props.text='33333333'}>change props</button>
      </div>
    )
  }
}

// 不能在子组件中修改props

class App extends Component {
  state = {
    text: '1111111'
  }
  render() {
    return (
      <div>
        <Child text={this.state.text}/>
      </div>
    );
  }
}

export default App;
