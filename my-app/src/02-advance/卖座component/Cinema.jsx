import React, { Component } from 'react';
import axios from 'axios'
import '../css/02-index.css'
import BetterScroll from 'better-scroll'

class Cinema extends Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      cinemaListOrigin: []
    }
  }

  componentDidMount() {
    this.getCinemaDate()
  }

  getCinemaDate = async () => {
    let res = await reqData(110100, 1, 4880473)
    this.setState({
      cinemaList: res.data.data.cinemas,
      cinemaListOrigin: res.data.data.cinemas
    })
    // 已经是在异步函数中，直接调用
    new BetterScroll('.wrapper', {})
  }

  handleChange = (e) => {
    let newList = this.state.cinemaListOrigin.filter(item => {
      return (
        item.name.toUpperCase().includes(e.target.value.toUpperCase()) || 
        item.address.toUpperCase().includes(e.target.value.toUpperCase()))
    })
    // console.log(newList)
    this.setState({
      cinemaList: newList
    })
    // 每次列表都会被覆盖，可以备份一份初始列表
  } 

  render() {
    return (
      <div style={{height: '100%'}}>
        <input onInput={this.handleChange}/>
        <div className='wrapper' style={{height: '700px', overflow: 'hidden'}}>
          <div className='content'>
            {
              this.state.cinemaList.map(item => {
                return (
                  <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function request(option, method = 'get') {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'https://m.maizuo.com',
      timeout: 5000,
      method,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })

    instance.interceptors.request.use(config => {
      return config
    }, error => {
      console.log(error)
    })

    instance.interceptors.response.use(res => {
      return res
    }, error => {
      console.log(error)
    })

    instance(option).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

function reqData(cityId, ticketFlag, k) {
  return request({
    url: '/gateway',
    params: {
      cityId,
      ticketFlag,
      k
    }
  })
}

export default Cinema;
