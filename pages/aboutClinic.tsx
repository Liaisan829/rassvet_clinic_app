import {BaseLayout} from '../components/BaseLayout/BaseLayout';
import AboutClinicCard from "../components/Card/AboutClinicCard/AboutClinicCard";
import statement from '../public/statement.jpg';
import statement2 from '../public/statement2.jpg';
import styles from '/styles/pagesStyles/aboutClinic.module.scss';

const AboutClinic = () => {
    return (
        <BaseLayout title={"О клинике"}>
            <div className={styles.aboutClinic}>
                <AboutClinicCard
                    title={'Заявление о выборе мед.организации'}
                    img={statement}
                    href={'заявление на прикрепление.doc'}
                />
                <AboutClinicCard
                    title={'Образец жалобы на врача'}
                    img={statement2}
                    href={'образец жалобы на врача.doc'}
                />
            </div>
        </BaseLayout>
    );
};

export default AboutClinic;
