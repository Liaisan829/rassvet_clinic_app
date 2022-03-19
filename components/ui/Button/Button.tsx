import { FC } from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

interface ButtonProps {
    type: any,
    onClick?: any,
    theme: string,
    color?: string
}

const cx = cn.bind(styles);

export const Button: FC<ButtonProps> = ({type, onClick, theme, children, color}) => {
    return (
            <button
                type={type}
                onClick={onClick}
                style={{ "color": `${color}` }}
                className={cx(styles.button, {
                    buttonOrange: theme === 'orange',
                    buttonTransparent: theme === 'transparent',
                    buttonDefault: theme === ''
                })}
            >
                {children}
            </button>
    );
};