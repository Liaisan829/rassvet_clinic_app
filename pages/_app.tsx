import type { AppProps } from 'next/app';
import '../styles/globals.css';
import "swiper/scss";
import "swiper/scss/navigation";
import "/components/Slider/Slider.scss";
import '/components/DoctorsSlider/DoctorsSlider.scss';

import('../mocks').then(({setupMocks}) => {
  setupMocks();
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
