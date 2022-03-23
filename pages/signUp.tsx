import {Field, Form, Formik} from "formik";
import Link from "next/link";
import {Button} from "../components/ui/Button/Button";
import Image from "next/image";
import logo from "../public/header/logo.svg";
import styles from '../styles/pagesStyles/signUpPage.module.scss';

const SignUp = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPage__login}>
                <Image src={logo} width={180} height={110} alt="logo"/>
                <div className={styles.loginPage__popup}>
                    <div className={styles.loginPage__popup__top}>
                        <h2>Регистрация</h2>
                        <Link href={'/'}>
                            <Button
                                type="button"
                                theme=""
                                color={'#000000'}
                            ><h2>X</h2></Button>
                        </Link>
                    </div>
                    <Formik initialValues={{
                        surname: "",
                        name: "",
                        patronymic: "",
                        password: "",
                        repassword: "",
                        birthDate: "",
                        email: "",
                        phone: ""
                    }}
                            onSubmit={values => {
                                console.log(values)
                            }}
                    >
                        {({errors, touched, dirty}) => (
                            <Form className={styles.modal_container}>
                                <div className={styles.modal_container__row}>
                                    <Field name="surname" placeholder="Фамилия"/>
                                    <Field name="name" placeholder="Имя"/>
                                    <Field name="surname" placeholder="Отчество"/>
                                </div>
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
                                <Field name="birthDate" placeholder="Дата рождения"/>
                                <div className={styles.modal_container__row}>
                                    <Field name="email" placeholder="Почта"/>
                                    <Field name="phone" placeholder="Телефон"/>
                                </div>
                                <div className={styles.modal_container__row}>
                                    <Field type="password" name="password" placeholder="Пароль"/>
                                    <Field type="password" name="repassword" placeholder="Повторите пароль"/>
                                </div>
                                <Link href={"/"}>
                                    <Button
                                        type="submit"
                                        theme="orange"
                                    >Зарегистрироваться</Button>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default SignUp;