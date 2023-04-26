import React, { Component } from 'react';

class Navbar extends Component {
  showSidebar = () => {
    this.props.event()
  }
  render() {
    return (
      <div style={{background: 'cyan'}}>
        <button onClick={this.showSidebar}>click</button>
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
  changeIsShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <Navbar event={this.changeIsShow}/>
        {this.state.isShow && <Sidebar/>}
      </div>
    );
  }
}

export default App;
