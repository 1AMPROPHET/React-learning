import React, { Component } from 'react';
import './css/01-index.css'

class NavBar extends Component {
  render() {
    return <div>navbar</div>
  }
}

function Swiper() {
  return <div>swiper</div>
}

const Tabbar = () => <div>tabbar</div>

class ComponentNesting extends Component {
  render() {

    const name = 'wang'
    const obj = {
      background: 'cyan'
    }

    return (
      <div>
        <NavBar></NavBar>
        <Swiper></Swiper>
        <Tabbar/>
        {'my name:'} {name}
        <div style={obj}>1111111</div>
        <div className='active'>1111111</div>

        <label htmlFor='username'>username: </label>
        <input type="text" id='username'/>
      </div>
    );
  }
}

export default ComponentNesting;
