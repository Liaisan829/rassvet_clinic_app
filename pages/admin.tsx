import React, {useEffect, useState} from 'react';
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";
import {useAuth} from "../config/auth";
import {useRouter} from "next/router";

const Admin = ({usersInfo}: any) => {
    const currentUser = useAuth();
    const router = useRouter();
    const [admin, setAdmin] = useState();
    useEffect(() => {
        usersInfo
            .filter((userInfo: any) => (userInfo.email === currentUser.email && userInfo.role === "admin"))
            .map((user: any) => {
                setAdmin(user)
             })
    }, [])

    return (
        <>
            {admin && <h1>Admin page</h1>}
        </>
    );
};

export default Admin;

export async function getStaticProps() {
    const usersInfo = await getDocsFromFirebase('users');

    return {
        props: {usersInfo}
    };
}