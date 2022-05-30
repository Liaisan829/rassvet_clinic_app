import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import Image from "next/image";
import {CardSlider} from "../Card/CardSlider/CardSlider";
import prevArrow from '/public/slider/prev-arrow.svg';
import nextArrow from '/public/slider/next-arrow.svg';
import {useEffect, useState} from "react";
import {DoctorModel, Doctors} from "../../stores/DoctorStore";

export const DoctorsSlider = () => {
    const [doctors, setDoctors] = useState<Array<DoctorModel>>([]);

    SwiperCore.use([Navigation]);
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        setDoctors(Doctors);
    }, []);

    return (
        <>
            <div className="doctor__slider">
                <div className="navigation">
                    <div className="swiper-button-prev-custom">
                        <Image src={prevArrow} width={24} height={24}/>
                    </div>
                    <div className="swiper-button-next-custom">
                        <Image src={nextArrow} width={24} height={24}/>
                    </div>
                </div>

                <Swiper
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom"
                    }}
                    loop={true}
                    autoplay={true}
                    width={1200}
                    slidesPerView={3}
                    onSlideChange={() => {
                    }}
                    onSwiper={() => {
                    }}
                    breakpoints={{
                        //когда экран больше 420px
                        420: {
                            width: 350,
                            slidesPerView: 1
                        },
                        //когда экран больше 550px
                        550: {
                            width: 420,
                            slidesPerView: 2
                        },
                        //когда экран больше 650
                        650: {
                            width: 520,
                            slidesPerView: 2
                        },
                        //когда экран больше 720
                        720: {
                            width: 670,
                            slidesPerView: 2
                        },
                        //когда экран больше 850
                        850: {
                            width: 800,
                            slidesPerView: 2
                        },
                        //когда экран больше 1050
                        1050: {
                            width: 1000,
                            slidesPerView: 2
                        },
                        //когда экран больше 1250
                        1250: {
                            width: 1200,
                            slidesPerView: 3
                        },
                        //когда экран больше 1450
                        1420: {
                            width: 1200,
                            slidesPerView: 3
                        }
                    }}
                >
                    {doctors.map(doctor => (
                        <SwiperSlide>
                            <CardSlider
                                img={doctor.img}
                                fullName={doctor.fullName}
                                speciality={doctor.speciality}
                                price={doctor.price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};