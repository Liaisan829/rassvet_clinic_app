import React, {useEffect, useState} from 'react';
import {deleteDoc, doc} from "@firebase/firestore";
import Link from 'next/link';
import {useRouter} from "next/router";
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {logOut, useAuth} from "../config/auth";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {Button} from "../components/ui/Button/Button";
import {firestore} from "../config/firebase";
import styles from "../styles/pagesStyles/adminPage.module.scss";

const Admin = ({usersInfo, doctors}: any) => {
    const currentUser = useAuth();
    const router = useRouter();
    const [admin, setAdmin] = useState<any>();

    useEffect(() => {
        usersInfo
            .filter((userInfo: any) => (userInfo.email === currentUser.email && userInfo.role === "admin"))
            .map((user: any) => {
                setAdmin(user)
            })
    }, [])

    const onDelete = async (shortName: string) => {
        const docRef = doc(firestore, "doctors", shortName);
        if (window.confirm("Удалить специалиста?")) {
            await deleteDoc(docRef);
        }
        await alert("deleted");
    }

    return (
        <BaseLayout title={"Администратор"}>
            {admin &&
                <>
                    <h1>Администратор клиники &quot;Рассвет&quot;</h1>
                    <section className={styles.admin__info}>
                        <p>{admin.surname}</p>
                        <p>{admin.name}</p>
                        <p>{admin.patronymic}</p>
                        <p>{admin.email}</p>
                    </section>

                    <table className={styles.styled_table}>
                        <thead>
                        <tr>
                            <th className={styles.styled_table__head}>Полное имя</th>
                            <th className={styles.styled_table__head}>Специальность</th>
                            <th className={styles.styled_table__head}>Опыть работы</th>
                            <th className={styles.styled_table__head}>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {doctors?.map((doctor: any) => {
                            return (
                                <tr key={doctor.id}>
                                    <td>{doctor.fullName}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.experience}</td>
                                    <td>
                                        <Link href={'/admin/addEdit'}>
                                            <button
                                                className={styles.styled_table__btn}
                                                type={"button"}
                                            >
                                                Редактировать
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => onDelete(doctor.shortName)}
                                            className={styles.styled_table__btn}
                                            type={"button"}
                                        >
                                            Удалить
                                        </button>
                                        <button
                                            onClick={() => {
                                                router.push(`/doctorsList/${doctor.fullName}`)
                                            }}
                                            className={styles.styled_table__btn}
                                            type={"button"}
                                        >
                                            Посмотреть
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <Link href={'/admin/addEdit'}>
                        <a>
                            <Button
                                type={"button"}
                                theme={"transparent"}
                            >
                                Добавить специалиста
                            </Button>
                        </a>
                    </Link>
                </>
            }

            <Button
                type='button'
                onClick={() => {
                    logOut();
                    router.push('/');
                }}
                theme='transparent'
            >
                Выход
            </Button>
        </BaseLayout>
    );
};

export default Admin;

export async function getStaticProps() {
    const usersInfo = await getDocsFromFirebase('users');
    const doctors = await getDocsFromFirebase("doctors");

    return {
        props: {usersInfo, doctors}
    };
}