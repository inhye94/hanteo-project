import { css } from "@emotion/react";
import { colors } from "../constants/colors";

export default function ListItem() {
  return (
    <li
      css={css`
        display: flex;
        background-color: ${colors.common100};
        column-gap: 8px;
        border-radius: 4px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          width: 50px;
          aspect-ratio: 4/3;
          background-color: ${colors.neutral70};
          border-radius: 4px;
          flex-shrink: 0;
        `}
      ></div>
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        list item
      </div>
    </li>
  );
}
