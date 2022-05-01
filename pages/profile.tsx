import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {addDoc, collection} from '@firebase/firestore';
import {toast, ToastContainer} from 'react-toastify';
import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {Button} from '../components/ui/Button/Button';
import {firestore} from '../config/firebase';
import {logOut, useAuth} from '../config/auth';
import {getDocsFromFirebase} from '../utils/getDocsFromFirebase';
import styles from '../styles/pagesStyles/profile.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonAppointmentsComponent from "../components/ui/Skeleton/SkeletonAppointmentsComponent";
import {ImageUpload} from "../components/ImageUpload/ImageUpload";

const Profile = ({usersInfo, appointments}: any) => {
    const router = useRouter();
    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState<any>([]);
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

        if(ans.role === "admin"){
            router.push("/admin")
        }
    }, []);


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
                <div className={styles.profile}>
                    <ImageUpload>
                        <div className={styles.profileInfo__info}>
                            <p>{userInfo.surname} {userInfo.name} {userInfo.patronymic}</p>
                            <h3>Контактные данные:</h3>
                            <p>{userInfo.phone}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </ImageUpload>
                </div>
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

    return {
        props: {usersInfo, appointments}
    };
}