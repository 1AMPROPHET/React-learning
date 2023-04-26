import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({
              type: 1
            })
          }}>正在热映</li>
          <li onClick={() => {
            this.setState({
              type: 2
            })
          }}>即将上映</li>
        </ul>

        <FilmList type={this.state.type}/>
      </div>
    )
  }
}


class FilmList extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    console.log(this.props.type)
    if (this.props.type === 1) {
      console.log('正在热映')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2638754',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.setState({
          list: res.data.data.films
        })
      })
    } else {
      console.log('即将上映')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6788730',
        headers: {
         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
         'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.setState({
          list: res.data.data.films
        })
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type === 1) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2638754',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.setState({
          list: res.data.data.films
        })
      })
    } else {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6788730',
        headers: {
         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
         'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.setState({
          list: res.data.data.films
        })
      })
    }
  }
  
  render() {
    return <div>
      {
        this.state.list.map(item => {
          return <li key={item.filmId}>{item.name}</li>
        })
      }
    </div>
  }
}