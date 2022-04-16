import {Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import Image from "next/image";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import {addDoc, collection} from "@firebase/firestore";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, database} from "../config/firebase";
import {Button} from "../components/ui/Button/Button";
import logo from "../public/header/logo.svg";
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/pagesStyles/signUpPage.module.scss';
import {useStores} from "../utils/use-stores-hook";

const SignUp = () => {
    const {userStore:{currentUser, signUp}} = useStores();
    const router = useRouter()
    const usersDatabaseRef = collection(database, 'users');
    const notifyToast = () => toast("Вы успешно зарегистрированы!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: "success"
    })
    const [data, setData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        repassword: '',
        phone: ''
    })

    // const handleSignup = async (e: any) => {
    //     e.preventDefault()
    //
    //     await createUserWithEmailAndPassword(auth, data.email, data.password)
    //         .then((registeredUser) => {
    //             addDoc(usersDatabaseRef, {
    //                 uid: registeredUser.user.uid,
    //                 surname: data.surname,
    //                 name: data.name,
    //                 patronymic: data.patronymic,
    //                 phone: data.phone,
    //                 photoURL: registeredUser.user.photoURL
    //             })
    //                 .then(res => console.log(res));
    //             localStorage.setItem("user", data.name);
    //             notifyToast();
    //             setTimeout(() => {
    //                 router.push("/")
    //             }, 3500);
    //
    //         })
    // }

    const handleSignup = async (e: any) => {
        e.preventDefault()

        // await signUp(data);
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
                        password: "",
                        surname: "",
                        name: "",
                        patronymic: "",
                        phone: ""
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
            <ToastContainer/>
        </div>

    )
}

export default SignUp;
