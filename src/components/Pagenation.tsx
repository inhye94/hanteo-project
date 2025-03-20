import classNames from "classnames";

/**
 * Pagenation 컴포넌트
 *
 * 특이사항:
 * 1. CategorySwiper 컴포넌트와 매칭
 *  - CategorySwiper의 pagenation props = Pagenation의 swiper props
 *  - 예시
 *    <Pagenation swiper="example-slider" />
 *    <CategorySwiper categories={...} pagenation="example-slider"
 *      {...}
 *    </CategorySwiper>
 */

export interface IPagenationProps {
  swiper: string;
  className?: string;
}

export default function Pagenation({ swiper, className }: IPagenationProps) {
  return <div className={classNames(swiper, className)}></div>;
}
