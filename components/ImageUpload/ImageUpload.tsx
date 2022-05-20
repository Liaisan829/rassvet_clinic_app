import {FC, ReactNode, useEffect, useState} from "react";
import {uploadUserPhoto, useAuth} from "../../config/auth";
import Image from "next/image";
import {Button} from "../ui/Button/Button";
import {toast} from "react-toastify";
import styles from './ImageUpload.module.scss'

interface Props {
    children: ReactNode;
}

export const ImageUpload: FC<Props> = ({children}) => {
    const currentUser = useAuth()
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const [photoURL, setPhotoURL] = useState(currentUser.photoURL)
    const notifyToast = () => toast('Новое фото профиля успешно загружено!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    });

    function handleChange(e: any) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    function handleClick() {
        uploadUserPhoto(photo, currentUser, setLoading)
            .then()
        notifyToast()
        window.location.reload()
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL)
        }
    }, [currentUser])


    return (
        <div className={styles.imageUpload}>

            <img src={photoURL} alt={"avatar"} width={"50"} height={"50"}/>

            {children}

            <input
                type="file"
                onChange={handleChange}
            />

            <Button
                type={'button'}
                theme={'transparent'}
                disabled={loading || !photo}
                onClick={handleClick}
            >
                Загрузить фото профиля
            </Button>

        </div>
    )
}