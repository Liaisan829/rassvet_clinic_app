import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {ClinicCard} from "../components/Card/ClinicCard/ClinicCard";
import styles from "../styles/pagesStyles/adultClinic.module.scss";
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {database} from "../config/firebase";
import SkeletonClinicsPage from "../components/Skeleton/SkeletonClinicsPage";
import 'react-loading-skeleton/dist/skeleton.css';

const AdultClinic = () => {

    const [loading, setLoading] = useState(false);
    const [adultClinics, setAdultClinics] = useState<any>([]);
    const databaseRef = collection(database, 'adultClinic');

    useEffect(() => {
        const getAdultClinics = async () => {
            const data = await getDocs(databaseRef);
            setAdultClinics(data.docs.map((doc) => ({...doc.data()})));
        };
        getAdultClinics()
    }, [])

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3700);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title="Взрослая клиника">
            <div className={styles.clinic}>
                <h1 className={styles.clinic__h1}>Взрослая клиника</h1>
                <p className={styles.clinic__p}>Взрослое отделение клиники Рассвет — это безболезненное медицинское
                    сопровождение на всех этапах
                    жизненного пути — от беременности и
                    новорожденности до реабилитации и возвращения работоспособности пожилым пациентам.</p>
                <section className={styles.clinicCards}>
                    {loading ? <SkeletonClinicsPage/> :
                        adultClinics.map((adultClinic: any)=>(
                            <ClinicCard
                                key={adultClinic.title}
                                title={adultClinic.title}
                                img={adultClinic.url}
                            />
                        ))
                    }
                </section>
            </div>

        </BaseLayout>
    )
}

export default AdultClinic;
