import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from "swiper";

export const Slider = () => {

    SwiperCore.use([Navigation]);
    SwiperCore.use([Autoplay]);

    return (
        <>
            <div className="slider">
                <Swiper
                    loop={true}
                    autoplay={true}
                    slidesPerView={1}
                    onSlideChange={() => {
                    }}
                    onSwiper={() => {
                    }}
                >
                    <SwiperSlide>
                        <div className="slide slide1">
                            <h2>&laquo;Принципы доказательной медицины лежат в&nbsp;основе работы нашей
                                клиники&raquo;</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide2">
                            <h2>&laquo;Наша принципиальная позиция&nbsp;&mdash; эффективность и&nbsp;безопасность.
                                Мы&nbsp;не&nbsp;назначем препараты с&nbsp;недоказанной эффективностью&raquo;</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide3">
                            <h2>&laquo;Наша клиника&nbsp;&mdash; это 5&nbsp;этажей доказательной медицины
                                с&nbsp;командой врачей и&nbsp;оснащением мирового уровня&raquo;</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide4">
                            <h2>&laquo;Опираясь на&nbsp;лучшую международную практику, мы&nbsp;предоставляем самую
                                современную медцинскую помощь&raquo;</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};