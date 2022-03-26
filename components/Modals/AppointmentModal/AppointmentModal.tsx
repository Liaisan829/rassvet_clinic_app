import {Field, Form, Formik} from "formik";
import {Button} from "../../ui/Button/Button";
import { Modal } from "../Modal/Modal";
import {FC} from "react";
import styles from '../Modal/Modal.module.scss';

interface Props{
    showModal: any
    setShowModal:any
}

export const AppointmentModal:FC<Props> = ({showModal, setShowModal})  => {
    const onSendClick = () => {
        setShowModal(false)
    }

    return (
        <Modal title={"Запись на прием в клинику"} onClose={() => setShowModal(false)} show={showModal}>
            <Formik initialValues={{
                fullName: "",
                birthDate: "",
                phone: ""
            }}
                    onSubmit={values => {
                        console.log(values)
                    }}
            >
                {({errors, touched, dirty}) => (
                    <Form className={styles.modal_container}>
                        <p>Администратор клиники с радостью ответит на ваши
                            вопросы и запишет к нужному специалисту</p>
                        <Field name="fullName" placeholder="Ваше ФИО"/>
                        <Field name="birthDate" placeholder="Дата рождения"/>
                        <Field name="phone" placeholder="Контактный телефон"/>
                        <h5>Специалист: _______________________</h5>
                        <Button
                            type="submit"
                            theme="orange"
                            onClick={onSendClick}
                        >Отправить</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}