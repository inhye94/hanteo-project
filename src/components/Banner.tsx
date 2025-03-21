import { css } from "@emotion/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../constants/colors";
import PromotionCard from "./PromotionCard";

export default function Banner() {
  return (
    <section>
      <h3 className="visually-hidden">배너</h3>

      <Swiper
        css={css`
          padding: 8px 0;
        `}
        modules={[Pagination]}
        pagination={{
          el: `.banner-pagenation`,
          clickable: true,
          type: "bullets",
          renderBullet: function (_, className) {
            // className이 기본값이 들어가게 필수 설정
            return '<button type="button" class="' + className + '"></button>';
          },
        }}
        spaceBetween={8}
        slidesPerView={1.1}
        loop
        centeredSlides
      >
        <SwiperSlide>
          <PromotionCard />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionCard />
        </SwiperSlide>
      </Swiper>

      <div
        className="banner-pagenation"
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
      ></div>
    </section>
  );
}
