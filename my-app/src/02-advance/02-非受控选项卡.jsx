import React, { Component } from 'react';
import './css/02-index.css'
import Film from './卖座component/Film';
import Cinema from './卖座component/Cinema';
import Center from './卖座component/Center';
import Tabbar from './卖座component/Tabbar';
import Navbar from './卖座component/Navbar';

class App extends Component {

  state = {
    currentIndex: 1
  }

  handleComponent = () => {
    switch (this.state.currentIndex) {
      case 1:
        return <Film/>
      case 2: 
        return <Cinema/>
      case 3: 
        return <Center/>
      default:
        break;
    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Navbar event={() => {
          this.setState({
            currentIndex: 3
          })
        }}/>
        {
          this.handleComponent()
        }
        <Tabbar event={(id) => this.setState({
          currentIndex: id
        })}
        defaultValue={this.state.currentIndex}/>
      </div>
    );
  }
}

export default App;
