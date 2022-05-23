import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../ClinicCard/ClinicCard.module.scss";

interface CardProps {
    img: any,
    title: string
}

export const HospitalCard: FC<CardProps> = ({img, title}) => {

    return (
        <>
            <div className={styles.card}>
                <Link href={`/hospital/${title}`}>
                    <a><Image src={img} width={285} height={165}/></a>
                </Link>

                <div className={styles.card__bottom}>
                    <Link href={`/hospital/${title}`}>
                        <a><p>{title}</p></a>
                    </Link>
                </div>
            </div>
        </>
    );
};