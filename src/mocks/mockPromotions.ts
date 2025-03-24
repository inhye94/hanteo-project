import { IPromotionType } from "../types/promotion";

export const mockPromotions: IPromotionType[] = [
  {
    id: "promotion-1",
    title: "[M COUNTDOWN] 10월 2주차 엠카 사전투표 결과보기",
    period: "2020.02.09 10:00 ~ 2020.04.08 17:00 (KST)",
    action: "투표하기",
    imageSrc: "/thumb_portfolio.jpg",
    description: "엠카운트다운 글로벌 사전 투표",
    state: "진행 중",
    linkUrl: "https://inhye-portfolio.vercel.app/",
  },
  {
    id: "promotion-2",
    title: "[M COUNTDOWN] 10월 2주차 엠카 사전투표 결과보기",
    period: "2020.02.09 10:00 ~ 2020.04.08 17:00 (KST)",
    imageSrc: "/thumb_designsystem.jpg",
    description: "엠카운트다운 글로벌 사전 투표",
    state: "진행 중",
    linkUrl: "https://inhye-portfolio.vercel.app/",
  },
  {
    id: "promotion-3",
    title: "[M COUNTDOWN] 10월 2주차 엠카 사전투표 결과보기",
    period: "2020.02.09 10:00 ~ 2020.04.08 17:00 (KST)",
    imageSrc: "/thumb_ott-search.jpg",
    description: "엠카운트다운 글로벌 사전 투표",
    state: "D-1",
    linkUrl: "https://inhye-portfolio.vercel.app/",
  },
];
