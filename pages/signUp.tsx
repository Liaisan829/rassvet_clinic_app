import {Field, Form, Formik} from 'formik';
import {toast, ToastContainer} from 'react-toastify';
import Image from 'next/image';
import {useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Button} from '../components/ui/Button/Button';
import {signUp} from '../config/auth';
import Link from "next/link";
import logo from '/public/header/logo.svg';
import cross from '/public/cross.png';
import 'react-toastify/dist/ReactToastify.css';
import styles from '/styles/pagesStyles/signUpPage.module.scss';
import usePasswordToggle from "../utils/usePasswordToggle";

const SignUp = () => {
    const [passwordInputType, toggleIcon] = usePasswordToggle();
    const router = useRouter();
    const notifyToast = () => toast('Вы успешно зарегистрированы!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    });
    const [data, setData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        phone: '',
        password: '',
        repassword: '',
        photoURL: "https://firebasestorage.googleapis.com/v0/b/rassvet-87044.appspot.com/o/avatar.png?alt=media&token=d38cd8c1-47b5-4f0d-9152-0a1dda1919ef"
    });

    const handleSignup = async (e: any) => {
        e.preventDefault();
        await signUp(data);
        await localStorage.setItem('user', data.name);
        await notifyToast();
        await setTimeout(() => {
            router.push('/');
        }, 3500);
    };

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Регистрация | Клиника Рассвет</title>
                {/*туть потом надо сделать др картинку*/}
                <link rel='icon' href={'/header/logo.svg'}/>
            </Head>
            <div className={styles.loginPage__login}>
                <div className={styles.loginPage__login__img}>
                    <Image src={logo} alt='logo'/>
                </div>
                <div className={styles.loginPage__content}>
                    <div className={styles.loginPage__content__top}>
                        <h2>Регистрация</h2>
                        <Button
                            type='button'
                            theme=''
                            color={'#000000'}
                            onClick={() => {
                                router.push('/');
                            }}
                        ><Image src={cross} width={20} height={20} alt={"закрыть"}/>
                        </Button>
                    </div>

                    <Formik initialValues={{
                        email: '',
                        password: '',
                        surname: '',
                        name: '',
                        patronymic: '',
                        phone: ''
                    }}
                            onSubmit={console.log}
                    >
                        {() => (
                            <Form className={styles.loginPage__content__form} onSubmit={handleSignup}>
                                <Field
                                    name='surname'
                                    value={data.surname}
                                    placeholder='Фамилия'
                                    onChange={(e: any) => setData({...data, surname: e.target.value})}
                                />
                                <Field
                                    name='name'
                                    value={data.name}
                                    placeholder='Имя'
                                    onChange={(e: any) => setData({...data, name: e.target.value})}
                                />
                                <Field
                                    name='name'
                                    value={data.patronymic}
                                    placeholder='Отчество'
                                    onChange={(e: any) => setData({...data, patronymic: e.target.value})}
                                />
                                <Field
                                    name='email'
                                    value={data.email}
                                    placeholder='Ваша почта'
                                    onChange={(e: any) => setData({...data, email: e.target.value})}
                                />
                                <Field
                                    name='email'
                                    value={data.phone}
                                    placeholder='Ваш телефон'
                                    onChange={(e: any) => setData({...data, phone: e.target.value})}
                                />
                                <div className={styles.loginPage__content__form__passwordline}>
                                    <Field
                                        name='password'
                                        type={passwordInputType}
                                        value={data.password}
                                        placeholder='Пароль'
                                        onChange={(e: any) => setData({...data, password: e.target.value})}
                                    />

                                    <span>{toggleIcon}</span>

                                </div>

                                <div className={styles.loginPage__content__form__passwordline}>
                                    <Field
                                        name='repassword'
                                        type={passwordInputType}
                                        value={data.repassword}
                                        placeholder='Повторите пароль'
                                        onChange={(e: any) => setData({...data, repassword: e.target.value})}
                                    />

                                    <span>{toggleIcon}</span>

                                </div>

                                <Button
                                    type='submit'
                                    theme='orange'
                                    className={styles.loginPage__content__form__btn}
                                >Зарегистрироваться</Button>
                            </Form>
                        )}
                    </Formik>
                    <div className={styles.loginPage__content__bottom}>
                        <p><Link href={'/signIn'}><a>Я уже зарегистрировался(-ась)</a></Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;
