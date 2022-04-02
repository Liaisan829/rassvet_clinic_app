import {Field, Form, Formik} from "formik";
import {Button} from "../components/ui/Button/Button";
import Image from "next/image";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import {useAuth} from "../context/AuthContext";
import logo from "../public/header/logo.svg";
import styles from '../styles/pagesStyles/signUpPage.module.scss';

const SignUp = () => {
    const {user, signup} = useAuth()
    const router = useRouter()
    console.log(user)
    const [data, setData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        repassword: '',
        phone: ''
    })

    const handleSignup = async (e: any) => {
        e.preventDefault()

        try {
            await signup(data.email, data.password)
            await router.push('/')
        } catch (err) {
            console.log(err)
        }
        console.log(user)
    }

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Регистрация | Клиника Рассвет</title>
                {/*туть потом надо сделать др картинку*/}
                <link rel="icon" href={"/header/logo.svg"}/>
            </Head>
            <div className={styles.loginPage__login}>
                <Image src={logo} width={180} height={110} alt="logo"/>
                <div className={styles.loginPage__popup}>
                    <div className={styles.loginPage__popup__top}>
                        <h2>Регистрация</h2>
                        <Button
                            type="button"
                            theme=""
                            color={'#000000'}
                            onClick={() => {
                                router.push('/')
                            }}
                        ><h2>X</h2></Button>
                    </div>

                    <Formik initialValues={{
                        email: "",
                        password: ""
                    }}
                            onSubmit={console.log}
                    >
                        {() => (
                            <Form className={styles.modal_container} onSubmit={handleSignup}>
                                <div className={styles.modal_container__row}>
                                    <Field
                                        name="surname"
                                        value={data.surname}
                                        placeholder="Фамилия"
                                        onChange={(e: any) => setData({...data, surname: e.target.value})}
                                    />
                                    <Field
                                        name="name"
                                        value={data.name}
                                        placeholder="Имя"
                                        onChange={(e: any) => setData({...data, name: e.target.value})}
                                    />
                                    <Field
                                        name="name"
                                        value={data.patronymic}
                                        placeholder="Отчество"
                                        onChange={(e: any) => setData({...data, patronymic: e.target.value})}
                                    />
                                </div>
                                <Field
                                    name="email"
                                    value={data.email}
                                    placeholder="Ваша почта"
                                    onChange={(e: any) => setData({...data, email: e.target.value})}
                                />
                                <Field
                                    name="email"
                                    value={data.phone}
                                    placeholder="Ваша телефон"
                                    onChange={(e: any) => setData({...data, phone: e.target.value})}
                                />
                                <div className={styles.modal_container__row}>
                                    <Field
                                        name="password"
                                        type="password"
                                        value={data.password}
                                        placeholder="Пароль"
                                        onChange={(e: any) => setData({...data, password: e.target.value})}
                                    />
                                    <Field
                                        name="repassword"
                                        type="password"
                                        value={data.repassword}
                                        placeholder="Повторите пароль"
                                        onChange={(e: any) => setData({...data, repassword: e.target.value})}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    theme="orange"
                                >Зарегистрироваться</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default SignUp;