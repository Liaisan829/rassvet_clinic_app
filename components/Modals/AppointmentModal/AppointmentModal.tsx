import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {FC, useState} from "react";
import {addDoc, collection} from "@firebase/firestore";
import {database} from "../../../config/firebase";

interface Props {
    showModal: any,
    setShowModal: any,
    specialistName: string
}

export const AppointmentModal: FC<Props> = ({showModal, setShowModal, specialistName}) => {
    const [fullUserName, setFullUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const databaseRef = collection(database, 'appointments');

    const sendAppointment = async () => {
        await addDoc(databaseRef, {fullName: fullUserName, phone: phone, email: email, specialist: specialistName})
        await setShowModal(false)
    }

    return (
        <Modal title={"Запись на прием в клинику"} onClose={() => setShowModal(false)} show={showModal}>
            <p>Администратор клиники с радостью ответит на ваши
                вопросы и запишет к нужному специалисту</p>

            <input type="text" value={fullUserName} name="fullUserName" placeholder="Ваше ФИО"
                   onChange={(event: any) => setFullUserName(event.target.value)}/>
            <input type="text" name="phone" placeholder="Контактный телефон"
                   onChange={(event: any) => setPhone(event.target.value)}/>
            <input type="text" name="email" placeholder="Ваш email"
                   onChange={(event: any) => setEmail(event.target.value)}/>
            <input type="text" name="specialist" value={"Специалист: " + specialistName} readOnly={true}/>
            <input type='datetime-local'/>

            <Button
                type="submit"
                theme="orange"
                onClick={sendAppointment}
            >Отправить</Button>

        </Modal>
    )
}