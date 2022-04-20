import React from 'react'
import { FreeMode, Autoplay } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/free-mode'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/autoplay'

const HeaderBanner = () => {
    return (
        <Swiper
            modules={[FreeMode, Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img
                    src="./images/Banner.png"
                    alt="slide"
                    style={{ width: '100%' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="./images/Banner_1.png"
                    alt="slide"
                    style={{ width: '100%' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="./images/Banner_2.png"
                    alt="slide"
                    style={{ width: '100%' }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="./images/Banner.png"
                    alt="slide"
                    style={{ width: '100%' }}
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default HeaderBanner
