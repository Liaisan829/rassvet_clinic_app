import Skeleton from 'react-loading-skeleton';
import styles from "../../styles/pagesStyles/profile.module.scss";

const SkeletonAppointmentsComponent = () => {
    return (
        <>
            <div className={styles.visitsSkeleton}>
                <Skeleton duration={1} height={40} width={600} className={styles.visitsSkeleton__item}/>
                <Skeleton duration={1} height={40} width={600} className={styles.visitsSkeleton__item}/>
                <Skeleton duration={1} height={40} width={600} className={styles.visitsSkeleton__item}/>
            </div>
        </>
    );
};

export default SkeletonAppointmentsComponent;