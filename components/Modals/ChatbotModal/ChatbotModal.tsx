import {FC, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import ChatBot from "../../ChatbotComp/ChatBot";
import {Button} from "../../ui/Button/Button";
import styles from "./ChatbotModal.module.scss";

interface ModalProps {
    onClose: () => void;
    show: any
}

export const ChatbotModal: FC<ModalProps> = ({show, onClose}) => {

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
                <div>
                    <ChatBot/>
                </div>
                <Button
                    type="button"
                    theme="orange"
                    onClick={onHandleClose}
                >Закрыть</Button>
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
};