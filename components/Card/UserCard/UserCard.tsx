import React from 'react';
import styles from "./UserCard.module.scss";
import {ImageUpload} from "../../ImageUpload/ImageUpload";
import {logOut} from "../../../config/auth";
import {Button} from "../../ui/Button/Button";
import {useRouter} from "next/router";

const UserCard = ({user}: any) => {
    const router = useRouter();

    const isAdmin = () => {
        return user?.role === "admin";
    }

    return (
        <div className={styles.profile}>
            <ImageUpload>
            {/*<img src={user?.photoURL} alt="avatar"/>*/}
                <div className={styles.profile__info}>
                    <p>{user?.surname} {user?.name} {user?.patronymic}</p>
                    {isAdmin() && <p>Администратор</p>}
                    <h3>Контактные данные:</h3>
                    <div className={styles.profile__info__flex}>
                        <p>{user?.phone}</p>
                        <p>{user?.email}</p>
                        <p>{user?.birthDate}</p>
                    </div>
                </div>
            </ImageUpload>
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
        </div>
    );
};

export default UserCard;