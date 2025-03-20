import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CategorySwiper.scss";

/**
 * CategorySwiper 컴포넌트
 *
 * 특이사항:
 * 1. Pagenation 컴포넌트와 매칭
 *  - CategorySwiper의 pagenation props = Pagenation의 swiper props
 *  - 예시
 *    <Pagenation swiper="example-slider" />
 *    <CategorySwiper categories={...} pagenation="example-slider"
 *      {...}
 *    </CategorySwiper>
 * 2. CCP 패턴
 *  - Item의 내부를 자유롭게 구성할 수 있습니다.
 *  - 예시
 *    <CategorySwiper>
 *      <CategorySwiper.Item>{...}</CategorySwiper.Item>
 *      <CategorySwiper.Item>{...}</CategorySwiper.Item>
 *      <CategorySwiper.Item>{...}</CategorySwiper.Item>
 *    </CategorySwiper>
 * 3. (개수) Item  = categories
 *  - Item < categories 이면 categories는 넘치는 만큼 생략됩니다.
 *  - Item > categories 이면 categories는 부족한 만큼 'undefined'로 표기됩니다.
 */

export interface ICategory {
  id: string;
  text: string;
}

export interface ICategorySwiperProps {
  children: React.ReactNode;
  categories: ICategory[];
  pagenation: string;
}

export default function CategorySwiper({
  children,
  categories,
  pagenation,
}: ICategorySwiperProps) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        el: `.${pagenation}`,
        clickable: true,
        renderBullet: (index, className) => {
          return `<button type="button" class="${className} custom-bullet">${categories[index]?.text}</button>`;
        },
      }}
    >
      {children}
    </Swiper>
  );
}

CategorySwiper.Item = SwiperSlide;
