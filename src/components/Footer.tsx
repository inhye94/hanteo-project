import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import Container from "./Container";

export default function Footer() {
  return (
    <footer
      css={css`
        padding: 24px 0;
        background-color: ${colors.coolNeutral90};
      `}
    >
      <Container
        css={css`
          padding: 0 8px;
        `}
      >
        <h5
          css={css`
            font-size: 14px;
            font-weight: 500;
            color: ${colors.neutral20};
          `}
        >
          푸터 영역
        </h5>

        <p
          css={css`
            font-size: 12px;
            color: ${colors.neutral50};
          `}
        >
          Copyright 2025. Inhye. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
