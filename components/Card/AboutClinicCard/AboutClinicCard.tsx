import {FC, useState} from 'react';
import Image from 'next/image';
import {Button} from "../../ui/Button/Button";
import AboutClinicModal from "../../Modals/AboutClinicModal/AboutClinicModal";
import download from "../../../public/download.png";
import styles from './AboutClinicCard.module.scss';

interface Props {
    title: string,
    img: any,
    href: string
}

const AboutClinicCard: FC<Props> = ({title, img, href}) => {
    const [showModal, setShowModal] = useState(false);

    const openAboutClinicModal = () => {
        setShowModal(true)
    }

    return (
        <div className={styles.clinicCard}>
            <h4>{title}</h4>
            <div className={styles.clinicCard__img}>
                <Button
                    type={'submit'}
                    theme={''}
                    onClick={openAboutClinicModal}
                >
                    <Image src={img} width={300} height={350}/>
                </Button>
                <AboutClinicModal
                    img={img}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            </div>
            <a href={href} download>Скачать файл <Image src={download} width={23} height={23}/></a>
        </div>
    );
};

export default AboutClinicCard;