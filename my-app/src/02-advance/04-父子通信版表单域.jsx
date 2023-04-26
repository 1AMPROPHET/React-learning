import React, { Component } from 'react';

class App extends Component {
  state = {
    username: localStorage.getItem('username')?localStorage.getItem('username'):localStorage.setItem('username', 'wang'),
    password: ''
  }
  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <Field label='用户名' type='text' value={this.state.username} event={value => this.setState({username: value})}/>
        <Field label='密码' type='password' event={value => this.setState({password: value})}/>

        <button onClick={() => {
          console.log(this.state.username, this.state.password)
        }}>登录</button>
        <button onClick={() => {
           this.setState({
            username: '',
            password: ''
          })
        }}>取消</button>
      </div>
    );
  }
}

class Field extends Component {
  render() {
    return (
      <div style={{background: 'darkcyan'}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(e) => this.props.event(e.target.value)} value={this.props.value}/>
      </div>
    )
  }
}

export default App;
