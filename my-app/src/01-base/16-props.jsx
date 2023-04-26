import React, { Component } from 'react';
import Navbar from './Navbar';

class Props extends Component {
  render() {
    const obj = {
      text: '我的',
      leftShow: true
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar text="首页" leftShow={false}/>
        </div>
        <div>
          <h2>列表</h2>
          <Navbar text="列表" leftShow={true}/>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar text="购物车" leftShow={true}/>
        </div>
        <div>
          <h2>我的</h2>
          <Navbar {...obj}/>
        </div>
      </div>
    );
  }
}

export default Props;
