import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ClinicCard.module.scss";

interface CardProps {
    img: any,
    title: string
}

export const ClinicCard: FC<CardProps> = ({img, title}) => {

    return (
        <Link href={`/adultClinic/${title}`}>
            <div className={styles.card}>
                <Image src={img} width={285} height={165}/>

                <div className={styles.card__bottom}>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
};