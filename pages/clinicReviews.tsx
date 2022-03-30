import {useEffect, useState} from "react";
import {database} from "../config/firebase";
import {collection, getDocs} from "@firebase/firestore";
import styles from "../styles/pagesStyles/clinicReviews.module.scss";
import {CardReview} from "../components/Card/CardReview/CardReview";

const ClinicReviews = () => {

    const [reviewsList, setReviewsList] = useState<any>([]);
    const reviewsCollectionRef = collection(database, "reviews");

    useEffect(() => {
        const getAllReviews = async () => {
            const data = await getDocs(reviewsCollectionRef);
            setReviewsList(data.docs.map((doc)=>({...doc.data()})));
        };
        getAllReviews();
    }, []);

    return (
        <>
            <h1>Отзывы</h1>
            <div className={styles.allReviews}>
                {reviewsList.map((review: any) => {
                    return (
                        <CardReview
                            key={review.reviewer}
                            date={new Date().toLocaleDateString()}
                            fullName={review.reviewer}
                            text={review.reviewText}
                        />
                        // <div key={review.reviewer} className={styles.review}>
                        //     <p>{new Date().toLocaleDateString()}</p>
                        //     <h1>{review.reviewer}</h1>
                        //     <p>{review.reviewText}</p>
                        // </div>
                    )
                })}
            </div>
        </>
    );
}

export default ClinicReviews;