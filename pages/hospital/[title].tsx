import React from 'react';
import {getDocsFromFirebase} from "../../utils/getDocsFromFirebase";
import {useRouter} from "next/router";
import Image from "next/image";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import styles from "/styles/pagesStyles/hospital.module.scss";

const Title = ({hospitals}: any) => {
    const {query} = useRouter();

    return (
        <BaseLayout title={query.title as string}>
            <h1>{query.title}</h1>
            {hospitals.filter((hospital: any)=>(query.title === hospital.title)).map((filteredHospital: any)=>(
                <div key={filteredHospital.title} className={styles.clinic}>
                    <p>{filteredHospital.description}</p>
                    <Image src={filteredHospital.image1} width={900} height={442} alt={'hospital image'}/>
                    <Image src={filteredHospital.image2} width={900} height={442} alt={'hospital image'}/>
                    <Image src={filteredHospital.image3} width={900} height={442} alt={'hospital image'}/>
                </div>
            ))}
        </BaseLayout>
    );
};

export default Title;

export async function getStaticProps() {
    const hospitals = await getDocsFromFirebase('hospital');

    return {
        props: {hospitals}
    };
}

export async function getStaticPaths() {
    const hospitals = await getDocsFromFirebase('hospital');

    const paths = hospitals.map((clinic: any) => ({
        params: {title: clinic.title}
    }));

    return {paths, fallback: true};
}