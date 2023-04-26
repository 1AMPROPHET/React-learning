import axios from 'axios'

export default function request(option, method='get', headers) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'https://m.maizuo.com',
      timeout: 5000,
      headers,
      method
    })

    instance.interceptors.request.use(config => {
      return config
    }, error => console.log(error))

    instance.interceptors.response.use(res => {
      return res
    }, error => console.log(error))


    instance(option).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}