import {Button} from "../../ui/Button/Button";
import { Modal } from "../Modal/Modal";
import {FC, useState} from "react";
import {useRouter} from "next/router";
import {addDoc, collection} from "@firebase/firestore";
import {database} from "../../../config/firebase";

interface Props{
    showModal: any
    setShowModal:any
}

export const AppointmentModal:FC<Props> = ({showModal, setShowModal})  => {
    const {query} = useRouter();
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phone, setPhone] = useState('');
    const databaseRef = collection(database, 'appointments');

    const sendAppointment = async () => {
        await addDoc(databaseRef, {fullName: fullName, birthDate: birthDate, phone: phone})
        await setShowModal(false)
    }

    return (
        <Modal title={"Запись на прием в клинику"} onClose={() => setShowModal(false)} show={showModal}>
            <p>Администратор клиники с радостью ответит на ваши
                вопросы и запишет к нужному специалисту</p>

            <input type="text" value={fullName} name="fullName" placeholder="Ваше ФИО"
                   onChange={(event:any) => setFullName(event.target.value)}/>
            <input type="text" name="birthDate" placeholder="Дата рождения"
                   onChange={(event:any) => setBirthDate(event.target.value)}/>
            <input type="text" name="phone" placeholder="Контактный телефон"
                   onChange={(event:any) => setPhone(event.target.value)}/>

            <h5>Специалист: {query.fullName}</h5>

            <Button
                type="submit"
                theme="orange"
                onClick={sendAppointment}
            >Отправить</Button>

            {/*<Formik initialValues={{*/}
            {/*    fullName: "",*/}
            {/*    birthDate: "",*/}
            {/*    phone: ""*/}
            {/*}}*/}
            {/*        onSubmit={values => {*/}
            {/*            console.log(values)*/}
            {/*        }}*/}
            {/*>*/}
            {/*    {({errors, touched, dirty}) => (*/}
            {/*        <Form className={styles.modal_container}>*/}
            {/*            <p>Администратор клиники с радостью ответит на ваши*/}
            {/*                вопросы и запишет к нужному специалисту</p>*/}
            {/*            <Field*/}
            {/*                name="fullName"*/}
            {/*                value={fullName}*/}
            {/*                placeholder="Ваше ФИО"*/}
            {/*                onChange={(event:any) => setFullName(event.target.value)}*/}
            {/*            />*/}
            {/*            <Field*/}
            {/*                name="birthDate"*/}
            {/*                value={birthDate}*/}
            {/*                placeholder="Дата рождения"*/}
            {/*                onChange={(event:any) => setBirthDate(event.target.value)}*/}
            {/*            />*/}
            {/*            <Field*/}
            {/*                name="phone"*/}
            {/*                value={phone}*/}
            {/*                placeholder="Контактный телефон"*/}
            {/*                onChange={(event:any) => setPhone(event.target.value)}*/}
            {/*            />*/}
            {/*            <h5>Специалист: {query.fullName}</h5>*/}
            {/*            <Button*/}
            {/*                type="submit"*/}
            {/*                theme="orange"*/}
            {/*                onClick={onSendClick}*/}
            {/*            >Отправить</Button>*/}
            {/*        </Form>*/}
            {/*    )}*/}
            {/*</Formik>*/}
        </Modal>
    )
}