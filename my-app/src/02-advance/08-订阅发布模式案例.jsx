import React, { Component } from 'react';
import axios from 'axios'
import './css/03-communication.css'
import BetterScoll from 'better-scroll'

const bus = {
  list: [],
  subscribe(callback) {
    console.log(callback)
    this.list.push(callback)
  },

  publish(text) {
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 1,
      films: []
    }
  }

  componentDidMount() {
    this.getFilmData()
  }

  getFilmData = async () => {
    let res = await reqFilmData(110100, 1, 30, 1, 6801963)
    console.log(res.data.data.films)
    this.setState({
      films: res.data.data.films
    },() =>  new BetterScoll('.wrapper', {click: true}))
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='content'>
          {
            this.state.films.map(
              film => <FilmItem 
                key={film.filmId} 
                {...film}
              />
            )
          }
        </div>
        <FilmDetail/>
      </div>
    );
  }
}

// 受控组件
class FilmItem extends Component {
  render() {
    const {name, poster, grade, synopsis} = this.props
    return <div className='filmItem' onClick={() => {
      // 发布事件
      bus.publish(synopsis)
    }}>
      <img src={poster} alt=""/>
      <h4>{name}</h4>
      <div>观众评分: {grade}</div>
    </div>
  }
}

class FilmDetail extends Component {

  state = {
    info: ''
  }

  componentDidUpdate() {
    // 订阅
    bus.subscribe((value) => {
      this.setState({
        info: value
      })
    })
  }
  render() {
    return <div className='filmDetail'>
      {this.state.info}
    </div>
  }
}

function request(option, method = 'get') {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'https://m.maizuo.com',
      timeout: 5000,
      method,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
        'X-Host': 'mall.film-ticket.film.list'
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

function reqFilmData(cityId, pageNum, pageSize, type, k) {
  return request({
    url: '/gateway',
    params: {
      cityId,
      pageNum,
      pageSize, 
      type,
      k
    }
  })
}

export default App;

