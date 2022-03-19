import {Field, Form, Formik} from "formik";
import Link from "next/link";
import SignUpLayout from "../components/SignUpLayout/SignUpLayout";
import styles from '../styles/pagesStyles/signInPage.module.scss';

const SignUp = () => {
    return (
        <SignUpLayout>
            <Formik initialValues={{
                surname: "",
                name: "",
                patronymic: ""
            }}
                    onSubmit={values => {
                        console.log(values)
                    }}
            >
                {({errors, touched, dirty}) => (
                    <Form className={styles.modal_container}>
                        <Field name="surname" placeholder="Фамилия"/>
                        <Field name="name" placeholder="Имя"/>
                        <Field name="surname" placeholder="Отчество"/>
                        <div className={styles.modal_container__gender}>
                            <h4>Пол:</h4>
                            <label className={styles.modal_container__gender__item}>
                                Мужской
                                <Field type="checkbox" name="checked" value="female"/>
                            </label>
                            <label className={styles.modal_container__gender__item}>
                                Женский
                                <Field type="checkbox" name="checked" value="male"/>
                            </label>
                        </div>
                        <div className={styles.loginPage__popup__bottom}>
                            <p><Link href={"/signUp2"}>Следующий шаг</Link></p>
                        </div>
                    </Form>
                )}
            </Formik>
        </SignUpLayout>
    )
}

export default SignUp;