import { FC } from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

interface CardProps {
    img: any,
    fullName: string,
    speciality: string,
    price: string
}

export const Card: FC<CardProps> = (props) => {

    return (
        <>
            <div className={styles.section}>
                <Image src={props.img} width={400} height={380}/>
                <div className={styles.section__info}>
                    <h4>{props.fullName}</h4>
                    <p>{props.speciality}</p>
                    <h6>{props.price}</h6>
                </div>
            </div>
        </>
    );
};