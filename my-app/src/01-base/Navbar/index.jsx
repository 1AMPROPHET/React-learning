import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Navbar extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    leftShow: PropTypes.bool.isRequired
  }

  static defaultProps = {
    text: '',
    leftShow: true
  }

  render() {
    const {text, leftShow} = this.props
    return (
      <div>
        <button>返回</button>
        <span>{text}</span>
        {leftShow&&<button>首页</button>}
      </div>
    );
  }
}

// Navbar.propTypes = {
//   text: PropTypes.string.isRequired,
//   isShow: PropTypes.bool.isRequired
// }

// Navbar.defaultProps = {
//   text: '',
//   isShow: true
// }

export default Navbar;
