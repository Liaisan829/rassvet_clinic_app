import {Field, Form, Formik} from "formik";
import Link from "next/link";
import {Button} from "../components/ui/Button/Button";
import Image from "next/image";
import {useAuth} from "../context/AuthContext";
import {useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import logo from '../public/header/logo.svg';
import styles from '../styles/pagesStyles/signinPage.module.scss';

const SignIn = () => {
    const router = useRouter()
    const {user, login} = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e: any) => {
        e.preventDefault()
        console.log(user)
        try {
            await login(data.email, data.password)
            await router.push('/profile')
        } catch (err) {
            console.log(err)
        }
    }

    const onLoginClick = () => {
    }

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Вход | Клиника Рассвет</title>
                {/*туть потом надо сделать др картинку*/}
                <link rel="icon" href={"/header/logo.svg"}/>
            </Head>
            <div className={styles.loginPage__login}>
                <Image src={logo} width={180} height={110} alt="logo"/>
                <div className={styles.loginPage__popup}>
                    <div className={styles.loginPage__popup__top}>
                        <h2>Вход</h2>
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
                            <Form className={styles.modal_container} onSubmit={handleLogin}>
                                <Field
                                    name="email"
                                    value={data.email}
                                    placeholder="Ваша почта"
                                    onChange={(e: any) => setData({...data, email: e.target.value})}
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    value={data.password}
                                    placeholder="Пароль"
                                    onChange={(e: any) => setData({...data, password: e.target.value})}
                                />
                                <Button
                                    type="submit"
                                    onClick={onLoginClick}
                                    theme="orange"
                                >Войти</Button>
                            </Form>
                        )}
                    </Formik>
                    <div className={styles.loginPage__popup__bottom}>
                        <p>Вы у нас впервые? <Link href={"/signUp"}><a>Зарегистрируйтесь</a></Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn;