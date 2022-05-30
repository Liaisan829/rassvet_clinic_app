import {addDoc, collection, doc, updateDoc} from "@firebase/firestore";
import {FC, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import useRouter from "next/router";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    showModal: any,
    setShowModal: any,
    specialist: any,
}

export const AppointmentModal: FC<Props> = ({showModal, setShowModal, specialist}) => {
    const [fullUserName, setFullUserName] = useState('');
    const router = useRouter;
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectValue, setSelectValue] = useState<any>('');
    const databaseRef = collection(firestore, 'appointments');
    const docRef = doc(firestore, "doctors", `${specialist.shortName}`)

    const notifyToast = () => toast("Спасибо, Ваш отзыв отправлен!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: "success"
    })

    const sendAppointment = async () => {
        await addDoc(databaseRef, {
            fullName: fullUserName,
            phone: phone,
            email: email,
            date: selectValue,
            specialist: specialist?.fullName
        });
        await setShowModal(false)
        await updateDoc(docRef, {
            date: deleteSelectedDate(selectValue)
        })
        await router.reload();
        await notifyToast()
        // await deleteDateFromDoctor(selectValue);
    }
    const deleteSelectedDate = (date: string) => {
        return specialist.date.filter((e: string) => e !== date)
    }

    return (
        <>
            <Modal title={"Запись на прием в клинику"} onClose={() => setShowModal(false)} show={showModal}>
                <p>Администратор клиники с радостью ответит на ваши
                    вопросы и запишет к нужному специалисту</p>

                <form onSubmit={sendAppointment}>
                    <input type="text" value={fullUserName} name="fullUserName" placeholder="Ваше ФИО" required
                           onChange={(event: any) => setFullUserName(event.target.value)}/>
                    <input type="phone" name="phone" placeholder="Контактный телефон" required
                           onChange={(event: any) => setPhone(event.target.value)}/>
                    <input type="email" name="email" placeholder="Ваш email" required
                           onChange={(event: any) => setEmail(event.target.value)}/>
                    <input type="text" name="specialist" value={"Специалист: " + specialist?.fullName} readOnly={true}/>

                    <select
                        className={"select"}
                        value={specialist.date.length === 0 ? "К сожалению, запись на данный момент невозможна" : "Выберите дату и время приема"}
                        onChange={(e: any) => setSelectValue(e.target.value)}
                    >
                        <option
                            className={"option"}
                            disabled
                        >{specialist.date.length === 0 ? "К сожалению, запись на данный момент невозможна" : "Выберите дату и время приема"}
                        </option>

                        {specialist.date?.map((date: any) => (
                            <option
                                className={"option"}
                                key={date}
                                value={date}
                            >{date}</option>
                        ))}

                    </select>

                    <Button
                        type="submit"
                        theme="orange"
                        onClick={sendAppointment}
                        disabled={specialist.date.length === 0}
                    >Отправить</Button>
                </form>
            </Modal>

            <ToastContainer/>
        </>
    )
};