import React, {FC, ReactNode, useState} from 'react';
import {Button} from "../ui/Button/Button";
import {useRouter} from "next/router";
import {useAuth} from "../../config/auth";
import styles from './Menu.module.scss';
import Image from "next/image";
import message from '/public/message.png';
import {ChatbotModal} from "../Modals/ChatbotModal/ChatbotModal";
import {ChatBottomSheet} from "../../containers/ChatBottomSheet/ChatBottomSheet";

interface MenuProps {
    active: any,
    setActive: any,
    children: ReactNode;
}

const Menu: FC<MenuProps> = ({active, setActive, children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();
    const currentUser = useAuth();

    const openChatbotModal = () => {
            setIsOpen(!isOpen);
    }
    return (
        <div className={active ? `${styles.menu} ${styles.active}` : `${styles.menu}`}
             onClick={() => setActive(false)}>
            <div className={styles.menu__blur}>
                <div className={styles.menu__content}
                     onClick={event => event.stopPropagation()}
                >
                    {children}

                    <div className={styles.menu__content__bottom}>
                        {currentUser ?
                            <Button
                                type='button'
                                theme='transparent'
                                onClick={() => {
                                    router.push('/profile');
                                }}
                            >
                                Личный кабинет
                            </Button>
                            :
                            <Button
                                type='button'
                                onClick={() => {
                                    router.push('/signIn');
                                }}
                                theme='transparent'
                            >
                                Вход
                            </Button>
                        }
                    </div>
                    <button
                        className={styles.chatButton}
                        onClick={openChatbotModal}
                    >
                        <Image src={message} width={30} height={30}/>
                    </button>
                </div>
                <ChatBottomSheet isOpen={isOpen}/>
            </div>
        </div>
    );
};

export default Menu;