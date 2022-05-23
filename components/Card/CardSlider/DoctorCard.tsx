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
        <>
            <div className={styles.section}>
                <Link href={`/doctorsList/${fullName}`}>
                    <a><img src={img} alt="doctor"/></a>
                </Link>
                <Link href={`/doctorsList/${fullName}`}>
                    <a>
                        <div className={styles.section__items}>
                            <h4>{fullName}</h4>
                            <p>{speciality}</p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};