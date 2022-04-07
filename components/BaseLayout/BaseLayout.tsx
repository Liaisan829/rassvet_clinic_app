import Link from "next/link";
import {FC, ReactNode} from "react";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {Link as ScrollLink} from "react-scroll";
import {Button} from "../ui/Button/Button";
import {useAuth} from "../../context/AuthContext";
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

interface Props {
    children: ReactNode;
    title: string
}

const navigation = [
    {id: 1, title: 'Главная', path: '/'},
    {id: 2, title: 'Взрослая клиника', path: '/adultClinic'},
    {id: 3, title: 'Стоматология', path: '/dentistry'},
    {id: 4, title: 'Стационар', path: '/hospital'},
]

export const BaseLayout: FC<Props> = ({children, title}) => {
    const {user, logout} = useAuth()
    const {pathname} = useRouter();
    const router = useRouter();

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
                            <ScrollLink
                                activeClass="active"
                                to="address"
                                smooth={true}
                                duration={1000}
                                offset={-120}
                            >Москва, Столярный переулок, дом 3, корпус 2
                            </ScrollLink>
                        </div>
                    </div>
                </section>
            </header>

            <header className={styles.header}>
                <section className={styles.container}>
                    <nav className={styles.header__navbar}>
                        <Link href="/">
                            <a><Image src={logo} width={150} height={96} alt="logo"/></a>
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
                        {user ? (
                            <>
                                <Link href={'/profile'}>
                                    <a className={pathname === '/profile' ? styles.activeBtn : ''}>
                                        <Button
                                            type="button"
                                            theme="transparent"
                                        >
                                            Личный кабинет
                                        </Button>
                                    </a>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        router.push('/signUp')
                                    }}
                                    theme="transparent"
                                >
                                    Регистрация
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        router.push('/signIn')
                                    }}
                                    theme="transparent"
                                >
                                    Вход
                                </Button>
                            </>
                        )}
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