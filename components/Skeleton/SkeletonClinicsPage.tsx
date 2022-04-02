import Skeleton from 'react-loading-skeleton';
import styles from "../../styles/pagesStyles/adultClinic.module.scss";

const SkeletonClinicsPage = () => {
    return (
        <div className={styles.clinic}>
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