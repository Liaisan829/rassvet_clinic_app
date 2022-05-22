import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CardSlider.module.scss";

interface CardProps {
    img: string,
    fullName: string,
    speciality: string,
    price: string,
    width: number
}

export const CardSlider: FC<CardProps> = ({img, fullName, speciality, price, width}) => {

    return (
        <>
            <div className={styles.section}>
                <Link href={`/doctorsList/${fullName}`}>
                    <a>
                        <div className={styles.section__img}>
                            <Image src={img} width={width} height={380}/>
                        </div>
                    </a>
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