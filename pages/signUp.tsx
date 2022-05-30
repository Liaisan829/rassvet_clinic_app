import * as Yup from "yup";
import {Field, Form, Formik, FormikValues, useFormik} from 'formik';
import {toast, ToastContainer} from 'react-toastify';
import Link from "next/link";
import Image from 'next/image';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Button} from '../components/ui/Button/Button';
import {signUp} from '../config/auth';
import usePasswordToggle from "../utils/usePasswordToggle";
import logo from '/public/header/logo.svg';
import cross from '/public/cross.png';
import styles from '/styles/pagesStyles/signUpPage.module.scss';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSignup = async (values: FormikValues) => {
        await signUp(values);
        await localStorage.setItem('user', values.name);
        await notifyToast();
        await setTimeout(() => {
            router.push('/');
        }, 3500);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            patronymic: "",
            email: "",
            phone: "",
            password: "",
            repassword: "",
            birthDate: "",
            photoURL: "https://firebasestorage.googleapis.com/v0/b/rassvet-87044.appspot.com/o/avatar.png?alt=media&token=d38cd8c1-47b5-4f0d-9152-0a1dda1919ef"
        },
        validationSchema: Yup.object().shape({
            surname: Yup.string()
                .required("Введите вашу фамилию")
                .min(2, "Минимальная длина 2 символа"),
            name: Yup.string()
                .required("Введите ваше имя")
                .min(2, "Минимальная длина 2 символа"),
            patronymic: Yup.string()
                .required("Введите ваше отчество")
                .min(2, "Минимальная длина 2 символа"),
            email: Yup.string()
                .required("Введите вашу почту")
                .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "Неверный формат почты"),
            phone: Yup.string()
                .required("Введите номер телефона")
                .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,13}$/g,
                    "Неверный формат номера"),
            birthDate: Yup.string()
                .required("Введите вашу дату рождения"),
            password: Yup.string()
                .required("Введите пароль")
                .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
                    "Пароль должен содержать строчные латинские  буквы, а также цифру")
                .min(3, "Минимальная длина пароля 3 символа"),
            repassword: Yup.string().required("Повторите пароль")
                .oneOf([Yup.ref("password"), null], "Пароли НЕ совпадают!")
        }),
        onSubmit: (values) => {
            handleSignup(values);
        }
    });

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Регистрация | Клиника Рассвет</title>
                <link rel='icon' href={'favicon.svg'}/>
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
                        name: "",
                        surname: "",
                        patronymic: "",
                        email: "",
                        phone: "",
                        password: "",
                        birthDate: "",
                        repassword: ""
                    }}
                            onSubmit={console.log}
                    >
                        {() => (
                            <Form className={styles.loginPage__content__form} onSubmit={formik.handleSubmit}>
                                <Field
                                    name='surname'
                                    value={formik.values.surname}
                                    placeholder='Фамилия'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.surname && formik.touched.surname ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.surname}</div>
                                ) : null}
                                <Field
                                    name='name'
                                    value={formik.values.name}
                                    placeholder='Имя'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.name}</div>
                                ) : null}
                                <Field
                                    name='patronymic'
                                    value={formik.values.patronymic}
                                    placeholder='Отчество'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.patronymic && formik.touched.patronymic ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.patronymic}</div>
                                ) : null}
                                <Field
                                    name='email'
                                    value={formik.values.email}
                                    placeholder='Ваша почта'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.email}</div>
                                ) : null}
                                <Field
                                    name='phone'
                                    value={formik.values.phone}
                                    placeholder='Ваш телефон'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.phone}</div>
                                ) : null}

                                <label>Выберите вашу дату рождения</label>
                                <Field
                                    name='birthDate'
                                    type='date'
                                    pattern='\d{1,2}/\d{1,2}/\d{4}'
                                    min="1935-01-01"
                                    max="2021-01-01"
                                    value={formik.values.birthDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.birthDate && formik.touched.birthDate ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.birthDate}</div>
                                ) : null}

                                <div className={styles.loginPage__content__form__passwordline}>
                                    <Field
                                        name='password'
                                        type={passwordInputType}
                                        value={formik.values.password}
                                        placeholder='Пароль'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <span>{toggleIcon}</span>
                                </div>
                                {formik.errors.password && formik.touched.password ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.password}</div>
                                ) : null}

                                <div className={styles.loginPage__content__form__passwordline}>
                                    <Field
                                        name='repassword'
                                        type={passwordInputType}
                                        value={formik.values.repassword}
                                        placeholder='Повторите пароль'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <span>{toggleIcon}</span>
                                </div>
                                {formik.errors.repassword && formik.touched.repassword ? (
                                    <div className={styles.loginPage__content__form__error}>{formik.errors.repassword}</div>
                                ) : null}

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
