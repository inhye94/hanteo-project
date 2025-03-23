import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { ICategory } from "../types/category";

/**
 * CategorySwiper 컴포넌트
 *
 * 특이사항:
 * 1. <Pagenation /> 컴포넌트와 매칭
 * - `pagenation` props 값은 <Pagination>의 `swiper` 값과 일치해야 정상적으로 연동됩니다.
 * - <CategoryProvider>를 통해 해당 값을 공유하여 일관된 데이터 관리합니다.
 * - 외부에서 값을 주입받기 때문에 재사용이 가능합니다.
 */

export interface ICategorySwiperProps {
  categories: ICategory[];
  pagenation: string;
}

export default function CategorySwiper({
  categories,
  pagenation,
}: ICategorySwiperProps) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        el: `.${pagenation}`,
        clickable: true,
        bulletActiveClass: "active",
        renderBullet: (index, className) => {
          return `<button type="button" class="${className} custom-bullet">${categories[index]?.text}</button>`;
        },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>{category.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}
