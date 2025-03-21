import { css } from "@emotion/react";

export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 12px;
      `}
    >
      {children}
    </ul>
  );
}
