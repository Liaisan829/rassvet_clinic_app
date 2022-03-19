import {Field, Form, Formik} from "formik";
import Image from "next/image";
import {Button} from "../components/ui/Button/Button";
import Link from "next/link";
import logo from '../public/header/logo.svg';
import rassvet from '../public/rassvet.svg';
import styles from '../styles/pagesStyles/signInPage.module.scss';

const SignUp3 = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPage_image}>
                <Image src={rassvet}/>
            </div>
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
                                <Field type="password" name="password" placeholder="Пароль"/>
                                <Field type="password" name="repassword" placeholder="Повторите пароль"/>
                                <Link href={"/"}>
                                    <Button
                                        type="submit"
                                        theme="orange"
                                    >Зарегистрироваться</Button>
                                </Link>

                                <div className={styles.loginPage__popup__bottom}>
                                    <p><Link href={"/signUp2"}>Предыдущий шаг</Link></p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUp3;