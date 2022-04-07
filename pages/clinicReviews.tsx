import {useEffect, useState} from "react";
import {database} from "../config/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {CardReview} from "../components/Card/CardReview/CardReview";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import SkeletonClinicReviews from "../components/ui/Skeleton/SkeletonClinicReviews";
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "../styles/pagesStyles/clinicReviews.module.scss";

const ClinicReviews = () => {

    const [reviewsList, setReviewsList] = useState<any>([]);
    const reviewsCollectionRef = collection(database, "reviews");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllReviews = async () => {
            const data = await getDocs(reviewsCollectionRef);
            setReviewsList(data.docs.map((doc) => ({...doc.data()})));
        };
        getAllReviews();
    }, []);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 3700);
        return () => clearTimeout(timing);
    }, []);

    return (

        <BaseLayout title={"Отзывы"}>
            <h1>Отзывы о клинике &quot;Рассвет&quot;</h1>
            <div className={styles.allReviews}>
                {loading ? <SkeletonClinicReviews/> :
                    reviewsList.map((review: any) => (
                            <CardReview
                                key={review.reviewer}
                                date={review.time}
                                fullName={review.reviewer}
                                text={review.reviewText}
                            />
                        )
                    )}
            </div>
        </BaseLayout>
    );
}

export default ClinicReviews;