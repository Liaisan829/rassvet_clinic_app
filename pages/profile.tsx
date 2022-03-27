import {useEffect, useState} from "react";
import Image from "next/image";
import {storage} from "../config/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {Button} from "../components/ui/Button/Button";
import {useAuth} from "../context/AuthContext";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import profileLogo from "../public/profile/profileLogo.svg";
import apply_note from "../public/profile/apply_note.svg";
import styles from "../styles/pagesStyles/profile.module.scss";

const Profile = () => {
    const {user} = useAuth()
    const [image, setImage] = useState<any>(null);
    const [photoURL, setPhotoURL] = useState(profileLogo);

    const sendReview = () => {
        console.log("send review")
    }

    const handleImageChange = (event: any) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    const handleSubmit = () => {
        const imageRef = ref(storage, "image");// "image" - название файла или папки внутри firebase
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((photoURL) => {
                        setPhotoURL(photoURL);
                    }).catch(error => {
                    console.log(error.message, "Error getting the image url");
                })
                setImage(null);
            }).catch(error => {
            console.log(error.message);
        });
    };

    return (
        <BaseLayout title="Профиль">

            <aside className={styles.profile}>
                <Image src={photoURL} width={120} height={120} alt={"image"}/>
                <input type="file" onChange={handleImageChange}/>
                <button onClick={handleSubmit}>Submit</button>

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
                </div>
            </div>

            <div className={styles.review}>
                <h1>Отзывы</h1>
                <p>Хотите оставить отзыв о клинике &quot;Рассвет&quot;? Заполните форму:</p>
                <input type="text" placeholder="Введите фамилию и имя" className={styles.review__reviewName}/>
                <input type="text" placeholder="Напишите отзыв" className={styles.review__reviewBlock}/>
                <div className={styles.review__button}>
                    <Button
                        type="submit"
                        theme={"orange"}
                        onClick={sendReview}
                    >Отправить отзыв</Button>
                </div>
            </div>
        </BaseLayout>
    )
        ;
}
export default Profile;