import {BaseLayout} from "../components/BaseLayout/BaseLayout";
import {Slider} from "../components/Slider/Slider";

const MainPage = () => {
  return (
      <>
          <BaseLayout title={"Главная страница"}>
              <Slider/>
          </BaseLayout>
      </>
  )
}

export default MainPage
