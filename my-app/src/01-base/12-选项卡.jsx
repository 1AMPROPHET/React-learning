import React, { Component } from 'react';
import './css/02-index.css'
import Film from './卖座component/Film';
import Cinema from './卖座component/Cinema';
import Mine from './卖座component/Mine';

class App extends Component {

  state = {
    list: [
      {id: 1, text: 'movie'},
      {id: 2, text: 'cinema'},
      {id: 3, text: 'mine'}
    ],
    currentIndex: 2
  }

  changeIndex = (id) => {
    this.setState({
      currentIndex: id
    })
  }

  handleComponent = () => {
    switch (this.state.currentIndex) {
      case 1:
        return <Film/>
      case 2: 
        return <Cinema/>
      case 3: 
        return <Mine/>
      default:
        break;
    }
  }

  render() {
    const {list, currentIndex} = this.state
    return (
      <div>
        {
          this.handleComponent()
        }
        <ul>
          {
            list.map(
              item => <li 
                className={currentIndex === item.id ? 'active' : ''} 
                key={item.id}
                onClick={() => this.changeIndex(item.id)}
              >
                {item.text}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
