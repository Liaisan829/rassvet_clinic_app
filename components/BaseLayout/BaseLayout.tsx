import Link from "next/link";
import {FC, ReactNode} from "react";
import {CustomLink} from "../CustomLink/CustomLink";
import Image from "next/image";
import logo from '../../public/logo.svg';
import styles from './BaseLayout.module.scss';
import { Button } from "../Button/Button";
import Head from "next/head";

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
                <link rel="icon" href={"/logo.svg"} />
            </Head>
            <header className={styles.hr}>
                <section className={styles.container}>
                    <div className={styles.headerTop}>
                        <div className={styles.headerTop__item}>
                            {/*<Icon name="phone" width="24" height="24" />*/}
                            <a href="tel:+7 (499) 116-66-73">+7 (499) 116-66-73</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            {/*<Icon name="email" width="24" height="24" />*/}
                            <a href="mailto:management@klinikarassvet.ru">management@klinikarassvet.ru</a>
                        </div>

                        <div className={styles.headerTop__item}>
                            {/*<Icon name="location" width="24" height="24" />*/}
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