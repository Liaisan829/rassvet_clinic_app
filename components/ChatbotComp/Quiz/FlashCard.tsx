import React, {useState, useEffect, FC} from "react";
import styles from "./Quiz.module.scss";

interface Props {
    question: string,
    answer: string,
    incrementIndex: any
}

const FlashCard:FC<Props> = ({ question, answer, incrementIndex }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => setShowAnswer(false), [question]);

    return (
        <>
            <div
                className={styles.flashcardContainer}
                onClick={() => setShowAnswer(!showAnswer)}
            >
                {!showAnswer && question}
                {showAnswer && answer}
            </div>

            {showAnswer && (
                <button onClick={incrementIndex} className={styles.flashcardButton}>
                    Next question
                </button>
            )}
        </>
    );
};

export default FlashCard;