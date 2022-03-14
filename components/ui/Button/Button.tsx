import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    type: any,
    onClick: any,
    buttonText: string,
    buttonColor?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <>
            <button
                className={styles.button}
                style={{ "backgroundColor": `${props.buttonColor}` }}
                type={props.type}
                onClick={props.onClick}
            >
                {props.buttonText}
            </button>

        </>
    );
};