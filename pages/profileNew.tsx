import React, {useEffect, useState} from 'react';
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {useAuth} from "../config/auth";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import UserCard from "../components/Card/UserCard/UserCard";
import styles from '/styles/pagesStyles/profile.module.scss';
import {Button} from '../components/ui/Button/Button';
import {useRouter} from "next/router";

const ProfileNew = ({usersInfo, appointments, doctorsList}: any) => {
    const currentUser = useAuth();
    const [users, setUsers] = useState<any>(usersInfo);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        users
            .filter((user: any) => (
                user.email === currentUser.email)).map((loggedUser: any) => {
            setUser(loggedUser)
        })
    }, [])

    const isAdmin = () => {
        return user?.role === "admin";
    }

    const onClick = (doctor: any) => {
        router.push(`/doctorsList/${doctor.fullName}`)
    }
    return (
        <BaseLayout title="Профиль новый">
            <div className={styles.userInfo}>
                <UserCard user={user}/>
                {isAdmin() &&
                    <>
                        <div className={styles.doctors}>
                            <div className={styles.doctors__row}>
                                {doctorsList.map((doctor: any) => (
                                    <>
                                        <p>{doctor.fullName}</p>
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={() => onClick(doctor)}
                                            children={"Подробнее"}
                                        />
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={onClick}
                                            children={"Удалить"}
                                        />
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={onClick}
                                            children={"Изменить"}
                                        />
                                    </>
                                ))}
                            </div>
                        </div>
                    </>
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

export default ProfileNew;