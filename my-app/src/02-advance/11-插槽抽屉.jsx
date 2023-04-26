import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div style={{background: 'cyan'}}>
        {this.props.children}
        <span>navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{background: 'darkcyan', width: '200px'}}>
        <ul>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  state = {
    isShow: false
  }

  render() {
    return (
      <div>
        <Navbar>
          <button onClick={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}>click</button>
        </Navbar>
        {this.state.isShow && <Sidebar/>}
      </div>
    );
  }
}

export default App;
