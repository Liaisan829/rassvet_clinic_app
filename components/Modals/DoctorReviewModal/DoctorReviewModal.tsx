import {toast, ToastContainer} from "react-toastify";
import {addDoc, collection} from "@firebase/firestore";
import {FC, useState} from "react";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    showModal: any,
    setShowModal: any,
    specialistName: string
}

export const DoctorReviewModal: FC<Props> = ({showModal, setShowModal, specialistName}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [textReview, setTextReview] = useState('');
    const dbDoctorReviewsRef = collection(firestore, 'doctorReviews');

    const notifyToast = () => toast("Спасибо, Ваш отзыв отправлен!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: "success"
    })

    const sendDoctorReview = async () => {
        await addDoc(dbDoctorReviewsRef, {
            time: new Date().toLocaleDateString(),
            name: name,
            phone: phone,
            textReview: textReview,
            specialist: specialistName
        })
        await setShowModal(false)
        await notifyToast()
        window.location.reload()
    }

    return (
        <>
            <Modal title={"Отзыв о специалисте"} onClose={() => setShowModal(false)} show={showModal}>
                <p>Мы будем рады Вашему отзыву!</p>

                <form onSubmit={sendDoctorReview}>
                    <input autoFocus={true} type="text" value={name} name="name" placeholder="Ваше имя" required
                           onChange={(event: any) => setName(event.target.value)}/>
                    <input type="text" name="phone" placeholder="Контактный телефон" required
                           onChange={(event: any) => setPhone(event.target.value)}/>
                    <input type="text" name="specialist" value={"Специалист: " + specialistName} readOnly={true} required/>
                    <input type="text" name="review" placeholder="Напишите отзыв" required
                           onChange={(event: any) => setTextReview(event.target.value)}/>

                    <Button
                        type="submit"
                        theme="orange"
                    >Отправить</Button>
                </form>
            </Modal>
            <ToastContainer/>
        </>
    )
};