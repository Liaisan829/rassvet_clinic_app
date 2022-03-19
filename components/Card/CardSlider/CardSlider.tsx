import {FC} from "react";
import Image from "next/image";
import styles from "./CardSlider.module.scss";
import Link from "next/link";

interface CardProps {
    id: number,
    img: any,
    fullName: string,
    speciality: string,
    price: string
}

export const CardSlider: FC<CardProps> = ({img, fullName, speciality, price, id}) => {

    return (
        <>
            <div className={styles.section}>
                <Link href={`/${id}`}>
                    <Image src={img} width={400} height={380}/>
                </Link>
                <Link href={`/${id}`}>
                    <div className={styles.section__info}>
                        <h4>{fullName}</h4>
                        <p>{speciality}</p>
                        <h6>{price}</h6>
                    </div>
                </Link>
            </div>
        </>
    );
};