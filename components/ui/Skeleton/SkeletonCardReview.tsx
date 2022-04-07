import Skeleton from 'react-loading-skeleton';
import styles from '../../Card/CardReview/CardReview.module.scss';

const SkeletonCardReview = () => {
    return (
        <div className={styles.section}>
            <div className={styles.section__info}>
                <Skeleton duration={1} width={87} height={19}/>
                <Skeleton duration={1} width={380} height={25}/>
                <Skeleton duration={1} width={500} height={150}/>
            </div>
        </div>
    );
};

export default SkeletonCardReview;