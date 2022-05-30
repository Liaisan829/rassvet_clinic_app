import {FC} from 'react';
import Image from 'next/image';
import {Modal} from "../Modal/Modal";
import styles from './AboutClinicModal.module.scss';

interface Props {
    img: any,
    showModal: any,
    setShowModal: any
}

const AboutClinicModal: FC<Props> = ({img, setShowModal, showModal}) => {
    return (
        <Modal title={'Заявление'} onClose={() => setShowModal(false)} show={showModal}>
            <div className={styles.img}>
                <Image src={img} width={400} height={500}/>
            </div>
        </Modal>
    );
};

export default AboutClinicModal;