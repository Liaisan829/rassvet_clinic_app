import {useState} from "react";
import Link from "next/link";
import {FC, ReactNode} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {Button} from "../ui/Button/Button";
import logo from '../../public/header/logo.svg';
import phone from '../../public/header/phone.svg';
import email from '../../public/header/email.svg';
import location from '../../public/header/location.svg';
import vk from '../../public/footer/vk.svg';
import facebook from '../../public/footer/facebook.svg';
import instagram from '../../public/footer/instagram.svg';
import youtube from '../../public/footer/youtube.svg';
import visa from '../../public/footer/visa.svg';
import mastercard from '../../public/footer/mastercard.svg';
import mir from '../../public/footer/mir.svg';
import styles from './BaseLayout.module.scss';
import {LoginModal} from "../Modals/LoginModal/LoginModal";

interface Props {
    children: ReactNode;
    title: string
}

const navigation = [
    {id: 1, title: 'Главная', path: '/'},
    {id: 2, title: 'Взрослая клиника', path: '/adultClinic'},
    {id: 3, title: 'Детская клиника', path: '/childrenClinic'},
    {id: 4, title: 'Стоматология', path: '/dentistry'},
    {id: 5, title: 'Стационар', path: '/hospital'},
]

export const BaseLayout: FC<Props> = ({children, title}) => {

    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const openLoginModal = () => {
        setShowModal(true)
        router.push('/login');
    }
    const openSignUpModal = () => {
    }
    const onLoginClick = () => {
    }
    const {pathname} = useRouter();

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
                {/*туть потом надо сделать др картинку*/}
                <link rel="icon" href={"/header/logo.svg"}/>
            </Head>
            <header className={styles.hr}>
                <section className={styles.container}>
                    <div className={styles.headerTop}>
                        <div className={styles.headerTop__item}>
                            <Image src={phone} width={24} height={24}/>
                            <a href="tel:+7 (499) 116-66-73">+7 (499) 116-66-73</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            <Image src={email} width={24} height={24}/>
                            <a href="mailto:management@klinikarassvet.ru">management@klinikarassvet.ru</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            <Image src={location} width={24} height={24}/>
                            <a>Москва, Столярный переулок, дом 3, корпус 2</a>
                        </div>
                    </div>
                </section>
            </header>

            <header className={styles.header}>
                <section className={styles.container}>
                    <nav className={styles.header__navbar}>
                        <Link href="/">
                            <Image src={logo} width={150} height={96} alt="logo"/>
                        </Link>

                        <div className={styles.link}>
                            {navigation.map(({id, title, path}) => (
                                <Link key={id} href={path}>
                                    <a className={pathname === path ? styles.active : ''}>{title}</a>
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div className={styles.header__btn}>
                        <Button
                            type="button"
                            onClick={openSignUpModal}
                            theme="transparent"
                        >
                            Регистрация
                        </Button>
                        <Button
                            type="button"
                            onClick={openLoginModal}
                            theme="transparent"
                        >
                            Вход
                        </Button>
                        <LoginModal show={showModal} setShowModal={setShowModal}/>
                    </div>
                </section>
            </header>

            <main className={styles.main}>
                <section className={styles.main__container}>
                    {children}
                </section>
            </main>

            <footer className={styles.footer}>
                <section className={`${styles.container} ${styles.footer__desc}`}>
                    <div className={styles.footer__contacts}>
                        <div className={styles.footer__contacts__item}>
                            <Image src={phone} width={24} height={24}/>
                            <a href="tel:+7 (499) 116-66-73">+7 (499) 116-66-73</a>
                        </div>
                        <div className={styles.footer__contacts__item}>
                            <Image src={email} width={24} height={24}/>
                            <a href="mailto:management@klinikarassvet.ru">management@klinikarassvet.ru</a>
                        </div>
                        <div className={styles.footer__contacts__item}>
                            <Image src={location} width={24} height={24}/>
                            <a>Москва, Столярный переулок, дом 3, корпус 2</a>
                        </div>
                    </div>
                    <div className={styles.footer__info}>
                        <div className={styles.footer__info__block}>
                            <h2>Мы в соцсетях</h2>
                            <div className={styles.footer__info__block__icons}>
                                <Image src={vk} width={50} height={50}/>
                                <Image src={facebook} width={50} height={50}/>
                                <Image src={instagram} width={50} height={50}/>
                                <Image src={youtube} width={40} height={40}/>
                            </div>
                        </div>
                        <div className={styles.footer__info__block}>
                            <h2>Мы принимаем к оплате</h2>
                            <div
                                className={`${styles.footer__info__block__icons} ${styles.footer__info__block__payment}`}>
                                <Image src={visa} width={80} height={80}/>
                                <Image src={mastercard} width={80} height={80}/>
                                <Image src={mir} width={80} height={80}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>© 2022 Клиника “Рассвет”</p>
                    </div>
                </section>
            </footer>
        </>
    )
}