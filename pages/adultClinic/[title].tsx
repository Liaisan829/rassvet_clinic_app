import { useRouter } from 'next/router';
import { getDocsFromFirebase } from '../../utils/getDocsFromFirebase';
import { BaseLayout } from '../../components/BaseLayout/BaseLayout';
import styles from '../../styles/pagesStyles/adultClinic.module.scss';
import { CardSlider } from '../../components/Card/CardSlider/CardSlider';

export default function Clinic({ doctors, adultClinics }: any) {
  const { query } = useRouter();

  return (
    <>
      <BaseLayout title={'Отделение'}>
        <h1>{query.title}</h1>
        {adultClinics.filter((adultClinic: any) => (query.title === adultClinic.title)).map((filteredClinic: any) => (
          <div key={filteredClinic.title} className={styles.clinicPage}>
            <img src={filteredClinic.inner_url} alt='clinic' />
            <blockquote className={styles.clinicPage__quote}>{filteredClinic.qoute}</blockquote>
            <h2>Что лечат в отделении неврологии</h2>
          </div>
        ))}

        <p>Терапевты клиники Рассвет</p>
        {/*TODO*/}
        {/*неправильная фильтрация*/}
        {doctors.filter((doctor: any) => (doctor.department === (query.title as string)))
          .map((filteredDoctor: any) => (
            <CardSlider img={filteredDoctor.url} fullName={filteredDoctor.fullName}
                        speciality={filteredDoctor.speciality} price={filteredDoctor.price} />
          ))}
      </BaseLayout>
    </>
  );
}


export async function getStaticProps() {
  const adultClinics = await getDocsFromFirebase('adultClinic');
  const doctors = await getDocsFromFirebase('doctors');

  return {
    props: { doctors, adultClinics }
  };
}

export async function getStaticPaths() {
  const adultClinics = await getDocsFromFirebase('adultClinic');

  const paths = adultClinics.map((clinic: any) => ({
    params: { title: clinic.title }
  }));

  return { paths, fallback: true };
}