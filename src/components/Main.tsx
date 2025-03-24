import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import { useCategory } from "../providers/CategoryProvider";
import CategorySwiper from "./CategorySwiper";
import Container from "./Container";

export default function Main() {
  const { swiper, categories } = useCategory();

  return (
    <main>
      <div
        css={css`
          background-color: ${colors.coolNeutral97};
          min-height: 65vh;
        `}
      >
        <Container>
          <CategorySwiper categories={categories} pagenation={swiper} />
        </Container>
      </div>
    </main>
  );
}
