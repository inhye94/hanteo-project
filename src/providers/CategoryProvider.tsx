import { createContext, useContext } from "react";
import { ICategory } from "../components/CategorySwiper";

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
