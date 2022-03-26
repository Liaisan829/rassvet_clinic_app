import {useRouter} from "next/router";
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {database} from "../../config/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {useEffect, useState} from "react";
import {AppointmentModal} from "../../components/Modals/AppointmentModal/AppointmentModal";
import styles from '../../styles/pagesStyles/doctorsList.module.scss';

export default function Doctor() {
    const {query} = useRouter();
    const [doctors, setDoctors] = useState<any>([]);
    const databaseRef = collection(database, 'doctors');
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        const getDoctors = async () => {
            const data = await getDocs(databaseRef);
            setDoctors(data.docs.map((doc) => ({...doc.data()})));
        };
        getDoctors()
    }, [])

    const openAppointmentModal = () => {
        setShowModal(true)
    }

    return (
        <>
            <BaseLayout title={'Специалист'}>
                <h1>{query.fullName}</h1>
                {doctors.map((doctor: any) => {
                    return (
                        <div className={styles.doctorPage}>
                            <div className={styles.doctorTitle}>
                                <img src={doctor.url} alt="doct"/>
                                <div className={styles.doctorTitle__info}>
                                    <div className={styles.doctorTitle__info__block}>
                                        <div>
                                            <h6>Должность:</h6>
                                            <h5>{doctor.speciality}</h5>
                                        </div>
                                        <div>
                                            <h6>Стаж работы по специальности:</h6>
                                            <h5>{doctor.experience}</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            theme="orange"
                                            onClick={openAppointmentModal}
                                        >Записаться на прием</Button>
                                        <AppointmentModal
                                            showModal={showModal}
                                            setShowModal={setShowModal}
                                        />
                                        <p>Запишитесь на прием к специалисту в удобное для вас время</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.doctorDescription}>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Образование</h6>
                                    <p>{doctor.education}</p>
                                </div>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Опыт работы</h6>
                                    <p>{doctor.work}</p>
                                </div>
                                <div className={styles.doctorDescription__block}>
                                    <h6>Область профессиональных интересов</h6>
                                    <p>{doctor.interests}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </BaseLayout>
        </>
    );
}