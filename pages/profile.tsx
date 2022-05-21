import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {addDoc, collection, deleteDoc, doc} from '@firebase/firestore';
import {toast, ToastContainer} from 'react-toastify';
import SkeletonAppointmentsComponent from "../components/ui/Skeleton/SkeletonAppointmentsComponent";
import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {Button} from '../components/ui/Button/Button';
import {firestore} from '../config/firebase';
import {logOut, useAuth} from '../config/auth';
import {getDocsFromFirebase} from '../utils/getDocsFromFirebase';
import styles from '/styles/pagesStyles/profile.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import UserCard from "../components/Card/UserCard/UserCard";

const Profile = ({usersInfo, appointments, doctorsList}: any) => {
    const router = useRouter();
    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState<any>([usersInfo]);
    const [doctors, setDoctors] = useState<any>([doctorsList]);
    const [reviewer, setReviewerName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [isAppointments, setIsAppointments] = useState(false);
    const reviewsCollectionRef = collection(firestore, 'reviews');
    const notifyToast = () => toast('Спасибо, Ваш отзыв отправлен!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    });


    useEffect(() => {
        let user = usersInfo.findIndex(function (user: any) {
            return user.email === currentUser.email;
        });

        let ans = usersInfo[user];

        setUserInfo(ans);


    }, []);

    const onDelete = async (shortName: string) => {
        const docRef = doc(firestore, "doctors", shortName);
        if (window.confirm("Удалить специалиста?")) {
            await deleteDoc(docRef);
        }
        await alert("deleted");
    }


    // useEffect(() => {
    //     setLoading(true);
    //     const timing = setTimeout(() => {
    //         setLoading(false);
    //     }, 2800);
    //     return () => clearTimeout(timing);
    // }, []);


    const createReview = async () => {
        await addDoc(reviewsCollectionRef, {
            time: new Date().toLocaleDateString(),
            reviewer,
            reviewText
        });
        await setReviewerName('');
        await setReviewText('');
        notifyToast();
    };

    const setReviewer = (event: any) => {
        setReviewerName(event.target.value);
    };

    const setReview = (event: any) => {
        setReviewText(event.target.value);
    };
    return (
        <BaseLayout title='Профиль'>
            <section className={styles.userInfo}>
                <UserCard user={usersInfo}/>

                <div className={styles.visits}>
                    <h1>Записи на прием</h1>
                    {/*<Image src={applyNote} width={200} height={200} alt={'applyNote'}/>*/}
                    {loading ? <SkeletonAppointmentsComponent/> : (
                        // не помню для чего нужен этот стейт, пока выводятся просто все записи из бд
                        // isAppointments ?
                        appointments.filter((appointment: any) => (currentUser.email === appointment.email)).map((filteredAppointment: any) => (
                                <div key={filteredAppointment.email} className={styles.visits__info}>
                                    <h3>Вы записаны к специалисту: {filteredAppointment.specialist}</h3>
                                    <h3>Дата и время приема: _____________________</h3>
                                </div>
                            )
                            // ) : <Image src={applyNote} width={200} height={200} alt={"applyNote"}/>
                        ))}
                </div>
            </section>

            {/*{admin &&*/}
            {/*    <>*/}
            {/*        <h1>Администратор клиники &quot;Рассвет&quot;</h1>*/}
            {/*        <section className={styles.admin__info}>*/}
            {/*            <p>{admin.surname}</p>*/}
            {/*            <p>{admin.name}</p>*/}
            {/*            <p>{admin.patronymic}</p>*/}
            {/*            <p>{admin.email}</p>*/}
            {/*        </section>*/}

            {/*        <table className={styles.styled_table}>*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th className={styles.styled_table__head}>Полное имя</th>*/}
            {/*                <th className={styles.styled_table__head}>Специальность</th>*/}
            {/*                <th className={styles.styled_table__head}>Опыть работы</th>*/}
            {/*                <th className={styles.styled_table__head}>Действие</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {doctors?.map((doctor: any) => {*/}
            {/*                return (*/}
            {/*                    <tr key={doctor.id}>*/}
            {/*                        <td>{doctor.fullName}</td>*/}
            {/*                        <td>{doctor.speciality}</td>*/}
            {/*                        <td>{doctor.experience}</td>*/}
            {/*                        <td>*/}
            {/*                            <Link href={'/admin/addEdit'}>*/}
            {/*                                <button*/}
            {/*                                    className={styles.styled_table__btn}*/}
            {/*                                    type={"button"}*/}
            {/*                                >*/}
            {/*                                    Редактировать*/}
            {/*                                </button>*/}
            {/*                            </Link>*/}
            {/*                            <button*/}
            {/*                                onClick={() => onDelete(doctor.shortName)}*/}
            {/*                                className={styles.styled_table__btn}*/}
            {/*                                type={"button"}*/}
            {/*                            >*/}
            {/*                                Удалить*/}
            {/*                            </button>*/}
            {/*                            <button*/}
            {/*                                onClick={() => {*/}
            {/*                                    router.push(`/doctorsList/${doctor.fullName}`)*/}
            {/*                                }}*/}
            {/*                                className={styles.styled_table__btn}*/}
            {/*                                type={"button"}*/}
            {/*                            >*/}
            {/*                                Посмотреть*/}
            {/*                            </button>*/}
            {/*                        </td>*/}
            {/*                    </tr>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*            </tbody>*/}
            {/*        </table>*/}
            {/*        <Link href={'/admin/addEdit'}>*/}
            {/*            <a>*/}
            {/*                <Button*/}
            {/*                    type={"button"}*/}
            {/*                    theme={"transparent"}*/}
            {/*                >*/}
            {/*                    Добавить специалиста*/}
            {/*                </Button>*/}
            {/*            </a>*/}
            {/*        </Link>*/}
            {/*    </>*/}
            {/*}*/}

            <div className={styles.review}>
                <h1>Отзывы</h1>
                <p>Хотите оставить отзыв о клинике &quot;Рассвет&quot;? Заполните форму:</p>
                <input
                    type='text'
                    placeholder='Введите фамилию и имя'
                    className={styles.review__reviewName}
                    onChange={setReviewer}
                />
                <textarea
                    placeholder='Напишите отзыв'
                    className={styles.review__reviewText}
                    onChange={setReview}
                />
                <div className={styles.review__button}>
                    <Button
                        type='submit'
                        theme={'orange'}
                        onClick={createReview}
                    >Отправить отзыв</Button>
                </div>
            </div>
            <div className={styles.logoutBtn}>
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
            </div>
            <ToastContainer/>
        </BaseLayout>
    );
};

export default Profile;

export async function getStaticProps() {
    const usersInfo = await getDocsFromFirebase('users');
    const appointments = await getDocsFromFirebase('appointments');
    const doctorsList = await getDocsFromFirebase('doctors');

    return {
        props: {usersInfo, appointments, doctorsList}
    };
}