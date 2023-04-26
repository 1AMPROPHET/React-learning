import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'wang'
  }

  UNSAFE_componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'tom'
          })
        }}>click</button>
        {this.state.name}
      </div>
    );
  }
}

export default App;
