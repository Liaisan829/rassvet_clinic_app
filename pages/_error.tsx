import { Component } from "react"
import Link from "next/link";
import styles from '../styles/pagesStyles/404Page.module.scss';

export default class extends Component {
    render () {
        return (
            <div className={styles.error}>
                <h1>Ooops, кажется, произошла ошибка!</h1>
                <Link href={"/"}>
                    <a><h3>Вернуться на главную</h3></a>
                </Link>
            </div>
        )
    }
}