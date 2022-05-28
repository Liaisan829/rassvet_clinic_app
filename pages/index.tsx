import type {NextPage} from 'next'
import Image from "next/image";
import {useState} from "react";
import Link from 'next/link'
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {Slider} from "../components/Slider/Slider";
import {CardReview} from "../components/Card/CardReview/CardReview";
import {ChatbotModal} from "../components/Modals/ChatbotModal/ChatbotModal";
import {DoctorsSlider} from "../components/DoctorsSlider/DoctorsSlider";
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {MobileDoctorsSlider} from "../components/DoctorsSlider/MobileDoctorsSlider";
import AddressMap from "../components/yandexMap/AddressMap";
import doctorLogo from '/public/doctorLogo.svg';
import message from '/public/message.png';
import styles from '/styles/pagesStyles/indexPageStyles.module.scss';

const Home: NextPage = ({first, second}: any) => {
    const [showChatbotModal, setShowChatbotModal] = useState(false);

    const openChatbotModal = () => {
        setShowChatbotModal(true)
    }

    return (
        <>
            <BaseLayout title={"Главная страница"}>
                <div className={styles.index}>
                    <Slider/>

                    <button
                        className={styles.chatButton}
                        onClick={openChatbotModal}
                    >
                        <Image src={message} width={30} height={30}/>
                    </button>
                    <ChatbotModal onClose={() => setShowChatbotModal(false)} show={showChatbotModal}/>


                    <section className={styles.healthCare}>
                        <h1>Забота о вашем здоровье</h1>
                        <ul>
                            <li>Мы видим себя ярким экспертным проектом на рынке медицинских услуг и рынке комплексных услуг
                                по сохранению и улучшению качества жизни людей.</li>
                            <li>Мы видим себя проводником и популяризатором доказательной медицины мирового уровня.</li>
                            <li>Мы считаем, что вправе формировать стандарты диагностики и лечения, на которые будут
                                ориентироваться врачи и образованные пациенты в России.</li>
                        </ul>
                    </section>

                    <section className={styles.legendaryDoctors}>
                        <div>
                            <h1>Легендарные врачи клиники &quot;Рассвет&quot;</h1>
                        </div>

                        <div className={styles.legendaryDoctors__description}>
                            <Image src={doctorLogo} width={150} height={150}/>

                            <div className={styles.healthCare__list}>
                                <ul>
                                    <li>У нас есть любовь к делу и преданность ему.</li>
                                    <li>У нас есть специалисты, самые значимые в здравоохранении.</li>
                                    <li>У нас есть идеология, принятая в цивилизованном, развитом мире, где
                                        люди живут дольше.</li>
                                    <li>У нас есть воля и средства объединить это.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className={styles.doctorsSlider}>
                        <div className={styles.doctorsSlider__standard}>
                            <DoctorsSlider/>
                        </div>
                        <div className={styles.doctorsSlider__mobile}>
                            <MobileDoctorsSlider/>
                        </div>
                    </div>

                    <section className={styles.reviews}>
                        <div className={styles.reviews__title}>
                            <h1>Отзывы</h1>
                            <Link href={"/clinicReviews"}>
                                <a><h5>Все отзывы</h5></a>
                            </Link>
                        </div>
                        <div className={styles.reviews__item}>
                            <CardReview
                                date={first.time}
                                fullName={first.reviewer}
                                text={first.reviewText}
                            />

                            <CardReview
                                date={second.time}
                                fullName={second.reviewer}
                                text={second.reviewText}
                            />
                        </div>
                    </section>

                    <section className={styles.address} id={"address"}>
                        <h1>Адрес клиники</h1>
                        <div className={styles.address__info}>
                            <AddressMap/>
                            <div className={styles.address__info__text}>
                                <div className={styles.address__info__text__item}>
                                    <h6>Москва</h6>
                                    <p>Столярный переулок, дом 3, корпус 2</p>
                                </div>
                                <div className={styles.address__info__text__item}>
                                    <h6>Телефон</h6>
                                    <p>+7 (499) 116-66-73</p>
                                </div>
                                <div className={styles.address__info__text__item}>
                                    <h6>Время работы</h6>
                                    <p>С 8:00 до 21:00 без выходных</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </BaseLayout>
        </>
    )
}

export default Home;

export async function getStaticProps() {

    const reviews = await getDocsFromFirebase("reviews");
    const [first, second, ...other] = reviews;
    return {
        props: {first, second}
    };
}