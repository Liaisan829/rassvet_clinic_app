import Image from "next/image";
import logo from '../../public/header/logo.svg';
import rassvet from '../../public/rassvet.svg';
import {Button} from "../ui/Button/Button";
import Link from "next/link";
import styles from '../../styles/pagesStyles/signInPage.module.scss';
import {ReactNode} from "react";
import { FC } from "react";

interface Props {
    children: ReactNode;
}

const SignUpStep2:FC<Props> = ({children}) => {
    const onLoginClick = () => {
    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginPage_image}>
                <Image src={rassvet}/>
            </div>
            <div className={styles.loginPage__login}>
                <Image src={logo} width={180} height={110} alt="logo"/>
                <div className={styles.loginPage__popup}>
                    <div className={styles.loginPage__popup__top}>
                        <h2>Регистрация</h2>
                        <Link href={'/'}>
                            <Button
                                type="button"
                                theme=""
                                color={'#000000'}
                            ><h2>X</h2></Button>
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SignUpStep2;