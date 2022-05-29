import {addDoc, collection} from "@firebase/firestore";
import React, {FC, useState} from "react";
import {Button} from "../../ui/Button/Button";
import {Modal} from "../Modal/Modal";
import {firestore} from "../../../config/firebase";
import useRouter from "next/router";
import {Field, Form, Formik} from "formik";
import styles from '../Modal/Modal.module.scss';

interface Props {
    showModal: any,
    setShowModal: any,
}

export const AddDoctorModal: FC<Props> = ({showModal, setShowModal}) => {
    const router = useRouter;
    const [data, setData] = useState({
        fullName: "",
        shortName: "",
        experience: "",
        department: "",
        education: "",
        interests: "",
        price: "",
        url: "",
        speciality: "",
        work: ""
    });
    const doctorsDatabaseRef = collection(firestore, "doctors");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await addDoc(doctorsDatabaseRef, {
            fullName: data.fullName,
            shortName: data.shortName,
            experience: data.experience,
            department: data.department,
            education: data.education,
            interests: data.interests,
            price: data.price,
            url: data.url,
            speciality: data.speciality,
            work: data.work
        }).then(() => {
            router.push("/profile")
        })
        await setShowModal(false)
    };

    return (
        <>
            <Modal title={"Добавить врача"} onClose={() => setShowModal(false)} show={showModal}>
                <div className={styles.innerPart}>
                    <div className={styles.innerPart__container}>
                        <Formik initialValues={{
                            fullName: "",
                            shortName: "",
                            experience: "",
                            department: "",
                            education: "",
                            interests: "",
                            price: "",
                            url: "",
                            speciality: "",
                            work: ""
                        }}
                                onSubmit={console.log}
                        >
                            {() => (
                                <Form onSubmit={handleSubmit}>
                                    <Field
                                        name='fullName'
                                        value={data.fullName}
                                        placeholder='Полное имя'
                                        onChange={(e: any) => setData({...data, fullName: e.target.value})}
                                    />
                                    <Field
                                        name='shortName'
                                        value={data.shortName}
                                        placeholder='Никнейм'
                                        onChange={(e: any) => setData({...data, shortName: e.target.value})}
                                    />
                                    <Field
                                        name='experience'
                                        value={data.experience}
                                        placeholder='Опыт работы'
                                        onChange={(e: any) => setData({...data, experience: e.target.value})}
                                    />
                                    <Field
                                        name='department'
                                        value={data.department}
                                        placeholder='Отделение'
                                        onChange={(e: any) => setData({...data, department: e.target.value})}
                                    />
                                    <Field
                                        name='education'
                                        value={data.education}
                                        placeholder='Образование'
                                        onChange={(e: any) => setData({...data, education: e.target.value})}
                                    />
                                    <Field
                                        name='interests'
                                        value={data.interests}
                                        placeholder='Интересы'
                                        onChange={(e: any) => setData({...data, interests: e.target.value})}
                                    />
                                    <Field
                                        name='price'
                                        value={data.price}
                                        placeholder='Цена первичного приема'
                                        onChange={(e: any) => setData({...data, price: e.target.value})}
                                    />
                                    <Field
                                        name='url'
                                        type='file'
                                        value={data.url}
                                        placeholder='Фото'
                                        onChange={(e: any) => setData({...data, url: e.target.value})}
                                    />
                                    <Field
                                        name='speciality'
                                        value={data.speciality}
                                        placeholder='Специальность'
                                        onChange={(e: any) => setData({...data, speciality: e.target.value})}
                                    />
                                    <Field
                                        name='work'
                                        value={data.work}
                                        placeholder='Опыт работы'
                                        onChange={(e: any) => setData({...data, work: e.target.value})}
                                    />
                                    <Button
                                        type={"submit"}
                                        theme={"transparent"}
                                    >
                                        Сохранить врача
                                    </Button>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Modal>
        </>
    )
};