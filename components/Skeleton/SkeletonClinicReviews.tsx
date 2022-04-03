import Skeleton from "react-loading-skeleton";
import styles from "../../styles/pagesStyles/clinicReviews.module.scss";

const SkeletonClinicReviews = () => {
    return (
        <>
            <div className={styles.allReviews}>
                <Skeleton duration={1} height={100} width={580} className={styles.allReviews__skeletonItem}/>
                <Skeleton duration={1} height={100} width={580} className={styles.allReviews__skeletonItem}/>
                <Skeleton duration={1} height={100} width={580} className={styles.allReviews__skeletonItem}/>
                <Skeleton duration={1} height={100} width={580} className={styles.allReviews__skeletonItem}/>
            </div>
        </>
    );
}
export default SkeletonClinicReviews;