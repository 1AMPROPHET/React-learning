import React, { Component } from 'react';

class App extends Component {

  state = {
    text: '收藏'
  }

  render() {
    return (
      <div>
        <h1>welcome to React</h1>
        <button onClick={() => this.setState({text: '不收藏'})}>{this.state.text}</button>
      </div>
    );
  }
}

export default App;

// 函数组件
// import React, { useState } from 'react';

// const App = () => {

//   const [text, setText] = useState('收藏')

//   return (
//     <div>
//       <h1>welcome to React</h1>
//       <button onClick={() => setText('不收藏')}>{text}</button>
//     </div>
//   );
// }

// export default App;

