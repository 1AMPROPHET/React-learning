import React, { Component } from 'react';

class App extends Component {
  state = {
    username: 'wang'
  }
  inputRef = React.createRef('')
  login = () => {
    console.log(this.inputRef.current.value)
  }
  reset = () => {
    this.inputRef.current.value = ''
  }
  change = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <input 
          type="text" ref={this.inputRef} 
          value={this.state.username}
          onChange={this.change}
        />

        <button onClick={this.login}>login</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default App;
