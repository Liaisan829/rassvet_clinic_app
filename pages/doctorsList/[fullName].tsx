import {useRouter} from "next/router";
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import styles from '../../styles/pagesStyles/doctorsList.module.scss';

export default function Doctor ({img, speciality, experience}:any)  {
    const {query} = useRouter();

    return (
        <>
            <BaseLayout title={query.fullName}>
                <h1>{query.fullName}</h1>
                    <div className={styles.doctorTitle}>
                        <img src={img} alt="doct"/>
                        <div className={styles.doctorTitle__info}>
                            <div className={styles.doctorTitle__info__item}>
                                <h6>Должность:</h6>
                                <h5>{speciality}</h5>
                            </div>
                            <div className={styles.doctorTitle__info__item}>
                                <h6>Стаж работы по специальности:</h6>
                                <p>{experience}</p>
                            </div>
                            <Button
                                type="submit"
                                theme="orange"
                        >Записаться на прием</Button>
                        <p>Запишитесь на прием к специалисту в удобное для вас время</p>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}