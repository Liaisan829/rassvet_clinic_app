import {Field, Form, Formik} from 'formik';
import React, {useState} from 'react';
import styles from "../../styles/pagesStyles/signUpPage.module.scss";
import {Button} from "../../components/ui/Button/Button";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";

const AddEdit = () => {

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
    const [updateData, setUpdateData] = useState({});
    const handleSubmit = () => {

    }

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
                    <Form className={styles.modal_container}>
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
                            type='password'
                            value={data.interests}
                            placeholder='Интересы'
                            onChange={(e: any) => setData({...data, interests: e.target.value})}
                        />
                        <Field
                            name='price'
                            type='password'
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
                            type='password'
                            value={data.speciality}
                            placeholder='Специальность'
                            onChange={(e: any) => setData({...data, speciality: e.target.value})}
                        />
                        <Field
                            name='work'
                            type='password'
                            value={data.work}
                            placeholder='Опыт работы'
                            onChange={(e: any) => setData({...data, work: e.target.value})}
                        />


                        <Button
                            type='submit'
                            theme='orange'
                        >Зарегистрироваться</Button>
                    </Form>
                )}
            </Formik>
            <Button
                type={"submit"}
                theme={"transparent"}
            >
                Сохранить
            </Button>
        </BaseLayout>
    );
};

export default AddEdit;