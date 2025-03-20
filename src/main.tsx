import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ICategory } from "./components/CategorySwiper.tsx";
import { CategoryProvider } from "./providers/CategoryProvider.tsx";
import "./sass/index.scss";

const categories: ICategory[] = [
  { id: "category-1", text: "차트" },
  { id: "category-2", text: "Whook" },
  { id: "category-3", text: "이벤트" },
  { id: "category-4", text: "뉴스" },
  { id: "category-5", text: "스토어" },
  { id: "category-6", text: "충전소" },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoryProvider swiper="main-swiper" categories={categories}>
      <App />
    </CategoryProvider>
  </StrictMode>
);
