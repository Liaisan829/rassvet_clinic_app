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
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="slide slide1">
                            <h2>«Принципы доказательной медицины лежат в основе работы нашей клиники»</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide2">
                            <h2>«Наша принципиальная позиция - эффективность и безопасность. Мы не назначем препараты с
                                недоказанной эффективностью»</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide3">
                            <h2>«Наша клиника - это 5 этажей доказательной медицины с командой врачей и оснащением
                                мирового уровня»</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide4">
                            <h2>«Опираясь на лучшую международную практику, мы предоставляем самую современную
                                медцинскую помощь»</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};