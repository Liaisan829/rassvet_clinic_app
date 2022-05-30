import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {HospitalCard} from "../components/Card/HospitalCard/HospitalCard";
import {useEffect, useState} from "react";
import {Spinner} from "../components/ui/Spinner/Spinner";
import hospital from '/public/hospital.svg';
import styles from '/styles/pagesStyles/hospital.module.scss';

const Hospital = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title='Стационар'>
            <div className={styles.hospital}>
                <h1>Стационар</h1>
                {loading ? <Spinner/> :
                    <>
                        <p>Стационар Рассвета состоит из&nbsp;одноместных палат, где пациент может в&nbsp;самый короткий срок
                            получить максимум
                            необходимых
                            процедур с&nbsp;соблюдением мер безопасности и&nbsp;комфортом. Стационар может быть необходим, если
                            пациенту проводят
                            хирургическое
                            лечение, введение сильнодействующих препаратов, при большом объеме обследований, в&nbsp;том числе
                            инвазивных.</p>
                        <section className={styles.hospital__cards}>
                            <HospitalCard
                                title={'Палаты'}
                                img={hospital}
                            />
                        </section>
                    </>
                }
            </div>
        </BaseLayout>
    );
};

export default Hospital;