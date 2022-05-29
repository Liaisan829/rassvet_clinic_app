import Skeleton from 'react-loading-skeleton';
import styles from '/styles/pagesStyles/adultClinic.module.scss';

const SkeletonDepartmentPage = () => {
    return (
        <>
            <div className={styles.department}>
               <div  className={styles.clinicPage}>
                   <Skeleton duration={1} height={600} width={800}/>
                   <Skeleton duration={1} height={400} width={400}/>
                   <Skeleton duration={1} height={400} width={400}/>
               </div>

                <div className={styles.clinicPage__doctors}>
                    <Skeleton duration={1} height={400} width={400}/>
                </div>
            </div>
        </>
    );
};

export default SkeletonDepartmentPage;