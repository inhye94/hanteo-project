import { css } from "@emotion/react";
import { colors } from "../constants/colors";

export default function Empty() {
  return (
    <p
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        font-size: 12px;
        color: ${colors.neutral70};
      `}
    >
      데이터가 없습니다.
    </p>
  );
}
