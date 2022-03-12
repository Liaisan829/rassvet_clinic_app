/* eslint-disable */
import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {Slider} from "../components/Slider/Slider";
import Image from "next/image";
import heart from '../public/heart.svg';
import sun from '../public/sun.svg';
import doctorLogo from '../public/doctorLogo.svg';
import styles from '../styles/indexPageStyles.module.scss';
import {DoctorsSlider} from "../components/DoctorsSlider/DoctorsSlider";

const MainPage = () => {
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
                    <h1>Легендарные врачи клиники "Рассвет"</h1>
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
            </BaseLayout>
        </>
    )
}

export default MainPage
