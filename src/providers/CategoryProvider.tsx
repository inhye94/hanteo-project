import { createContext, useContext } from "react";
import type { ICategory } from "../types/category";

/**
 * CategoryProvider 컴포넌트
 *
 * 특이사항:
 * 1. Props
 *  - swiper: <Pagenation/>과 <CategorySwiper/>를 연결하는 고유 클래스명
 *  - categories: 카테고리 데이터
 * 2. 일관된 데이터를 공유
 *  - 카테고리 데이터를 중앙에서 관리하여 휴먼 에러 방지
 *
 * 사용 방법:
 * const { swiper, categories } = useCategory();
 */

interface ICategoryContext {
  swiper: string;
  categories: ICategory[];
}

const CategorySwiperContext = createContext<ICategoryContext>({
  swiper: "",
  categories: [],
});

export function CategoryProvider({
  swiper,
  categories,
  children,
}: React.PropsWithChildren<ICategoryContext>) {
  return (
    <CategorySwiperContext.Provider value={{ swiper, categories }}>
      {children}
    </CategorySwiperContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategorySwiperContext);
}
