import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import { useAuth } from '../../config/auth';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const currentUser = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/signIn')
        }
    }, [router, currentUser])

    return (
        <>
            {currentUser ? children : null}
        </>
    );
};

export default ProtectedRoute;