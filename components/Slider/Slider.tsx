import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Lazy} from "swiper";
import Image from "next/image";
import prevArrow from '../../public/slider/prev-arrow.svg';
import nextArrow from '../../public/slider/next-arrow.svg';

export const Slider = () => {

    SwiperCore.use([Navigation]);
    SwiperCore.use([Lazy]); //это для автомат.листания слайдов, которое потом мб сделаем

    return (
        <>
            <div className="slider">
                <div className="navigation">
                    <div className="swiper-button-prev-custom">
                        {/*<Icon name="prev-arrow" width={24} height={24}/>*/}
                        <Image src={prevArrow} width={24} height={24}/>
                    </div>
                    <div className="swiper-button-next-custom">
                        {/*<Icon name="next-arrow" width={24} height={24}/>*/}
                        <Image src={nextArrow} width={24} height={24}/>
                    </div>
                </div>

                <Swiper
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom"
                    }}
                    loop={true}
                    lazy={true}
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