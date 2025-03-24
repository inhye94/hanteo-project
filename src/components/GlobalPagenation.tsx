import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import { useCategory } from "../providers/CategoryProvider";
import Container from "./Container";
import Pagenation from "./Pagenation";

export default function GlobalPagenation() {
  const { swiper } = useCategory();

  return (
    <div
      css={css`
        background-color: ${colors.red80};
      `}
    >
      <Container>
        <Pagenation
          swiper={swiper}
          css={css`
            width: 100%;
            padding: 0 4px;
            overflow-x: auto;
            white-space: nowrap;

            &::-webkit-scrollbar {
              display: none !important;
            }

            button {
              padding: 12px;
              color: ${colors.neutral10};
              font-weight: 900;
              font-size: 14px;
              transition: color 150ms ease-in-out;

              &.swiper-pagination-bullet-active {
                color: ${colors.common100};
              }
            }
          `}
        />
      </Container>
    </div>
  );
}
