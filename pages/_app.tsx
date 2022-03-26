import type {AppProps} from 'next/app';
import '../styles/globals.css';
import "swiper/scss";
import "swiper/scss/navigation";
import "/components/Slider/Slider.scss";
import '/components/DoctorsSlider/DoctorsSlider.scss';
import { AuthContextProvider } from '../context/AuthContext';
import {useRouter} from "next/router";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


import('../mocks').then(({setupMocks}) => {
    setupMocks();
})

const noAuthRequired = ['/', '/signIn', '/signUp', '/adultClinic', '/childrenClinic']

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    return (
        <AuthContextProvider>
            {noAuthRequired.includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            )}
        </AuthContextProvider>

    )
}

export default MyApp
