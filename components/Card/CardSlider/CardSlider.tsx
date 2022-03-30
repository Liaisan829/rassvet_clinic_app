import {FC} from "react";
import Image from "next/image";
import styles from "./CardSlider.module.scss";
import Link from "next/link";

interface CardProps {
    img: any,
    fullName: string,
    speciality: string,
    price: string
}

export const CardSlider: FC<CardProps> = ({img, fullName, speciality, price}) => {

    return (
        <>
            <div className={styles.section}>
                <Link href={`/doctorsList/${fullName}`}>
                    <a><Image src={img} width={400} height={380}/></a>
                </Link>
                <Link href={`/doctorsList/${fullName}`}>
                    <a>
                        <div className={styles.section__info}>
                            <h4>{fullName}</h4>
                            <p>{speciality}</p>
                            <h6>{price}</h6>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};