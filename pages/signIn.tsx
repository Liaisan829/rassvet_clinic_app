import * as Yup from "yup";
import {Field, Form, Formik, FormikValues, useFormik} from 'formik';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Button} from '../components/ui/Button/Button';
import {signIn} from '../config/auth';
import usePasswordToggle from "../utils/usePasswordToggle";
import logo from '/public/header/logo.svg';
import cross from '/public/cross.png';
import styles from '/styles/pagesStyles/signUpPage.module.scss';

const SignIn = () => {
    const [passwordInputType, toggleIcon] = usePasswordToggle();
    const router = useRouter();

    const handleLogin = async (values: FormikValues) => {
        await signIn(values.email, values.password);
        await router.push('/');
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required("Введите вашу почту")
                .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "Неверный формат почты"),
            password: Yup.string()
                .required("Введите пароль")
                .matches(/^(?=.*[0-9])(?=.*[a-z]).{3,10}$/g,
                    "Пароль должен содержать строчные латинские  буквы, а также цифру")
                .min(3, "Минимальная длина пароля 3 символа"),
        }),
        onSubmit: (values) => {
            handleLogin(values);
        }
    });

    return (
        <div className={styles.loginPage}>
            <Head>
                <title>Вход | Клиника Рассвет</title>
                <link rel='icon' href={'favicon.svg'}/>
            </Head>
            <div className={styles.loginPage__login}>
                <div className={styles.loginPage__login__img}>
                    <Image src={logo} alt='logo'/>
                </div>
                <div className={styles.loginPage__content}>
                    <div className={styles.loginPage__content__top}>
                        <h2>Вход</h2>
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
                        password: ''
                    }}
                            onSubmit={console.log}
                    >
                        {() => (
                            <Form className={styles.loginPage__content__form} onSubmit={formik.handleSubmit}>
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

                                <Button
                                    type='submit'
                                    theme='orange'
                                    wide={true}
                                    className={styles.loginPage__content__form__btn}
                                >Войти</Button>
                            </Form>
                        )}
                    </Formik>
                    <div className={styles.loginPage__content__bottom}>
                        <p>Вы у нас впервые? <Link href={'/signUp'}><a>Зарегистрируйтесь</a></Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;