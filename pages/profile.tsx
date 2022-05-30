import {toast, ToastContainer} from "react-toastify";
import React, {useEffect, useState} from 'react';
import {addDoc, collection, deleteDoc, doc} from "@firebase/firestore";
import {useRouter} from "next/router";
import Image from "next/image";
import {useAuth} from "../config/auth";
import {firestore} from "../config/firebase";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import UserCard from "../components/Card/UserCard/UserCard";
import {Button} from '../components/ui/Button/Button';
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {AddDoctorModal} from "../components/Modals/AddDoctorModal/AddDoctorModal";
import {Spinner} from "../components/ui/Spinner/Spinner";
import applyNote from "/public/profile/applyNote.svg";
import styles from '/styles/pagesStyles/profile.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({usersInfo, appointments, doctorsList}: any) => {
    const currentUser = useAuth();
    const [userAppointments, setUserAppointments] = useState<any>([]);
    const [reviewer, setReviewerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const reviewsCollectionRef = collection(firestore, 'reviews');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);

    const notifyToast = () => toast('Спасибо, ваш отзыв о сайте записан!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    });

    useEffect(() => {
        usersInfo
            .filter((user: any) => (
                user.email === currentUser?.email)).map((loggedUser: any) => {
            setUser(loggedUser)
        })

        getUserAppointments()
    }, [])

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timing);
    }, []);

    const getUserAppointments = () => {
        const apps = appointments?.filter((appointment: any) => (currentUser?.email ===
            appointment.email))

        setUserAppointments(apps);
    }

    const isAdmin = () => {
        return user?.role === "admin";
    }

    const onPreview = (doctor: any) => {
        router.push(`/doctorsList/${doctor.fullName}`)
    }

    const onAddNew = () => {
        setShowAddDoctorModal(true)
    }

    const onDelete = async (shortName: string) => {
        const docRef = doc(firestore, "doctors", shortName);
        if (window.confirm("Удалить специалиста?")) {
            await deleteDoc(docRef);
        }
        await alert("deleted");
    }

    const createReview = async () => {
        await addDoc(reviewsCollectionRef, {
            time: new Date().toLocaleDateString(),
            reviewer,
            reviewText
        });
        await setReviewerName('');
        await setReviewText('');
        await notifyToast();
    };

    const setReviewer = (event: any) => {
        setReviewerName(event.target.value);
    };

    const setReview = (event: any) => {
        setReviewText(event.target.value);
    };

    return (
        <BaseLayout title="Профиль">
            <div className={styles.profile}>
                <div className={styles.userInfo}>
                    <UserCard user={user}/>
                    {isAdmin() ?
                        <div className={styles.doctors}>
                            <div className={styles.doctors__row}>
                                {doctorsList.map((doctor: any) => (
                                    <div className={styles.doctors__row__item}>
                                        <p>{doctor.fullName}</p>
                                        <Button
                                            type={"button"}
                                            theme={"transparent"}
                                            onClick={() => onPreview(doctor)}
                                            children={"Подробнее"}
                                        />
                                        <Button
                                            type={"button"}
                                            theme={"orange"}
                                            onClick={() => onDelete(doctor.shortName)}
                                            children={"Удалить"}
                                        />
                                    </div>
                                ))}
                            </div>
                            <Button
                                type={"button"}
                                theme={"orange"}
                                onClick={onAddNew}>
                                Добавить специалиста
                            </Button>
                            <AddDoctorModal
                                showModal={showAddDoctorModal}
                                setShowModal={setShowAddDoctorModal}
                            />
                        </div>
                        :
                        <div className={styles.visits}>
                            <h1>Записи на прием</h1>
                            <div className={styles.visits__info}>
                                {loading ? <Spinner/> :
                                    <>
                                        {userAppointments?.length === 0
                                            ?
                                            <div className={styles.visits__info__content}>
                                                <Image src={applyNote} width={200} height={200} alt={"запись"}/>
                                                <h3>Здесь будут отображаться Ваши записи</h3>
                                            </div>
                                            :
                                            userAppointments?.map((filteredAppointment: any) => (
                                                <div key={filteredAppointment.email}
                                                     className={styles.visits__info__content}>
                                                    <h3>Вы записаны к
                                                        специалисту: {filteredAppointment?.specialist}</h3>
                                                    <h3>Дата и время приема: {filteredAppointment?.date}</h3>
                                                </div>
                                            ))}
                                    </>
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.review__block}>
                    {!isAdmin() ?
                        <>
                            <h1>Отзывы</h1>
                            <p>Хотите оставить отзыв о клинике &quot;Рассвет&quot;? Заполните форму:</p>
                            <form onSubmit={createReview} className={styles.review}>
                                <input
                                    type='text'
                                    required
                                    placeholder='Введите фамилию и имя'
                                    className={styles.review__reviewName}
                                    onChange={setReviewer}
                                />
                                <textarea
                                    placeholder='Напишите отзыв'
                                    required
                                    className={styles.review__reviewText}
                                    onChange={setReview}
                                />
                                <div className={styles.review__button}>
                                    <Button
                                        type='submit'
                                        theme={'orange'}
                                    >Отправить отзыв</Button>
                                </div>
                            </form>
                        </>
                        : null
                    }
                </div>
                <ToastContainer/>
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

