import React, { Component } from "react"

export default class SwiperItem extends Component {
  render() {
    return (
      <div
        style={{
          background: "darkcyan",
          height: "200px",
          textAlign: "center",
          lineHeight: "200px",
          fontSize: "20px",
        }}
        className="swiper-slide"
      >
        {this.props.children}
      </div>
    )
  }
}
