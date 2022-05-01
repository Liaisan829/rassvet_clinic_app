import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {ClinicCard} from '../components/Card/ClinicCard/ClinicCard';
import {getDocsFromFirebase} from '../utils/getDocsFromFirebase';
import styles from '../styles/pagesStyles/adultClinic.module.scss';

const AdultClinic = ({adultClinics}: any) => {
    return (
        <BaseLayout title={'Взрослая клиника'}>

            <h1>Взрослая клиника</h1>
            <p>Взрослое отделение клиники &quot;Рассвет&quot; — это безболезненное медицинское
                сопровождение на всех этапах
                жизненного пути — от беременности и
                новорожденности до реабилитации и возвращения работоспособности пожилым пациентам.</p>
            <section className={styles.clinicCards}>
                {adultClinics.map((adultClinic: any) => (
                    <ClinicCard
                        key={adultClinic.title}
                        title={adultClinic.title}
                        img={adultClinic.url}
                    />
                ))}
            </section>

        </BaseLayout>
    );
};

export default AdultClinic;

export async function getStaticProps() {
    const adultClinics = await getDocsFromFirebase('adultClinic');

    return {
        props: {adultClinics}
    };
}