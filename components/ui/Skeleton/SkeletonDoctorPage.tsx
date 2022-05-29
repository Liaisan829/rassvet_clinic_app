import Skeleton from 'react-loading-skeleton';
import styles from '/styles/pagesStyles/doctorsList.module.scss';

const SkeletonDoctorPage = () => {
    return (
        <div className={styles.skeleton}>
            <div className={styles.doctorPage}>
                <div className={styles.doctorTitle}>
                    <Skeleton duration={1} height={350} width={350}/>
                    <div className={styles.doctorTitle__info}>
                        <div className={styles.doctorTitle__info__block}>
                            <div className={styles.items}>
                                <Skeleton duration={1} height={20} width={300}/>
                                <Skeleton duration={1} height={20} width={300}/>
                            </div>
                            <div className={styles.items}>
                                <Skeleton duration={1} height={20} width={300}/>
                                <Skeleton duration={1} height={20} width={300}/>
                            </div>
                        </div>
                        <div className={styles.doctorTitle__info__price}>
                            <Skeleton duration={1} height={20} width={300}/>
                        </div>
                        <div>
                            <Skeleton duration={1} height={40} width={200}/>
                        </div>
                    </div>
                </div>
                <div className={styles.doctorDescription}>
                    <div className={styles.doctorDescription__block}>
                        <Skeleton duration={1} height={40} width={900}/>
                        <Skeleton duration={1} height={150} width={900}/>
                    </div>
                    <div className={styles.doctorDescription__block}>
                        <Skeleton duration={1} height={40} width={900}/>
                        <Skeleton duration={1} height={150} width={900}/>
                    </div>
                    <div className={styles.doctorDescription__block}>
                        <Skeleton duration={1} height={40} width={900}/>
                        <Skeleton duration={1} height={150} width={900}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonDoctorPage;