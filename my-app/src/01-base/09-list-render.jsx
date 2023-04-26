import React, { Component } from 'react';

class ListRender extends Component {

  state = {
    list: ['111', '222', '333']
  }

  render() {
    const {list} = this.state
    return (
      <div>
        {
          list.map((item) => {
            return <li key={item}>{item}</li>
          })
        }
      </div>
    );
  }
}

// 对比key值，以最小的代价更新DOM节点

export default ListRender;
