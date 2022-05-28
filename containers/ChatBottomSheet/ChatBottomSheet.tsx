import React, {FC, useEffect, useState} from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import styles from './ChatBottomSheet.module.css';
import {ChatbotModal} from "../../components/Modals/ChatbotModal/ChatbotModal";

interface Props {
    isOpen: boolean;
}

export const ChatBottomSheet: FC<Props> = ({isOpen}) => {
    const [open, setOpen] = useState<boolean>(isOpen);
    const [showChatbotModal, setShowChatbotModal] = useState(false);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    return (

        <BottomSheet
            className={styles.bottomSheet}
            open={open}
            blocking={false}
            scrollLocking={false}
            snapPoints={({headerHeight, maxHeight}) => [
                headerHeight,
                (maxHeight - 56) * 0.65,
                maxHeight - 56
            ]}
            onDismiss={() => {
                setOpen(false)
                isOpen = false
            }}
        >
            <ChatbotModal onClose={() => setShowChatbotModal(false)} show={showChatbotModal}/>
        </BottomSheet>

    );
};