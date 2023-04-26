// 函数型组件
// import React, { useRef } from 'react';

// const Ref = () => {

//   const add = () => {
//     console.log(myText.current.value)
//   }

//   const myText = useRef(null)

//   return (
//     <div>
//       <input ref={myText}/>
//       <button onClick={add}>add</button>
//     </div>
//   );
// }

// export default Ref;

// 类组件
import React, { Component } from 'react';

class Ref extends Component {

  myText = React.createRef()

  add = () => {
    console.log(this.myText.current.value)
  }

  render() {
    return (
      <div>
        <input ref={this.myText}/>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default Ref;
