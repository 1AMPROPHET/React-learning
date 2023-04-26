import React, { Component } from "react"
import MySwiper from "./swiper/Swiper"
import SwiperItem from "./swiper/SwiperItem"
import axios from "axios"

export default class App extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5624460",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16483109477462991008104449","bc":"110100"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      this.setState({
        list: res.data.data,
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.list.length !== 0 && 
          <MySwiper loop={true}>
            {this.state.list.map((item) => (
              <SwiperItem key={item.bannerId}>
                <img style={{ width: "100%" }} src={item.imgUrl} alt="" />
              </SwiperItem>
            ))}
          </MySwiper>
        }
      </div>
    )
  }
}
