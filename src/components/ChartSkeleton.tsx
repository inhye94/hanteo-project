import styled from "@emotion/styled";
import "react-loading-skeleton/dist/skeleton.css";
import { breakpoints } from "../constants/breakpoints";
import { colors } from "../constants/colors";
import ChartList from "./ChartList";
import Skeleton from "./atoms/Skeleton";

export default function ChartSkeleton({ length }: { length: number }) {
  return (
    <ChartList>
      {Array.from({ length }).map((_, index) => (
        <Item key={`chart-skeleton-${index}`}>
          <ImageBox>
            <Skeleton variant="rounded" />
          </ImageBox>
          <TextBox>
            <Skeleton variant="text" width={120} height={16} />
          </TextBox>
        </Item>
      ))}
    </ChartList>
  );
}

const Item = styled.li`
  display: flex;
  column-gap: 8px;
  border-radius: 8px;
  background-color: ${colors.common100};
  overflow: hidden;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;

  @media screen and (min-width: ${breakpoints.lg}px) {
    width: 80px;
    height: 80px;
  }
`;

const TextBox = styled.div`
  flex-grow: 1;
  padding: 8px;
`;
