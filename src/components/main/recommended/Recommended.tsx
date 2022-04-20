import React from 'react'

import { FreeMode, Pagination } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/free-mode'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'

const Recommended = () => {
    return (
        <Swiper
            modules={[FreeMode, Pagination]}
            slidesPerView={3}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            spaceBetween={15}
            scrollbar={{
                hide: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="category-section__slide-item">Burgers</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-section__slide-item">French Fry</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-section__slide-item">Chicken</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-section__slide-item">Pizza</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-section__slide-item">Salad</div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Recommended
