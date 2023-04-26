import axios from "axios"

export function request(option, method = "get") {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "https://m.maizuo.com",
      timeout: 5000,
      method,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    })

    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        console.log(error)
      }
    )

    instance(option)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function requestBanner(option, method = "get") {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "https://m.maizuo.com",
      timeout: 5000,
      method,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449","bc":"110100"}',
        "X-Host": "mall.cfg.common-banner",
      },
    })

    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        console.log(error)
      }
    )

    instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        console.log(error)
      }
    )

    instance(option)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}