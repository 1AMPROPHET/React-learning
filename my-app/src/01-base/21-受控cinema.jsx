import React, { Component } from 'react';
import axios from 'axios'
import './css/02-index.css'
import BetterScroll from 'better-scroll'

class Cinema extends Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      myText: ''
    }
  }

  componentDidMount() {
    this.getCinemaDate()
  }

  getCinemaDate = async () => {
    let res = await reqData(110100, 1, 4880473)
    this.setState({
      cinemaList: res.data.data.cinemas,
    })
    // 已经是在异步函数中，直接调用
    new BetterScroll('.wrapper', {})
  } 

  valueChange = (e) => {
    this.setState({
      myText: e.target.value
    })
  }

  getCinemaList = () => {
    return this.state.cinemaList.filter(item => {
      return (
        item.name.toUpperCase().includes(this.state.myText.toUpperCase()) || 
        item.address.toUpperCase().includes(this.state.myText.toUpperCase())
      )
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.myText} onChange={this.valueChange}/>
        <div className='wrapper' style={{height: '500px', overflow: 'hidden'}}>
          <div className='content'>
            {
              this.getCinemaList().map(item => {
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
