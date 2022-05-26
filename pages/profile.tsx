import React, {useEffect, useState} from 'react';
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {useAuth} from "../config/auth";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import UserCard from "../components/Card/UserCard/UserCard";
import styles from '/styles/pagesStyles/profile.module.scss';
import {Button} from '../components/ui/Button/Button';
import {useRouter} from "next/router";
import SkeletonAppointmentsComponent from "../components/ui/Skeleton/SkeletonAppointmentsComponent";
import {deleteDoc, doc} from "@firebase/firestore";
import {firestore} from "../config/firebase";

const Profile = ({usersInfo, appointments, doctorsList}: any) => {
    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<any>(usersInfo);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        users
            .filter((user: any) => (
                user.email === currentUser?.email)).map((loggedUser: any) => {
            setUser(loggedUser)
        })
    }, [])

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 2800);
        return () => clearTimeout(timing);
    }, []);

    const isAdmin = () => {
        return user?.role === "admin";
    }

    const onPreview = (doctor: any) => {
        router.push(`/doctorsList/${doctor.fullName}`)
    }

    const onAddNew = () => {
        router.push("/profileNew/addEdit");
    }

    const onDelete = async (shortName: string) => {
        const docRef = doc(firestore, "doctors", shortName);
        if (window.confirm("Удалить специалиста?")) {
            await deleteDoc(docRef);
        }
        await alert("deleted");
    }

    return (
        <BaseLayout title="Профиль новый">
            <div className={styles.userInfo}>
                <UserCard user={user}/>
                {isAdmin() ?
                    <>
                        <div className={styles.doctors}>
                            <div className={styles.doctors__row}>
                                {doctorsList.map((doctor: any) => (
                                    <>
                                        <p>{doctor.fullName}</p>
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={() => onPreview(doctor)}
                                            children={"Подробнее"}
                                        />
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={() => onDelete(doctor.shortName)}
                                            children={"Удалить"}
                                        />
                                    </>
                                ))}
                            </div>
                            <Button
                                type={"button"}
                                theme={"transparent"}
                                onClick={onAddNew}>
                                add new doctor
                            </Button>
                        </div>
                    </>
                    :
                    <div className={styles.visits}>
                        <h1>Записи на прием</h1>
                        {}
                        <div className={styles.visits__content}>
                            {loading ? <SkeletonAppointmentsComponent/> :
                                appointments.filter((appointment: any) => (currentUser?.email === appointment.email)).map((filteredAppointment: any) => (
                                    <div key={filteredAppointment.email} className={styles.visits__content__info}>
                                        <h3>Вы записаны к специалисту: {filteredAppointment.specialist}</h3>
                                        <h3>Дата и время приема: _____________________</h3>
                                    </div>
                                ))}
                        </div>
                    </div>
                }
            </div>
        </BaseLayout>
    );
};

export async function getStaticProps() {
    const usersInfo = await getDocsFromFirebase('users');
    const appointments = await getDocsFromFirebase('appointments');
    const doctorsList = await getDocsFromFirebase('doctors');

    return {
        props: {usersInfo, appointments, doctorsList}
    };
}

export default Profile;