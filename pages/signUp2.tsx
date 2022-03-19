import Link from "next/link";
import {Field, Form, Formik} from "formik";
import SignUpLayout from "../components/SignUpLayout/SignUpLayout";
import {Button} from "../components/ui/Button/Button";
import styles from '../styles/pagesStyles/signInPage.module.scss';

const SignUp2 = () => {
    return (
        <SignUpLayout>
            <Formik initialValues={{
                password: "",
                repassword: "",
            }}
                    onSubmit={values => {
                        console.log(values)
                    }}
            >
                {({errors, touched, dirty}) => (
                    <Form className={styles.modal_container}>
                    <Field name="birthDate" placeholder="Дата рождения"/>
                    <Field name="email" placeholder="Почта"/>
                    <Field name="phone" placeholder="Телефон"/>

                    <div className={styles.loginPage__popup__bottom}>
                    <p><Link href={"/signUp"}>Предыдущий шаг</Link></p>
                    <p><Link href={"/signUp3"}>Следующий шаг</Link></p>
                    </div>
                    </Form>
                )}
            </Formik>
        </SignUpLayout>
    )
}

export default SignUp2;