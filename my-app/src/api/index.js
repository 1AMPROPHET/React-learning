import axios from 'axios'

function requestCinema(option, method = 'get') {
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

function requestFilm(option, method = 'get') {
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

export function reqFilmData(cityId=110100, pageNum=1, pageSize=20, type=1, k=6801963) {
  return requestFilm({
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

export function reqData(cityId=110100, ticketFlag=1, k=4880473) {
  return requestCinema({
    url: '/gateway',
    params: {
      cityId,
      ticketFlag,
      k
    }
  })
}