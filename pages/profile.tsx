import {useEffect, useState} from "react";
import Image from "next/image";
import {Button} from "../components/ui/Button/Button";
import {useAuth} from "../context/AuthContext";
import {database} from "../config/firebase";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {addDoc, collection, getDocs} from "@firebase/firestore";
import SkeletonAppointmentsComponent from "../components/Skeleton/SkeletonAppointmentsComponent";
import photoURL from '../public/profile/profileLogo.svg';
import applyNote from '../public/profile/applyNote.svg';
import styles from "../styles/pagesStyles/profile.module.scss";

const Profile = () => {
    const {user} = useAuth()

    const [reviewer, setReviewerName] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const [appointments, setAppointments] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [isAppointments, setIsAppointments] = useState(false)

    const databaseRef = collection(database, 'appointments');
    const reviewsCollectionRef = collection(database, "reviews");

    useEffect(() => {
        setIsAppointments(true)
        const getAppointments = async () => {
            const data = await getDocs(databaseRef);
            setAppointments(data.docs.map((doc) => ({...doc.data()})));
        };
        getAppointments().then(err => console.log(err))
    }, [])

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 2800);
        return () => clearTimeout(timing);
    }, []);

    const createReview = async () => {
        await addDoc(reviewsCollectionRef, {
            time: new Date().toLocaleDateString(),
            reviewer,
            reviewText
        });
    }

    const setReviewer = (event: any) => {
        console.log(event.target.value);
        setReviewerName(event.target.value)
    };

    const setReview = (event: any) => {
        console.log(event.target.value);
        setReviewText(event.target.value)
    };

    return (
        <BaseLayout title="Профиль">
            <section className={styles.userInfo}>
                <div className={styles.profile}>
                    <Image className={styles.profile__photo} src={photoURL} width={120} height={120} alt={"image"}/>
                    <div className={styles.profileInfo__info}>
                        <h1>{user.displayName}</h1>
                        <p>{user.email}</p>
                        <p>12.03.2022</p>
                    </div>
                </div>

                <div className={styles.visits}>
                    <h1>Записи на прием</h1>
                    {loading ? <SkeletonAppointmentsComponent/> : (
                        isAppointments ?
                            appointments.filter((appointment: any) => (user.email === appointment.email)).map((filteredAppointment: any) => (
                                    <div key={filteredAppointment.email} className={styles.visits__info}>
                                        <h3>Вы записаны к специалисту: {filteredAppointment.specialist}</h3>
                                        <h3>Дата и время приема: _____________________</h3>
                                    </div>
                                )
                            ) : <Image src={applyNote} width={200} height={200}/>
                    )}
                </div>
            </section>

            <div className={styles.review}>
                <h1>Отзывы</h1>
                <p>Хотите оставить отзыв о клинике &quot;Рассвет&quot;? Заполните форму:</p>
                <input
                    type="text"
                    placeholder="Введите фамилию и имя"
                    className={styles.review__reviewName}
                    onChange={setReviewer}
                />
                <textarea
                    placeholder="Напишите отзыв"
                    className={styles.review__reviewText}
                    onChange={setReview}
                />
                <div className={styles.review__button}>
                    <Button
                        type="submit"
                        theme={"orange"}
                        onClick={createReview}
                    >Отправить отзыв</Button>
                </div>
            </div>
        </BaseLayout>
    );
}
export default Profile;