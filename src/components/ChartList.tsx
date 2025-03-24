import { css } from "@emotion/react";

interface IListProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChartList({ children, className }: IListProps) {
  return (
    <ul
      className={className}
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
