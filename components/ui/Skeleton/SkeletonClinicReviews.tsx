import SkeletonCardReview from "./SkeletonCardReview";
import styles from "/styles/pagesStyles/clinicReviews.module.scss";

const SkeletonClinicReviews = () => {
    return (
        <div className={styles.allReviews}>
            <SkeletonCardReview/>
            <SkeletonCardReview/>
            <SkeletonCardReview/>
            <SkeletonCardReview/>
            <SkeletonCardReview/>
            <SkeletonCardReview/>
        </div>
    );
}
export default SkeletonClinicReviews;