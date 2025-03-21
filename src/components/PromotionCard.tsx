import { css } from "@emotion/react";
import { colors } from "../constants/colors";

export default function PromotionCard() {
  return (
    <article
      css={css`
        display: flex;
        flex-direction: column-reverse;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 1px 5px 0 #ddd;
        overflow: hidden;
      `}
    >
      <header
        css={css`
          padding: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4px;
          `}
        >
          <h3
            css={css`
              font-size: 12px;
              font-weight: 700;
              max-width: 65%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `}
          >
            [M COUNTDOWN] 10월 2주차 엠카 사전투표 결과보기
          </h3>
          <strong
            css={css`
              padding: 0 8px;
              font-size: 10px;
              font-weight: 900;
              border: 1px solid ${colors.pink50};
              border-radius: 100px;
              color: ${colors.pink50};
            `}
          >
            투표하기
          </strong>
        </div>
        <p
          css={css`
            font-size: 10px;
            text-align: right;
          `}
        >
          2020.02.09 10:00 ~ 2020.04.08 17:00 (KST)
        </p>
      </header>
      <div
        css={css`
          position: relative;
          width: 100%;
          aspect-ratio: 21/9;
        `}
      >
        <div
          css={css`
            position: absolute;
            left: 8px;
            top: 8px;
          `}
        >
          <strong
            css={css`
              padding: 1px 2px;
              font-size: 12px;
              font-weight: 900;
              border: 1px solid ${colors.pink50};
              border-radius: 4px;
              color: ${colors.common100};
              background-color: ${colors.pink50};
            `}
          >
            진행 중
          </strong>
        </div>
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-color: ${colors.neutral95};
          `}
          src=""
          alt="엠카운트다운 글로벌 사전 투표"
        />
      </div>
    </article>
  );
}
