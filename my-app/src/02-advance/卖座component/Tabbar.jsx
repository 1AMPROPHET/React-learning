// import React, { Component } from 'react';

// class Tabbar extends Component {
//   state = {
//     list: [
//       {id: 1, text: 'movie'},
//       {id: 2, text: 'cinema'},
//       {id: 3, text: 'mine'}
//     ]
//   }

//   changeIndex = (id) => {
//     this.props.event(id)
//   }

//   render() {
//     const {list} = this.state
//     return (
//       <ul>
//         {
//           list.map(
//             item => <li 
//               className={this.props.currentIndex === item.id ? 'active' : ''} 
//               key={item.id}
//               onClick={() => this.changeIndex(item.id)}
//             >
//               {item.text}
//             </li>
//           )
//         }
//       </ul>
//     );
//   }
// }

// export default Tabbar;

import React from 'react';

const Tabbar = (props) => {

  const changeIndex = (id) => {
    props.event(id)
  }

  return (
    <ul>
      {
        props.list.map(
          item => <li 
            className={props.currentIndex === item.id ? 'active' : ''} 
            key={item.id}
            onClick={() => changeIndex(item.id)}
          >
            {item.text}
          </li>
        )
      }
    </ul>
  );
}

export default Tabbar;

