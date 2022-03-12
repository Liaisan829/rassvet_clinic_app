import { FC } from "react";
import Image from "next/image";
import styles from "./CardSlider.module.scss";

interface CardProps {
    img: any,
    fullName: string,
    speciality: string,
    price: string
}

export const CardSlider: FC<CardProps> = (props) => {

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