import {Field, Form, Formik} from 'formik';
import {toast, ToastContainer} from 'react-toastify';
import Image from 'next/image';
import {useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Button} from '../components/ui/Button/Button';
import {signUp} from '../config/auth';
import Link from "next/link";
import logo from '../public/header/logo.svg';
import avatar from '../public/profile/profileLogo.svg';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/pagesStyles/signUpPage.module.scss';

const SignUp = () => {
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
    photoURL: avatar
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
          <Image src={logo} width={180} height={110} alt='logo'/>
          <div className={styles.loginPage__popup}>
            <div className={styles.loginPage__popup__top}>
              <h2>Регистрация</h2>
              <Button
                  type='button'
                  theme=''
                  color={'#000000'}
                  onClick={() => {
                    router.push('/');
                  }}
              ><h2>X</h2></Button>
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
                  <Form className={styles.modal_container} onSubmit={handleSignup}>
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
                        placeholder='Ваша телефон'
                        onChange={(e: any) => setData({...data, phone: e.target.value})}
                    />

                    <Field
                        name='password'
                        type='password'
                        value={data.password}
                        placeholder='Пароль'
                        onChange={(e: any) => setData({...data, password: e.target.value})}
                    />
                    <Field
                        name='repassword'
                        type='password'
                        value={data.repassword}
                        placeholder='Повторите пароль'
                        onChange={(e: any) => setData({...data, repassword: e.target.value})}
                    />
                    <Button
                        type='submit'
                        theme='orange'
                    >Зарегистрироваться</Button>
                  </Form>
              )}
            </Formik>
            <div className={styles.loginPage__popup__bottom}>
              <p><Link href={'/signIn'}><a>Я уже зарегистрировался(-ась)</a></Link></p>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>

  );
};

export default SignUp;
