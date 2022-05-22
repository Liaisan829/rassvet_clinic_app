import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {AppointmentModal} from "../../components/Modals/AppointmentModal/AppointmentModal";
import SkeletonDoctorPage from "../../components/ui/Skeleton/SkeletonDoctorPage";
import { getDocsFromFirebase } from '../../utils/getDocsFromFirebase';
import {DoctorReviewModal} from "../../components/Modals/DoctorReviewModal/DoctorReviewModal";
import {CardReview} from "../../components/Card/CardReview/CardReview";
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../styles/pagesStyles/doctorsList.module.scss';

export default function Doctor({doctors, doctorReviews}: any) {
    const {query} = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const openAppointmentModal = () => {
        setShowModal(true)
    }

    const openDoctorReviewModal = () => {
        setShowReviewModal(true)
    }

    // useEffect(() => {
    //     setLoading(true);
    //     const timing = setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    //     return () => clearTimeout(timing);
    // }, []);

    return (
        <BaseLayout title={'Специалист'}>
            <h1>{query.fullName}</h1>
            {loading ? <SkeletonDoctorPage/> :
                doctors.filter((doctor: any) => (query.fullName === doctor.fullName)).map((filteredDoctor: any) => (
                        <div key={filteredDoctor.fullName} className={styles.doctorPage}>
                            <div className={styles.doctorTitle}>
                                <img src={filteredDoctor.url} alt="doct"/>
                                <div className={styles.doctorTitle__info}>
                                    <div>
                                        <div className={styles.doctorTitle__info__item}>
                                            <h6>Должность:</h6>
                                            <h5>{filteredDoctor.speciality}</h5>
                                        </div>
                                        <div className={styles.doctorTitle__info__item}>
                                            <h6>Стаж работы по специальности:</h6>
                                            <h5>{filteredDoctor.experience}</h5>
                                        </div>
                                    </div>
                                    <div className={styles.doctorTitle__info__price}>
                                        <h6>Первичный прием:</h6>
                                        <h4>{filteredDoctor.price}</h4>
                                    </div>
                                    <div className={styles.doctorTitle__info__recording}>
                                        <Button
                                            type="submit"
                                            theme="orange"
                                            onClick={openAppointmentModal}
                                        >Записаться на прием</Button>
                                        <AppointmentModal
                                            showModal={showModal}
                                            setShowModal={setShowModal}
                                            specialistName={filteredDoctor.fullName}

                                        />
                                        <p>Запишитесь на прием к специалисту в удобное для вас время</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.doctorDescription}>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Образование</h6>
                                    <p>{filteredDoctor.education}</p>
                                </div>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Опыт работы</h6>
                                    <p>{filteredDoctor.work}</p>
                                </div>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Область профессиональных интересов</h6>
                                    <p>{filteredDoctor.interests}</p>
                                </div>
                            </div>

                            <section className={styles.doctorReview}>
                                <h2>Отзывы</h2>
                                {doctorReviews.filter((review: any) => (filteredDoctor.fullName === review.specialist)).map((filteredReview: any) => {
                                    return (
                                        <CardReview
                                            key={filteredReview.name}
                                            date={filteredReview.time}
                                            fullName={filteredReview.name}
                                            text={filteredReview.textReview}
                                        />
                                    )
                                })}
                                <Button
                                    type="submit"
                                    theme="transparent"
                                    onClick={openDoctorReviewModal}
                                >Оставить отзыв</Button>
                                <DoctorReviewModal
                                    showModal={showReviewModal}
                                    setShowModal={setShowReviewModal}
                                    specialistName={filteredDoctor.fullName}
                                />
                            </section>
                        </div>
                    )
                )
            }
        </BaseLayout>
    );
}

export async function getStaticProps() {
    const doctors = await getDocsFromFirebase("doctors");
    const doctorReviews = await getDocsFromFirebase("doctorReviews");

    return {
        props: {doctors, doctorReviews}
    };
}

export async function getStaticPaths() {
    const doctors = await getDocsFromFirebase("doctors");

    const paths = doctors.map((doctor: any) => ({
        params: JSON.parse(JSON.stringify({fullName: doctor.fullName}))
    }))

    return {paths, fallback: true}
}