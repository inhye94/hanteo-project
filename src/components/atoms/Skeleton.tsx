import { css } from "@emotion/react";

interface ISkeleton {
  variant: "circle" | "text" | "rectangular" | "rounded";
  width?: number;
  height?: number;
  line?: number;
}

const skeletonVariant = {
  circle: "50%",
  text: "4px",
  rectangular: "0",
  rounded: "8px",
};

export default function Skeleton({
  variant,
  width,
  height,
  line = 1,
}: ISkeleton) {
  return (
    <>
      {Array.from({ length: line }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="skeleton"
          css={css`
            width: ${width ? width + "px" : "100%"};
            height: ${height ? height + "px" : "100%"};
            border-radius: ${skeletonVariant[variant]};
          `}
          aria-hidden
        ></div>
      ))}
    </>
  );
}
