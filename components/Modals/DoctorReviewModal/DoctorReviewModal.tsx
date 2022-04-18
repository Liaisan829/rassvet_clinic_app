import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {FC, useState} from "react";
import {addDoc, collection} from "@firebase/firestore";
import {database} from "../../../config/firebase";
import {toast, ToastContainer} from "react-toastify";

interface Props {
    showModal: any,
    setShowModal: any,
    specialistName: string
}

export const DoctorReviewModal: FC<Props> = ({showModal, setShowModal, specialistName}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [textReview, setTextReview] = useState('');
    const dbDoctorReviewsRef = collection(database, 'doctorReviews');

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
        notifyToast()
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
            <ToastContainer/>
        </>
    )
};