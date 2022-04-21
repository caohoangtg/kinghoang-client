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
import { ProductCard } from '../product'
import { AiOutlineRight } from 'react-icons/ai'

const Recommended = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className} custom-dot"></span>`
        },
    }

    return (
        <div className="recommended">
            <div className="recommended-header">
                <p className="recommended-header__title">RECOMMENDED FOR YOU</p>
                <p className="recommended-header__view-all">
                    View All <AiOutlineRight size={14} />
                </p>
            </div>
            <Swiper
                modules={[FreeMode, Pagination]}
                slidesPerView={2.4}
                freeMode={true}
                pagination={pagination}
                spaceBetween={15}
                scrollbar={{
                    hide: true,
                }}
                className="recommended-swiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Recommended
