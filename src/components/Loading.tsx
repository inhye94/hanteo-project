import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import LoadingSpinner from "./LoadingSpinner";

export default function Loading() {
  return (
    <LoadingBox>
      <LoadingSpinner />
      <LoadingText>데이터를 불러오는 중입니다.</LoadingText>
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  padding: 12px;
`;

const LoadingText = styled.p`
  font-size: 12px;
  color: ${colors.neutral70};
`;
