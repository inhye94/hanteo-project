import { css } from "@emotion/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";
import { breakpoints } from "../constants/breakpoints";
import { colors } from "../constants/colors";
import type { IPromotionType } from "../types/promotion";
import Container from "./Container";
import Pagenation from "./Pagenation";
import PromotionCard from "./PromotionCard";

const BANNER_PAGENATION_NAME = "banner-pagenation";
const BANNER_PAGENATION_OPTION: PaginationOptions = {
  el: `.${BANNER_PAGENATION_NAME}`,
  clickable: true,
  type: "bullets",
  renderBullet: function (_, className) {
    // className이 기본값이 들어가게 필수 설정
    return '<button type="button" class="' + className + '"></button>';
  },
};

interface IBannerProps {
  promotions: IPromotionType[];
}

export default function Banner({ promotions }: IBannerProps) {
  return (
    <section>
      <h3 className="visually-hidden">배너</h3>

      <Container>
        <Swiper
          modules={[Pagination]}
          pagination={BANNER_PAGENATION_OPTION}
          spaceBetween={8}
          slidesPerView={1.1}
          breakpoints={{
            [breakpoints.lg]: {
              spaceBetween: 20,
              slidesPerView: 1.01,
            },
          }}
          css={css`
            padding: 8px;
          `}
          loop
          centeredSlides
        >
          {promotions.map((promotion) => (
            <SwiperSlide key={promotion.id}>
              <PromotionCard promotion={promotion} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Pagenation
          swiper={BANNER_PAGENATION_NAME}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 8px;
            margin-bottom: 8px;

            button {
              width: 5px;
              height: 5px;
              background-color: ${colors.coolNeutral96};
              border-radius: 50%;

              &.swiper-pagination-bullet-active {
                background-color: ${colors.pink50};
              }
            }
          `}
        />
      </Container>
    </section>
  );
}
