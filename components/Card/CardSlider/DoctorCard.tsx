import {FC} from "react";
import Link from "next/link";
import styles from "./CardSlider.module.scss";

interface CardProps {
    img: string,
    fullName: string,
    speciality: string
}

export const DoctorCard: FC<CardProps> = ({img, fullName, speciality}) => {

    return (
        <Link href={`/doctorsList/${fullName}`}>
            <div className={styles.section}>
                <img src={img} alt="doctor" className={styles.section__ourDoctor}/>
                <div className={styles.section__items}>
                    <h4>{fullName}</h4>
                    <p>{speciality}</p>
                </div>
            </div>
        </Link>
    );
};