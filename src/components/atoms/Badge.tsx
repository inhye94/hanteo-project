import classNames from "classnames";
import React from "react";

interface IBadgeProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  shape?: "simple" | "pill";
  size?: 10 | 12 | 14;
}

export default function Badge({
  children,
  variant = "filled",
  shape = "simple",
  size = 12,
}: IBadgeProps) {
  return (
    <strong
      className={classNames(
        "badge",
        `badge-variant-${variant}`,
        `badge-shape-${shape}`,
        `badge-size-${size}`
      )}
    >
      {children}
    </strong>
  );
}
