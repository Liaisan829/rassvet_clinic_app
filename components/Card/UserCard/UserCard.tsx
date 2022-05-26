import React from 'react';
import styles from "./UserCard.module.scss";
import {ImageUpload} from "../../ImageUpload/ImageUpload";

const UserCard = ({user}: any) => {
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
                    </div>
                </div>
            </ImageUpload>
        </div>
    );
};

export default UserCard;