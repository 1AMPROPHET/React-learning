import React, { Component } from "react"
import Swiper, { Pagination, Autoplay } from "swiper"
import "swiper/css"
// import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default class MySwiper extends Component {

  componentDidMount() {
    new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      loop: this.props.loop || true,
      pagination: {
        el: ".swiper-pagination",
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    })
  }

  render() {
    return (
      <div className="swiper">
        <div className="swiper-wrapper">
          {this.props.children}
        </div>
        <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </div>
    )
  }
}
