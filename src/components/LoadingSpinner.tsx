import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { colors } from "../constants/colors";
import Icon from "./icon";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <motion.div
      style={{ display: "inline-flex" }}
      animate={{ transform: "rotate(360deg)" }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      <Icon
        icon="spinner"
        label="로딩 중"
        className={className}
        css={css`
          color: ${colors.neutral50};
        `}
      />
    </motion.div>
  );
}
