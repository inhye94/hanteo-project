import { css } from "@emotion/react";
import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div
      className={className}
      css={css`
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
}
