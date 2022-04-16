import type {NextPage} from 'next'
import Image from "next/image";
import Link from 'next/link'
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {Slider} from "../components/Slider/Slider";
import heart from '../public/heart.svg';
import sun from '../public/footer/sun.svg';
import doctorLogo from '../public/doctorLogo.svg';
import {CardReview} from "../components/Card/CardReview/CardReview";
import {DoctorsSlider} from "../components/DoctorsSlider/DoctorsSlider";
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import styles from '../styles/pagesStyles/indexPageStyles.module.scss';
import AddressMap from "../components/yandexMap/AddressMap";

const Home: NextPage = ({first, second}: any) => {

    return (
        <>
            <BaseLayout title={"Главная страница"}>
                <Slider/>

                <section className={styles.healthCare}>
                    <h1>Забота о вашем здоровье</h1>
                    <div className={styles.healthCare__item}>
                        <Image src={heart} width={40} height={40}/>
                        <p>Мы видим себя ярким экспертным проектом на рынке медицинских услуг и рынке комплексных услуг
                            по сохранению и улучшению качества жизни людей.</p>
                    </div>
                    <div className={styles.healthCare__item}>
                        <Image src={heart} width={30} height={30}/>
                        <p>Мы видим себя проводником и популяризатором доказательной медицины мирового уровня.</p>
                    </div>
                    <div className={styles.healthCare__item}>
                        <Image src={heart} width={40} height={40}/>
                        <p>Мы считаем, что вправе формировать стандарты диагностики и лечения, на которые будут
                            ориентироваться врачи и образованные пациенты в России.</p>
                    </div>
                </section>

                <section className={styles.legendaryDoctors}>
                    <div>
                        <h1>Легендарные врачи клиники &quot;Рассвет&quot;</h1>
                    </div>

                    <div className={styles.legendaryDoctors__description}>
                        <Image src={doctorLogo} width={200} height={200}/>

                        <div className={styles.healthCare__list}>
                            <div className={styles.legendaryDoctors__description__item}>
                                <Image src={sun} width={40} height={40}/>
                                <p>У нас есть любовь к делу и преданность ему.</p>
                            </div>
                            <div className={styles.legendaryDoctors__description__item}>
                                <Image src={sun} width={42} height={42}/>
                                <p>У нас есть специалисты, самые значимые в здравоохранении.</p>
                            </div>
                            <div className={styles.legendaryDoctors__description__item}>
                                <Image src={sun} width={40} height={40}/>
                                <p>У нас есть идеология, принятая в цивилизованном, развитом мире, где
                                    люди живут дольше.</p>
                            </div>
                            <div className={styles.legendaryDoctors__description__item}>
                                <Image src={sun} width={40} height={40}/>
                                <p>У нас есть воля и средства объединить это.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <DoctorsSlider/>

                <section className={styles.reviews}>
                    <div className={styles.reviews__title}>
                        <h1>Отзывы</h1>
                        <Link href={"/clinicReviews"}>
                            <a><h5>Все отзывы</h5></a>
                        </Link>
                    </div>
                    <div className={styles.reviews__item}>
                        {/*<CardReview*/}
                        {/*    date={"17 ноября  2021"}*/}
                        {/*    fullName={"Александр Иванов"}*/}
                        {/*    text={"Спасибо вам за клинику, были с женой в субботу у кардиолога, вышли счастливые и вдохновлённые, доктор оценила риски, осмотрела, рассказала, сняла мою тревожность! Спасибо что вы теперь есть у нас пациентов!"}*/}
                        {/*/>*/}

                        {/*<CardReview*/}
                        {/*    date={"15 февраля  2022"}*/}
                        {/*    fullName={"Федор Катасонов"}*/}
                        {/*    text={"Лучшее, что случилось со мной за последнее время в плане медицины. Удобное расположение, сверхпрофессиональные врачи, качественное лечение (даже таких беспокойных пациентов, как я). Узнал об организме много нового, обрадовался. Лишние услуги не навязывают, ненужные приемы не назначают, цена абсолютно адекватна. Рекомендую!"}*/}
                        {/*/>*/}

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