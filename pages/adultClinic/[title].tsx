import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {collection, getDocs} from "@firebase/firestore";
import {database} from "../../config/firebase";
import { BaseLayout } from "../../components/BaseLayout/BaseLayout";
import styles from "../../styles/pagesStyles/adultClinic.module.scss";

export default function Clinic() {
    const {query} = useRouter();
    const [adultClinics, setAdultClinics] = useState<any>([]);
    const databaseRef = collection(database, 'adultClinic');

    useEffect(() => {
        const getAdultClinics = async () => {
            const data = await getDocs(databaseRef);
            setAdultClinics(data.docs.map((doc) => ({...doc.data()})));
        };
        getAdultClinics()
    }, [])
    return (
        <>
            <BaseLayout title={'Отделение'}>
                <h1>{query.title}</h1>
                {adultClinics.filter((adultClinic:any)=>(query.title===adultClinic.title)).map((filteredClinic:any)=>(
                    <div key={filteredClinic.title} className={styles.clinicPage}>
                        <img src={filteredClinic.inner_url} alt="clinic"/>
                        <blockquote>{filteredClinic.qoute}</blockquote>
                    </div>
                ))}
            </BaseLayout>
        </>
    );
}
// общий див для layout и футеру сделать margin top auto