import {FC} from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

interface ButtonProps {
    type: any,
    wide?: boolean,
    onClick?: any,
    theme: string,
    color?: string,
    disabled?: any,
    className?: any
}

const cx = cn.bind(styles);

export const Button: FC<ButtonProps> = ({
                                            type,
                                            wide,
                                            onClick,
                                            theme,
                                            children,
                                            color,
                                            disabled,
                                            className
                                        }) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{"color": `${color}`}}
            className={cx(styles.button, className, {
                button__orange: theme === 'orange',
                button__transparent: theme === 'transparent',
                button__default: theme === '',
                button__wide: wide
            })}
        >
            {children}
        </button>
    );
};