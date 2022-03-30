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
        <>
            <div className={styles.card}>
                <Link href={`/adultClinic/${title}`}>
                    <a><Image src={img} width={285} height={165}/></a>
                </Link>

                <div className={styles.card__bottom}>
                    <Link href={`/adultClinic/${title}`}>
                        <a><p>{title}</p></a>
                    </Link>
                </div>
            </div>
        </>
    );
};

// missing key
// const[adultCards, setAdultCards] = useState([
//     <ClinicCard img={therapy} title="Терапия"/>,
//     <ClinicCard img={cardiology} title="Кардиология"/>,
//     <ClinicCard img={dermatology} title="Дерматология"/>,
//     <ClinicCard img={nevrology} title="Неврология"/>,
//     <ClinicCard img={psicology} title="Психология"/>,
//     <ClinicCard img={revmatology} title="Ревматология"/>,
//     <ClinicCard img={ultrasound} title="УЗИ"/>,
//     <ClinicCard img={endoscopia} title="Эндоскопия"/>
// ])