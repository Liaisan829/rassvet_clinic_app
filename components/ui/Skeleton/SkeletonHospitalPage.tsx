import Skeleton from 'react-loading-skeleton';
import styles from '/styles/pagesStyles/hospital.module.scss';

const SkeletonHospitalPage = () => {
    return (
        <>
            <div className={styles.clinic}>
                <Skeleton duration={1} height={600} width={500}/>
                <Skeleton duration={1} height={800} width={500}/>
                <Skeleton duration={1} height={800} width={500}/>
                <Skeleton duration={1} height={800} width={500}/>
            </div>
        </>
    );
};

export default SkeletonHospitalPage;