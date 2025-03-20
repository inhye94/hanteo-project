import CategorySwiper from "./components/CategorySwiper";
import Pagenation from "./components/Pagenation";
import { useCategory } from "./providers/CategoryProvider";

function App() {
  const { swiper, categories } = useCategory();

  return (
    <>
      <header>
        <h1 className="visually-hidden">한터글로벌</h1>
        <Pagenation swiper={swiper} />
      </header>

      <main>
        <CategorySwiper categories={categories} pagenation={swiper}>
          <CategorySwiper.Item>Slide1</CategorySwiper.Item>
          <CategorySwiper.Item>Slide2</CategorySwiper.Item>
          <CategorySwiper.Item>Slide3</CategorySwiper.Item>
          <CategorySwiper.Item>Slide4</CategorySwiper.Item>
          <CategorySwiper.Item>Slide5</CategorySwiper.Item>
          <CategorySwiper.Item>Slide6</CategorySwiper.Item>
        </CategorySwiper>
      </main>

      <footer>푸터 영역</footer>
    </>
  );
}

export default App;
