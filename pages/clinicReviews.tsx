import {useEffect, useState} from "react";
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {CardReview} from "../components/Card/CardReview/CardReview";
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {Spinner} from "../components/ui/Spinner/Spinner";
import styles from "/styles/pagesStyles/clinicReviews.module.scss";

const ClinicReviews = ({reviews}: any) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timing);
    }, []);

    return (
        <BaseLayout title={"Отзывы"}>
            <div>
                <h1>Отзывы о клинике &quot;Рассвет&quot;</h1>
                {loading ? <Spinner/> :
                        <div className={styles.allReviews}>
                            {reviews.map((review: any) => (
                                    <CardReview
                                        key={review.reviewer}
                                        date={review.time}
                                        fullName={review.reviewer}
                                        text={review.reviewText}
                                    />
                                )
                            )}
                        </div>
                }
            </div>
        </BaseLayout>
    );
}

export default ClinicReviews;

export async function getStaticProps() {

    const reviews = await getDocsFromFirebase("reviews");
    return {
        props: {reviews}
    };
}