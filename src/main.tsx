import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ChargePage from "./pages/ChargePage.tsx";
import ChartPage from "./pages/ChartPage.tsx";
import EventPage from "./pages/EventPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import StorePage from "./pages/StorePage.tsx";
import WhookPage from "./pages/WhookPage.tsx";
import { CategoryProvider } from "./providers/CategoryProvider.tsx";
import "./sass/index.scss";
import { ICategory } from "./types/category";

export const mockCategories: ICategory[] = [
  { id: "category-1", text: "차트", content: <ChartPage /> },
  { id: "category-2", text: "Whook", content: <WhookPage /> },
  { id: "category-3", text: "이벤트", content: <EventPage /> },
  { id: "category-4", text: "뉴스", content: <NewsPage /> },
  { id: "category-5", text: "스토어", content: <StorePage /> },
  { id: "category-6", text: "충전소", content: <ChargePage /> },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoryProvider swiper="main-swiper" categories={mockCategories}>
      <App />
    </CategoryProvider>
  </StrictMode>
);
