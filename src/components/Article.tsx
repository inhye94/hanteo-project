import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface IArticleProps {
  title?: string;
  children: React.ReactNode;
}

export default function Article({ title, children }: IArticleProps) {
  return (
    <article
      css={css`
        padding: 12px;
      `}
    >
      {title && <Title>{title}</Title>}
      {children}
    </article>
  );
}

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;
