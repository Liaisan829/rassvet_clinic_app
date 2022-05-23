import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import '../styles/globals.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '/components/Slider/Slider.scss';
import '/components/DoctorsSlider/DoctorsSlider.scss';

const authRequired = ['/profile'];

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <>
            {authRequired.includes(router.pathname) ? (
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            ) : (
                <Component {...pageProps} />
            )}
        </>);
}

export default MyApp;
