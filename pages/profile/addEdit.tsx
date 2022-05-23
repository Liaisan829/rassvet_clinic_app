import {Field, Form, Formik} from 'formik';
import React, {useState} from 'react';
import {addDoc} from 'firebase/firestore';
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import styles from "/styles/pagesStyles/signUpPage.module.scss";
import {collection} from "@firebase/firestore";
import {firestore} from "../../config/firebase";
import useRouter from "next/router";

const AddEdit = () => {
    const doctorsDatabaseRef = collection(firestore, "doctors");
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

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await addDoc(doctorsDatabaseRef,{
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
    };

    return (
        <BaseLayout title={"Администратор"}>
            <h1>hello</h1>
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
                    <Form className={styles.modal_container} onSubmit={handleSubmit}>
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
                            Сохранить
                        </Button>

                    </Form>
                )}
            </Formik>
        </BaseLayout>
    );
};

export default AddEdit;