import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../constants/breakpoints";
import { colors } from "../constants/colors";
import type { IPromotionType } from "../types/promotion";
import Badge from "./Badge";

export default function PromotionCard({
  promotion,
}: {
  promotion: IPromotionType;
}) {
  return (
    <Card>
      {promotion.linkUrl && (
        <PromotionLink
          href={promotion.linkUrl}
          target="_blank"
          aria-label={`${promotion.description} 페이지로 이동`}
        />
      )}
      <TextBox>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4px;
          `}
        >
          <PromotionTitle>{promotion.title}</PromotionTitle>
          {promotion.action && (
            <Badge variant="outlined" shape="pill" size={10}>
              {promotion.action}
            </Badge>
          )}
        </div>
        <PromotionDate>{promotion.period}</PromotionDate>
      </TextBox>
      <ImageBox>
        <BadgeWrapper>
          {promotion.state && <Badge>{promotion.state}</Badge>}
        </BadgeWrapper>
        <PromotionImage src={promotion.imageSrc} alt={promotion.description} />
      </ImageBox>
    </Card>
  );
}

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 5px 0 #ddd;
  overflow: hidden;
`;

// link
const PromotionLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: block;
  width: 100%;
  height: 100%;
`;

// Text Box
const TextBox = styled.header`
  padding: 8px;

  @media screen and (min-width: ${breakpoints.lg}px) {
    padding: 16px;
  }
`;

const PromotionTitle = styled.h3`
  font-size: 12px;
  font-weight: 700;
  max-width: 65%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: 16px;
  }
`;

const PromotionDate = styled.p`
  font-size: 10px;
  text-align: right;

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: 12px;
  }
`;

// ImageBox
const ImageBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 21/9;

  @media screen and (min-width: ${breakpoints.lg}px) {
    width: 100%;
    height: 300px;
    aspect-ratio: unset;
  }
`;

const BadgeWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;

  @media screen and (min-width: ${breakpoints.lg}px) {
    padding: 16px;
  }
`;

const PromotionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${colors.neutral95};
`;
