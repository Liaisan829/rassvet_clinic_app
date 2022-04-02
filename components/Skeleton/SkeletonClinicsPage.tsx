import Skeleton from 'react-loading-skeleton';
import styles from "../../styles/pagesStyles/adultClinic.module.scss";

const SkeletonClinicsPage = () => {
    return (
        <div className={styles.clinic}>
            <Skeleton duration={1} height={20} width={400}/>
            <Skeleton duration={1} height={47} width={1200}/>
            <section className={styles.clinicCards}>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
                <Skeleton duration={1} height={213} width={287}/>
            </section>
        </div>

    );
}
export default SkeletonClinicsPage;