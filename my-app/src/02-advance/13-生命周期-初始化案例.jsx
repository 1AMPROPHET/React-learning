import React, { Component } from 'react';
import BS from 'better-scroll'

class App extends Component {
  state = {
    list: ['111', '222', '333', '444', '555', '666', '777', '888', '999', '000', '123', '234', '345', '456', '567', '678']
  }

  componentDidMount() {
    new BS('#wrapper', {})
  }

  render() {
    return (
      <div>
        <div id='wrapper' style={{height: '200px', backgroundColor: 'darkcyan', overflow: 'hidden'}}>
          <ul>
            {
              this.state.list.map(item => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
