import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import {ClinicCard} from '../components/Card/ClinicCard/ClinicCard';
import {getDocsFromFirebase} from '../utils/getDocsFromFirebase';
import styles from '../styles/pagesStyles/adultClinic.module.scss';

const AdultClinic = ({adultClinics}: any) => {
    return (
        <BaseLayout title={'Взрослая клиника'}>
            <div className={styles.clinicInfo}>
                <h1>Взрослая клиника</h1>
                <p>Взрослое отделение клиники &laquo;Рассвет&raquo;&nbsp;&mdash; это безболезненное медицинское
                    сопровождение на&nbsp;всех этапах
                    жизненного пути&nbsp;&mdash; от&nbsp;беременности и
                    новорожденности до&nbsp;реабилитации и&nbsp;возвращения работоспособности пожилым пациентам.</p>
                <section className={styles.clinicCards}>
                    {adultClinics.map((adultClinic: any) => (
                        <ClinicCard
                            key={adultClinic.title}
                            title={adultClinic.title}
                            img={adultClinic.url}
                        />
                    ))}
                </section>
            </div>
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