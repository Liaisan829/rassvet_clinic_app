import {Field, Form, Formik} from "formik";
import Image from "next/image";
import Link from "next/link";
import {Button} from "../components/ui/Button/Button";
import logo from '../public/header/logo.svg';
import rassvet from '../public/rassvet.svg';
import styles from '../styles/pagesStyles/signinPage.module.scss';

const SignIn = () => {
    const onLoginClick = () => {

    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPage_image}>
                <Image src={rassvet}/>
            </div>
            <div className={styles.loginPage__login}>
                <Image src={logo} width={180} height={110} alt="logo"/>
                <div className={styles.loginPage__popup}>
                    <div className={styles.loginPage__popup__top}>
                        <h2>Вход</h2>
                        <Link href={'/'}>
                            <Button
                                type="button"
                                theme=""
                                color={'#000000'}
                            ><h2>X</h2></Button>
                        </Link>
                    </div>
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
                    <div className={styles.loginPage__popup__bottom}>
                        <p>Вы у нас впервые? <Link href={"/signUp"}>Зарегистрируйтесь</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;