import { useState, useEffect } from "react";

type Direction = "decrease" | "increase";

export function useResponsivePositioningValue(
  value: number,
  direction: Direction = "decrease",
  isLargerScreen: boolean = true
): number {
  const [responsiveValue, setResponsiveValue] = useState(value);

  useEffect(() => {
    const calculate = () => {
      const width =
        typeof window !== "undefined"
          ? window.innerWidth
          : isLargerScreen
          ? 1440
          : 390;

      const baseWidth = isLargerScreen ? 1440 : 390;

      if (isLargerScreen) {
        if (width >= baseWidth) {
          setResponsiveValue(value);
        } else {
          const scale = (baseWidth - width) / baseWidth;
          const adjustedScale = Math.min(1, scale * 2);

          if (direction === "decrease") {
            const minValue = 10;
            const responsive = value - adjustedScale * (value - minValue);
            setResponsiveValue(Math.max(minValue, responsive));
          } else if (direction === "increase") {
            const responsive = value + adjustedScale * value;
            setResponsiveValue(responsive);
          }
        }
      } else {
        if (width <= baseWidth) {
          setResponsiveValue(value);
        } else {
          const scale = (width - baseWidth) / baseWidth;
          const adjustedScale = Math.min(1, scale * 2);

          if (direction === "decrease") {
            const minValue = 10;
            const responsive = value - adjustedScale * (value - minValue);
            setResponsiveValue(Math.max(minValue, responsive));
          } else if (direction === "increase") {
            const responsive = value + adjustedScale * value;
            setResponsiveValue(responsive);
          }
        }
      }
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [value, direction, isLargerScreen]);

  return responsiveValue;
}
