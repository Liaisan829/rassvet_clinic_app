import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import '../styles/globals.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '/components/Slider/Slider.scss';
import '/components/DoctorsSlider/DoctorsSlider.scss';

const noAuthRequired = ['/', '/signIn', '/signUp', '/adultClinic', '/clinicReviews', 'hospital'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </>);
}

export default MyApp;
