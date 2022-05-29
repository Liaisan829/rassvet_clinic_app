import Skeleton from 'react-loading-skeleton';
import styles from "/styles/pagesStyles/adultClinic.module.scss";

const SkeletonClinicsPage = () => {
    return (
        <div className={styles.skeleton}>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
                <Skeleton duration={1} height={213} width={287} className={styles.clinicCards__item}/>
        </div>
    );
}
export default SkeletonClinicsPage;