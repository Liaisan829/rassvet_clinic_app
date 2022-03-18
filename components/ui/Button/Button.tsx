import { FC } from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

interface ButtonProps {
    type: any,
    onClick: () => void,
    theme: string
}

const cx = cn.bind(styles);

export const Button: FC<ButtonProps> = ({type, onClick, theme, children}) => {
    return (
            <button
                type={type}
                onClick={onClick}
                className={cx(styles.button, {
                    buttonOrange: theme === 'orange',
                    buttonTransparent: theme === 'transparent'
                })}
            >
                {children}
            </button>
    );
};