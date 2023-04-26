import React, {useState, useEffect} from 'react'
// import MySwiper from './Swiper' 
// import SwiperItem from './SwiperItem'
import { reqBanners } from '../../api'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Autoplay} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default function CustomSwiper() {

  const [banner, setBanner] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let res = await reqBanners()
        setBanner(res.data.data)
      } catch (error) {}
    })()
  }, [])

  return (
    <div>
      { banner.length !== 0 &&
        <Swiper 
          modules={[Pagination, Autoplay]}
          loop
          pagination
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {
            banner.map((item, index) => (
              <SwiperSlide key={index}>
                <img style={{ width: "100%" }} src={item.imgUrl} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
    </div>
  )
}
