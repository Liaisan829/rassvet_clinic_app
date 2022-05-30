import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {logOut} from "../../../config/auth";
import {Button} from "../../ui/Button/Button";
import {Spinner} from "../../ui/Spinner/Spinner";
import styles from "./UserCard.module.scss";

const UserCard = ({user}: any) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const isAdmin = () => {
        return user?.role === "admin";
    }

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timing);
    }, []);

    return (
        <div className={styles.profile}>
            {loading ? <Spinner/> :
                <>
                    <img src={user?.photoURL} alt="фото профиля"/>
                    <div className={styles.profile__info}>
                        <h2 className={styles.profile__info__name}>{user?.surname} {user?.name} {user?.patronymic}</h2>
                        {isAdmin() && <p>Администратор</p>}
                        <h3>Контактные данные:</h3>
                        <div className={styles.profile__info__flex}>
                            <p>{user?.phone}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <Button
                        type='button'
                        onClick={() => {
                            logOut()
                                .then(() => router.push('/'))
                        }}
                        theme='orange'
                    >
                        Выход
                    </Button>
                </>
            }
        </div>
    );
};

export default UserCard;