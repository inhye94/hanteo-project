import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { categories } from "./constants/category.ts";
import { CategoryProvider } from "./providers/CategoryProvider.tsx";
import "./sass/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoryProvider swiper="main-swiper" categories={categories}>
      <App />
    </CategoryProvider>
  </StrictMode>
);
