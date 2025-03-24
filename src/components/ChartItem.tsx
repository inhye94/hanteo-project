import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback } from "react";
import { breakpoints } from "../constants/breakpoints";
import { colors } from "../constants/colors";
import { IMockData } from "../types/mockData";

interface IChartItemProps {
  product: IMockData;
  index?: number;
  onClick?: () => void;
}

export default function ChartItem({
  product,
  index,
  onClick,
}: IChartItemProps) {
  const clickHandler = useCallback(() => {
    if (!onClick) return;
    onClick();
  }, []);

  return (
    <Item
      onClick={clickHandler}
      css={css`
        cursor: ${onClick ? "pointer" : "normal"};
      `}
    >
      <ImageBox>
        <img
          src={product.productImg ?? "/no-image.png"}
          alt={product.productName}
        />
      </ImageBox>
      <TextBox>
        <span className="visually-hidden">{Number(index) + 1}위</span>
        <p>{product.productName}</p>
      </TextBox>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  background-color: ${colors.common100};
  column-gap: 8px;
  border-radius: 4px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  aspect-ratio: 1/1;
  background-color: ${colors.neutral70};
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints.lg}px) {
    width: 80px;
  }
`;

const TextBox = styled.div`
  flex-grow: 1;
  padding: 8px;
`;
