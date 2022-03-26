import Image from "next/image";
import {Button} from "../components/ui/Button/Button";
import {useAuth} from "../context/AuthContext";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import profileLogo from "../public/profile/profileLogo.svg";
import apply_note from "../public/profile/apply_note.svg";
import styles from "../styles/pagesStyles/profile.module.scss";

const Profile = () => {
    const {user} = useAuth()

    const sendReview = () => {
        console.log("send review")
    }

    return (
        <BaseLayout title="Профиль">

            <aside className={styles.profile}>
                <Image src={profileLogo} width={120} height={120}/>

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
                <input type="text" placeholder="Введите фамилию и имя"/>
                <input type="text" placeholder="Напишите отзыв"/>
                <Button
                    type="submit"
                    theme={"orange"}
                    onClick={sendReview}
                >Отправить отзыв</Button>
            </div>
        </BaseLayout>
    );
}
export default Profile;