import classNames from "classnames";

/**
 * Pagenation 컴포넌트
 *
 * 특이사항:
 * 1. Swiper 연동 (swiper props)
 * - Swiper의 pagination 요소와 연결되는 고유 이름을 가집니다.
 * - 외부에서 값을 주입받기 때문에 재사용이 가능합니다.
 *
 * 2. Swiper와의 연동 방식
 * - <CategoryProvider>의 `swiper` 값을 `swiper` props에 주입하면, <CategorySwiper> 컴포넌트와 연동됩니다.
 * - <Swiper> 컴포넌트에서 pagination element 설정 값이 `swiper` props 값과 동일하면 두 컴포넌트는 정상적으로 연동됩니다.
 * - 예시: <Banner> 컴포넌트 - `BANNER_PAGINATION_NAME`
 *
 * 3️. className props
 * - 외부에서 추가적인 CSS 클래스를 적용할 수 있는 props입니다.
 */

export interface IPagenationProps {
  swiper: string;
  className?: string;
}

export default function Pagenation({ swiper, className }: IPagenationProps) {
  return <div className={classNames(swiper, className)}></div>;
}
