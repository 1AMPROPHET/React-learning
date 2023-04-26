import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const bus = {
  list: [],
  subscribe(callback) {
    this.list.push(callback)
  },

  publish(text) {
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}

// 发布者
setTimeout(() => {
  bus.publish('男人看了会沉默111')
}, 0);
setTimeout(() => {
  bus.publish('男人看了会沉默222')
}, 1000);
setTimeout(() => {
  bus.publish('男人看了会沉默333')
}, 2000);

// 订阅者
bus.subscribe(value => {
  console.log('111', value)
})
bus.subscribe(value => {
  console.log('222', value)
})

export default App;
