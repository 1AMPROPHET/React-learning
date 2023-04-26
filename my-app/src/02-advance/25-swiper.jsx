import React, { Component } from "react"
import Swiper, { Pagination, Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default class MySwiper extends Component {
  state = {
    list: ["111", "222", "333", "444"],
  }

  componentDidMount() {
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
        pauseOnMouseEnter: true,
      },
    })
  }

  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    )
  }
}
