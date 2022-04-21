import React from 'react'
import { Autoplay, Pagination } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/autoplay'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'

const HeaderBanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className} custom-dot"></span>`
        },
    }

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={pagination}
            className="header-banner-swiper"
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
