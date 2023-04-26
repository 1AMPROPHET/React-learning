import React, { Component } from "react"
import Swiper, { Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        list: ['aaa', 'bbb', 'ccc']
      })
      // 2.在数据更新完后创建实例
      new Swiper(".swiper", {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }
      })
    }, 1000);
  }

  // 1.在生命周期中创建swiper实例
  // componentDidUpdate() {
  //   new Swiper(".swiper", {
  //     modules: [Navigation, Pagination, Autoplay],
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     autoplay: {
  //       delay: 2000
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            {this.state.list.map((item) => {
              return (
                <div
                  style={{
                    background: "darkcyan",
                    height: "200px",
                    textAlign: "center",
                    lineHeight: '200px',
                    fontSize: '20px'
                  }}
                  className="swiper-slide"
                  key={item}
                >
                  {item}
                </div>
              )
            })}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    )
  }
}
