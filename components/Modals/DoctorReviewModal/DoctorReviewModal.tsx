import {toast, ToastContainer} from "react-toastify";
import {addDoc, collection} from "@firebase/firestore";
import {FC, useState} from "react";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";

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
        autoClose: 3000,
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
                <input type="text" value={name} name="name" placeholder="Ваше имя"
                       onChange={(event: any) => setName(event.target.value)}/>
                <input type="text" name="phone" placeholder="Контактный телефон"
                       onChange={(event: any) => setPhone(event.target.value)}/>
                <input type="text" name="specialist" value={"Специалист: " + specialistName} readOnly={true}/>
                <input type="text" name="review" placeholder="Напишите отзыв"
                       onChange={(event: any) => setTextReview(event.target.value)}/>

                <Button
                    type="submit"
                    theme="orange"
                    onClick={sendDoctorReview}
                >Отправить</Button>

            </Modal>
            {/*<ToastContainer/>*/}
        </>
    )
};