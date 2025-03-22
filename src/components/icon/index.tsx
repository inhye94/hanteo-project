import { Suspense } from "react";
import { iconMap } from "./iconMap";

interface IIconProps {
  icon: keyof typeof iconMap;
  label?: string;
  className?: string;
}

export default function Icon({ icon, label, className }: IIconProps) {
  const LazyIcon = iconMap[icon];

  return (
    <Suspense fallback={<></>}>
      <LazyIcon className={className} aria-label={label} />
    </Suspense>
  );
}
