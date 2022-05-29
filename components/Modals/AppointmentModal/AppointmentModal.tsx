import {addDoc, collection, doc, updateDoc} from "@firebase/firestore";
import {FC, useState} from "react";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";

interface Props {
    showModal: any,
    setShowModal: any,
    specialist: any,
}

export const AppointmentModal: FC<Props> = ({showModal, setShowModal, specialist}) => {
    const [fullUserName, setFullUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectValue, setSelectValue] = useState<any>('');
    const databaseRef = collection(firestore, 'appointments');
    const docRef = doc(firestore, "doctors", `${specialist.shortName}`)

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
            //date:здесь будет массив который в отдельном методе фильтром убриает использованную дату
        })
        // await deleteDateFromDoctor(selectValue);
    }
    //
    // const deleteDateFromDoctor = (date: string) => {
    //     //удаляет только "локально", уже полученный массив
    //     const index = specialist.date.indexOf(date);
    //     if (index > -1) {
    //         specialist.date.splice(index, 1);
    //     }
    // }

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
            <input type="text" name="specialist" value={"Специалист: " + specialist?.fullName} readOnly={true}/>

            <select
                className={"select"}
                defaultValue={"Выберите дату и время приема"}
                onChange={(e: any) => setSelectValue(e.target.value)}
            >
                <option
                    className={"option"}
                    disabled
                >Выберите дату и время приема
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
            >Отправить</Button>

        </Modal>
    )
};