import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {ClinicCard} from "../components/Card/ClinicCard/ClinicCard";

import therapy from "../public/adultClinic/therapy.svg";
import cardiology from "../public/adultClinic/cardiology.svg";
import dermatology from "../public/adultClinic/dermatology.svg";
import nevrology from "../public/adultClinic/nevrology.svg";
import psicology from "../public/adultClinic/psicology.svg";
import revmatology from "../public/adultClinic/revmatology.svg";
import ultrasound from "../public/adultClinic/ultrasound.svg";
import endoscopia from "../public/adultClinic/endoscopia.svg";

import styles from "../styles/pagesStyles/adultClinic.module.scss";

const AdultClinic = () => {

    return (
        <BaseLayout title="Взрослая клиника">
            <div className={styles.clinic}>
                <h1 className={styles.clinic__h1}>Взрослая клиника</h1>
                <p className={styles.clinic__p}>Взрослое отделение клиники Рассвет — это безболезненное медицинское
                    сопровождение на всех этапах
                    жизненного пути — от беременности и
                    новорожденности до реабилитации и возвращения работоспособности пожилым пациентам.</p>
                <section className={styles.clinicCards}>
                    <ClinicCard img={therapy} title="Терапия"/>
                    <ClinicCard img={cardiology} title="Кардиология"/>
                    <ClinicCard img={dermatology} title="Дерматология"/>
                    <ClinicCard img={nevrology} title="Неврология"/>
                    <ClinicCard img={psicology} title="Психология"/>
                    <ClinicCard img={revmatology} title="Ревматология"/>
                    <ClinicCard img={ultrasound} title="УЗИ"/>
                    <ClinicCard img={endoscopia} title="Эндоскопия"/>
                </section>
            </div>

        </BaseLayout>
    )
}

export default AdultClinic;
