import Link from "next/link";
import {FC, ReactNode} from "react";
import {CustomLink} from "../ui/CustomLink/CustomLink";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import logo from '../../public/header/logo.svg';
import phone from '../../public/header/phone.svg';
import email from '../../public/header/email.svg';
import location from '../../public/header/location.svg';
import styles from './BaseLayout.module.scss';

interface Props {
    children: ReactNode;
    title: string
}

const onButtonClick = () => {}

export const BaseLayout:FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
                {/*туть потом надо сделать др картинку*/}
                <link rel="icon" href={"/header/logo.svg"} />
            </Head>
            <header className={styles.hr}>
                <section className={styles.container}>
                    <div className={styles.headerTop}>
                        <div className={styles.headerTop__item}>
                            <Image src={phone} width={24} height={24} />
                            <a href="tel:+7 (499) 116-66-73">+7 (499) 116-66-73</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            <Image src={email} width={24} height={24} />
                            <a href="mailto:management@klinikarassvet.ru">management@klinikarassvet.ru</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            <Image src={location} width={24} height={24} />
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

                        <CustomLink href={"/"} text={"Главная"}/>
                        <CustomLink href={"/adultClinic"} text={"Взрослая клиника"}/>
                        <CustomLink href={"/childrenClinic"} text={"Детская клиника"}/>
                        <CustomLink href={"/dentistry"} text={"Стоматология"}/>
                        <CustomLink href={"/hospital"} text={"Стационар"}/>
                    </nav>

                    <div className={styles.header__btn}>
                        <Button type="submit" onClick={onButtonClick} buttonText="Регистрация"/>
                        <Button type="submit" onClick={onButtonClick} buttonText="Вход"/>
                    </div>
                </section>
            </header>

            <main className={styles.main}>
                <section className={styles.main__container}>
                    {children}
                </section>
            </main>
        </>
    )
}