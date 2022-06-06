import doc1 from '/public/doctorsSlider/doc1.svg';
import doc2 from '/public/doctorsSlider/doc2.svg';
import doc3 from '/public/doctorsSlider/doc3.svg';
import doc4 from '/public/doctorsSlider/doc4.svg';
import doc5 from '/public/doctorsSlider/doc5.svg';
import doc6 from '/public/doctorsSlider/doc6.svg';

export interface DoctorModel {
    img: any,
    fullName: string,
    speciality: string,
    price: string,
}

export const Doctors: Array<DoctorModel> = [

    {
        img: doc1,
        fullName: "Тарасова Анна Константиновна",
        speciality: "Ревматолог, терапевт",
        price: "Первичный прием: 6500 руб."
    },
    {
        img: doc2,
        fullName: "Головенко Алексей Олегович",
        speciality: "Гастроэнтеролог",
        price: "Первичный прием: 5000 руб."
    },
    {
        img: doc3,
        fullName: "Рамеева Анна Сергеевна",
        speciality: "Терапевт",
        price: "Первичный прием: 5500 руб."
    },
    {
        img: doc4,
        fullName: "Охотин Андрей Николаевич",
        speciality: "Стоматолог",
        price: "Первичный прием: 4000 руб."
    },
    {
        img: doc5,
        fullName: "Наумова Наталья Андреевна",
        speciality: "Гастроэнтеролог",
        price: "Первичный прием: 6500 руб."
    },
    {
        img: doc6,
        fullName: "Латышев Александр Васильевич",
        speciality: "Хирург",
        price: "Первичный прием: 5500 руб."
    },
];