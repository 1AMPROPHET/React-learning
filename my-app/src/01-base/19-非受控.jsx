import React, { Component } from 'react';

class App extends Component {
  myUsername = React.createRef('')
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" ref={this.myUsername} defaultValue='aaa'/>

        <button onClick={() => {
          console.log(this.myUsername.current.value)
        }}>login</button>
        <button onClick={() => {
          this.myUsername.current.value = ''
        }}>reset</button>
      </div>
    );
  }
}

export default App;
