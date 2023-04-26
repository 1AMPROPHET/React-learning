import React, { Component } from 'react';

class EventBinding extends Component {
  constructor() {
    super()
    this.add4 = this.add4.bind(this)
  }
  add = () => {
    console.log('add', this.a)
  }

  add2() {
    console.log('add2', this.a)
  }

  add4() {
    console.log('add4', this.a)
  }

  a = 100

  render() {
    return (
      <div>
        <input/>
        <button id='btn' onClick={this.add}>add</button>
        <button id='btn' onClick={() => this.add2()}>add</button>
        <button id='btn' onClick={() => console.log('add3', this.a)}>add</button>
        <button id='btn' onClick={this.add4}>add</button>
      </div>
    );
  }

  // react中的事件绑定不会绑定在dom节点上，而是事件代理的形式
  // 和普通浏览器一样，事件handler会被自动传入一个event对象，这个对象和普通的浏览器event对象所包含的方法和属性都基本一致，不同的是react中的event
  // 对象并不是浏览器提供的，而是自己内部构建的，它同样具有event.stopPropagation event.preventDefault这种常用的方法。
}

export default EventBinding;
