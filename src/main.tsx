import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ChargeSection from "./pages/ChargeSection.tsx";
import ChartSection from "./pages/ChartSection.tsx";
import EventSection from "./pages/EventSection.tsx";
import NewsSection from "./pages/NewsSection.tsx";
import StoreSection from "./pages/StoreSection.tsx";
import WhookSection from "./pages/WhookSection.tsx";
import { CategoryProvider } from "./providers/CategoryProvider.tsx";
import "./sass/index.scss";
import { ICategory } from "./types/category";

export const mockCategories: ICategory[] = [
  { id: "category-1", text: "차트", content: <ChartSection /> },
  { id: "category-2", text: "Whook", content: <WhookSection /> },
  { id: "category-3", text: "이벤트", content: <EventSection /> },
  { id: "category-4", text: "뉴스", content: <NewsSection /> },
  { id: "category-5", text: "스토어", content: <StoreSection /> },
  { id: "category-6", text: "충전소", content: <ChargeSection /> },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoryProvider swiper="main-swiper" categories={mockCategories}>
      <App />
    </CategoryProvider>
  </StrictMode>
);
