import {FC} from "react";
import styles from "./CardReview.module.scss";

interface CardProps {
    date: string
    fullName: string,
    text: string
}

export const CardReview: FC<CardProps> = (props) => {

    return (
        <div className={styles.section}>
            <div className={styles.section__info}>
                <h6>{props.date}</h6>
                <h4>{props.fullName}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
};