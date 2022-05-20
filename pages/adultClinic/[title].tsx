import {useRouter} from 'next/router';
import Image from "next/image";
import {getDocsFromFirebase} from '../../utils/getDocsFromFirebase';
import {BaseLayout} from '../../components/BaseLayout/BaseLayout';
import {CardSlider} from '../../components/Card/CardSlider/CardSlider';
import styles from '../../styles/pagesStyles/adultClinic.module.scss';

export default function Clinic({doctors, adultClinics}: any) {
    const {query} = useRouter();

    return (
        <>
            <BaseLayout title={query.title as string}>
                <h1>{query.title}</h1>
                {adultClinics.filter((adultClinic: any) => (query.title === adultClinic.title)).map((filteredClinic: any) => (
                    <div key={filteredClinic.title} className={styles.clinicPage}>
                        <Image src={filteredClinic.inner_url} alt='clinic' width={900} height={442}/>
                        <blockquote className={styles.clinicPage__quote}>{filteredClinic.quote}</blockquote>
                        <p>{filteredClinic.description}</p>
                    </div>
                ))}

                <p>Врачи отделения</p>
                {doctors.filter((doctor: any) => (doctor.department === (query.title)))
                    .map((filteredDoctor: any) => (
                        <CardSlider
                            key={filteredDoctor.fullName}
                            img={filteredDoctor.url}
                            fullName={filteredDoctor.fullName}
                            speciality={filteredDoctor.speciality}
                            price={filteredDoctor.price}
                        />
                    ))}
            </BaseLayout>
        </>
    );
}

export async function getStaticProps() {
    const adultClinics = await getDocsFromFirebase('adultClinic');
    const doctors = await getDocsFromFirebase('doctors');

    return {
        props: {doctors, adultClinics}
    };
}

export async function getStaticPaths() {
    const adultClinics = await getDocsFromFirebase('adultClinic');

    const paths = adultClinics.map((clinic: any) => ({
        params: {title: clinic.title}
    }));

    return {paths, fallback: true};
}