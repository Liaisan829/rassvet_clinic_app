import React, {ReactNode, FC} from 'react';
import ReactDOM from "react-dom";
import {useState, useEffect} from "react";
import Image from "next/image";
import {Button} from "../../ui/Button/Button";
import close from '../../../public/close.svg';
import styles from './Modal.module.scss';

interface ModalProps {
    title: ReactNode;
    onClose: () => void;
    show: any
}

export const Modal: FC<ModalProps> = ({title, onClose, children, show}) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const onHandleClose = (e: any) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.overlay__popup}>
                <div className={styles.overlay__popup__top}>
                    <h5>{title}</h5>
                    <Button
                        type="button"
                        theme=""
                        onClick={onHandleClose}
                    >
                        <Image src={close} width={24} height={24} alt={"close"}/>
                    </Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")!
        )
    } else {
        return null;
    }
}