import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {CardReview} from "../components/Card/CardReview/CardReview";
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import styles from "/styles/pagesStyles/clinicReviews.module.scss";

const ClinicReviews = ({reviews}: any) => {

    return (
        <BaseLayout title={"Отзывы"}>
            <h1>Отзывы о клинике &quot;Рассвет&quot;</h1>
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