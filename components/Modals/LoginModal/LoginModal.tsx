import {Field, Form, Formik} from "formik";
import {Button} from "../../ui/Button/Button";
import { Modal } from "../Modal/Modal";
import {FC} from "react";
import styles from './Modal.module.scss';

interface Props{
    show: any
    setShowModal:any
}

export const LoginModal:FC<Props> = ({show, setShowModal})  => {

    const onLoginClick = () => {

    }
    return (
        <Modal title={"Вход"} onClose={() => setShowModal(false)} show={show}>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
             onSubmit={values => {
                 console.log(values)
             }}
            >
                {({errors, touched, dirty}) => (
                    <Form className={styles.modal_container}>
                        <Field name="email" placeholder="Ваша почта"/>
                        <Field name="password" placeholder="Пароль"/>

                        <Button
                            type="submit"
                            onClick={onLoginClick}
                            theme="orange"
                        >Войти</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}