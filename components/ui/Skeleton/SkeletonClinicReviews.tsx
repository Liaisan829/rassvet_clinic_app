import styles from "../../../styles/pagesStyles/clinicReviews.module.scss";
import SkeletonCardReview from "./SkeletonCardReview";

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