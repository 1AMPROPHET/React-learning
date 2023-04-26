import React, {useState, useEffect} from 'react'
import MySwiper from './Swiper' 
import SwiperItem from './SwiperItem'
import { reqBanner } from '../../api'

export default function CustomSwiper() {

  const [banner, setBanner] = useState([])

  useEffect(() => {
    (async () => {
      let res = await reqBanner()
      setBanner(res.data.data)
    })()
  }, [])

  return (
    <div>
      { banner.length !== 0 &&
        <MySwiper loop={true}>
          {
            banner.map(item => (
              <SwiperItem key={item.bannerId}>
                <img style={{ width: "100%" }} src={item.imgUrl} alt="" />
              </SwiperItem>
            ))
          }
        </MySwiper>
      }
    </div>
  )
}
