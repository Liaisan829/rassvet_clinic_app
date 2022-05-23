import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {ClinicCard} from '../components/Card/ClinicCard/ClinicCard';
import hospital from '../public/hospital.svg';
import styles from '../styles/pagesStyles/hospital.module.scss';
import {HospitalCard} from "../components/Card/HospitalCard/HospitalCard";

const Hospital = () => {
    return (
        <BaseLayout title='Стационар'>

            <h1>Стационар</h1>
            <p>Стационар Рассвета состоит из одноместных палат, где пациент может в самый короткий срок получить
                максимум
                необходимых
                процедур с соблюдением мер безопасности и комфортом. Стационар может быть необходим, если пациенту
                проводят
                хирургическое
                лечение, введение сильнодействующих препаратов, при большом объеме обследований, в том числе
                инвазивных.</p>
            <section className={styles.hospitalCards}>
                <HospitalCard
                    title={'Палаты'}
                    img={hospital}
                />
            </section>
        </BaseLayout>
    );
};

export default Hospital;