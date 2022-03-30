import {useEffect, useState} from "react";
import Image from "next/image";
import {Button} from "../components/ui/Button/Button";
import {useAuth} from "../context/AuthContext";
import {database, upload} from "../config/firebase";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import profileLogo from "../public/profile/profileLogo.svg";
import apply_note from "../public/profile/apply_note.svg";
import styles from "../styles/pagesStyles/profile.module.scss";
import {addDoc, collection, getDocs} from "@firebase/firestore";
import {useRouter} from "next/router";

const Profile = () => {
    const {user} = useAuth()
    const [photo, setPhoto] = useState<any>(null);
    const [photoURL, setPhotoURL] = useState(profileLogo);
    const [loading, setLoading] = useState(false);
    const databaseRef = collection(database, 'appointments');
    const [appointments, setAppointments] = useState<any>([]);
    const {query} = useRouter();

    const [author, setAuthor] = useState(null);
    const [reviewText, setReviewText] = useState("");

    const reviewsCollectionRef = collection(database, "reviews");

    const createReview = async () => {
        await addDoc(reviewsCollectionRef, {
            author,
            reviewText
        });
    }

    const setAuthorInfo = (event: any) => {
        console.log(event.target.value);
        setAuthor(event.target.value)
    };

    const setReview = (event: any) => {
        console.log(event.target.value);
        setReviewText(event.target.value)
    };

    const handleChange = (event: any) => {
        if(event.target.files[0]){
            setPhoto(event.target.files[0])
        }
    };

    const handleClick = () => {
        upload(photo, user, setLoading);
    }

    useEffect(()=>{
        if(user?.photoURL){
            setPhotoURL(user.photoURL);
        }
    }, [user]);

    // useEffect(() => {
    //     const getAppointments = async () => {
    //         const data = await getDocs(databaseRef);
    //         setAppointments(data.docs.map((doc) => ({...doc.data()})));
    //     };
    //     getAppointments()
    // }, [])

    return (
        <BaseLayout title="Профиль">

            <aside className={styles.profile}>
                <Image className={styles.profile__photo} src={photoURL} width={120} height={120} alt={"image"}/>
                <input type="file" onChange={handleChange}/>
                <button disabled={loading || !photo} onClick={handleClick}>Upload</button>

                <div className={styles.profileInfo__info}>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                    <p>12.03.2022</p>
                </div>
            </aside>

            <div className={styles.visits}>
                <h1>Записи на прием</h1>
                <div className={styles.visits__info}>
                    <Image src={apply_note} width={180} height={180}/>
                    <p>Здесь будут записи на предстоящие приемы</p>
                    {/*<h3>{appointment.fullName}</h3>*/}
                    {/*<h3>{appointment.phone}</h3>*/}
                </div>
                {/*{appointments.map((appointment:any) => {*/}
                {/*    return(*/}
                {/*        <div className={styles.visits__info}>*/}
                {/*            <Image src={apply_note} width={180} height={180}/>*/}
                {/*            <p>Здесь будут записи на предстоящие приемы</p>*/}
                {/*            /!*<h3>{appointment.fullName}</h3>*!/*/}
                {/*            /!*<h3>{appointment.phone}</h3>*!/*/}
                {/*        </div>*/}
                {/*        )*/}
                {/*})}*/}
            </div>

            <div className={styles.review}>
                <h1>Отзывы</h1>
                <p>Хотите оставить отзыв о клинике &quot;Рассвет&quot;? Заполните форму:</p>
                <input
                    type="text"
                    placeholder="Введите фамилию и имя"
                    className={styles.review__reviewName}
                    onChange={setAuthorInfo}
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