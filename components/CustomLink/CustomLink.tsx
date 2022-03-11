import Link from "next/link";
import {FC} from "react";
import styles from './CustomLink.module.scss';

interface LinkProps {
    text: string,
    href: string
}

export const CustomLink:FC<LinkProps> = (props) => {
    return (
        <Link href={props.href}>
            <a className={styles.link}>{props.text}</a>
        </Link>
    );
};

