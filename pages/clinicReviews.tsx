import {useEffect, useState} from "react";
import {database} from "../config/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {CardReview} from "../components/Card/CardReview/CardReview";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import styles from "../styles/pagesStyles/clinicReviews.module.scss";

const ClinicReviews = () => {

    const [reviewsList, setReviewsList] = useState<any>([]);
    const reviewsCollectionRef = collection(database, "reviews");

    useEffect(() => {
        const getAllReviews = async () => {
            const data = await getDocs(reviewsCollectionRef);
            setReviewsList(data.docs.map((doc) => ({...doc.data()})));
        };
        getAllReviews();
    }, []);

    return (

        <BaseLayout title={"Отзывы"}>
            <h1>Отзывы о клинике &quot;Рассвет&quot;</h1>
            <div className={styles.allReviews}>
                {reviewsList.map((review: any) => {
                    return (
                        <CardReview
                            key={review.reviewer}
                            date={review.time}
                            fullName={review.reviewer}
                            text={review.reviewText}
                        />
                    )
                })}
            </div>
        </BaseLayout>
    );
}

export default ClinicReviews;