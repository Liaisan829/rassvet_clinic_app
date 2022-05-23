import { BaseLayout } from '../components/BaseLayout/BaseLayout';
import { ClinicCard } from '../components/Card/ClinicCard/ClinicCard';
import hospital from '../public/hospital.svg';
import styles from '../styles/pagesStyles/hospital.module.scss';
import {HospitalCard} from "../components/Card/HospitalCard/HospitalCard";

const Hospital = () => {
  return (
    <BaseLayout title='Стационар'>
        <div className={styles.hospital}>
            <h1>Стационар</h1>
            <p>Стационар Рассвета состоит из&nbsp;одноместных палат, где пациент может в&nbsp;самый короткий срок получить максимум
                необходимых
                процедур с&nbsp;соблюдением мер безопасности и&nbsp;комфортом. Стационар может быть необходим, если пациенту проводят
                хирургическое
                лечение, введение сильнодействующих препаратов, при большом объеме обследований, в&nbsp;том числе инвазивных.</p>
            <section className={styles.hospital__cards}>
                <ClinicCard
                    title={'Палаты'}
                    img={hospital}
                />
            </section>
        </div>
       </BaseLayout>
  );
};

export default Hospital;