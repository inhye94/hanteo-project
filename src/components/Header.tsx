import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import { zIndex } from "../constants/z-index";
import { useCategory } from "../providers/CategoryProvider";
import Container from "./Container";
import Pagenation from "./Pagenation";

export default function Header() {
  const { swiper } = useCategory();

  return (
    <header
      css={css`
        position: sticky;
        left: 0;
        top: 0;
        z-index: ${zIndex.gnb};
        background-color: ${colors.red80};
      `}
    >
      <Container>
        <h1 className="visually-hidden">한터글로벌</h1>
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

              &.active {
                color: ${colors.common100};
              }
            }
          `}
        />
      </Container>
    </header>
  );
}
