import {useEffect, useState} from "react";
import {database} from "../config/firebase";
import {collection} from "@firebase/firestore";
import styles from "../styles/pagesStyles/clinicReviews.module.scss";

const ClinicReviews = () => {

    const [reviewsList, setReviewsList] = useState<any>([]);
    const reviewsCollectionRef = collection(database, "reviews");

    useEffect(()=>{

    }, []);

    return (
        <>
            <h1>Отзывы</h1>
            <div className={styles.allReviews}>
                {reviewsList.map((review:any) => {
                    return (
                        <div key={review.author} className={styles.review}>
                            <h1>{review.author}</h1>
                            <p>{review.reviewText}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default ClinicReviews;