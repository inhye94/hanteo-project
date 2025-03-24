import { lazy } from "react";

export const iconMap = {
  spinner: lazy(() =>
    import("react-icons/ai").then((m) => ({
      default: m.AiOutlineLoading3Quarters,
    }))
  ),
};
