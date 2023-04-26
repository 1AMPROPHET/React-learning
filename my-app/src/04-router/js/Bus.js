class Bus {
  constructor() {
    this.list = []
  }
  subscribe(callback) {
    this.list.push(callback)
  }
  publish(text) {
    // console.log(text)
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}

export default new Bus()