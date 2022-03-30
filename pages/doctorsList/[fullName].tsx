import {useRouter} from "next/router";
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {database} from "../../config/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {useEffect, useState} from "react";
import {AppointmentModal} from "../../components/Modals/AppointmentModal/AppointmentModal";
import SkeletonDoctorPage from "../../components/Skeleton/SkeletonDoctorPage";
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../../styles/pagesStyles/doctorsList.module.scss';

export default function Doctor() {
    const {query} = useRouter();
    const [doctors, setDoctors] = useState<any>([]);
    const databaseRef = collection(database, 'doctors');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const openAppointmentModal = () => {
        setShowModal(true)
    }

    useEffect(() => {
        const getDoctors = async () => {
            const data = await getDocs(databaseRef);
            setDoctors(data.docs.map((doc) => ({...doc.data()})));
        };
        getDoctors()
    }, [])

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3700);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title={'Специалист'}>
            <h1>{query.fullName}</h1>
            {loading ? <SkeletonDoctorPage/> :
                doctors.filter((doctor: any) => (query.fullName === doctor.fullName)).map((filteredDoctor: any) => (
                    <div key={filteredDoctor.fullName} className={styles.doctorPage}>
                        <div className={styles.doctorTitle}>
                            <img src={filteredDoctor.url} alt="doct"/>
                            <div className={styles.doctorTitle__info}>
                                <div className={styles.doctorTitle__info__block}>
                                    <div>
                                        <h6>Должность:</h6>
                                        <h5>{filteredDoctor.speciality}</h5>
                                    </div>
                                    <div>
                                        <h6>Стаж работы по специальности:</h6>
                                        <h5>{filteredDoctor.experience}</h5>
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
                    </div>
                ))
            }
        </BaseLayout>
    );
}