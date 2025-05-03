"use client";

import { useEffect, useState } from "react";

const breakpoints: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useResponsive = (breakpoint: string) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth >= breakpoints[breakpoint]
      : false
  );

  useEffect(() => {
    const updateMatch = () => {
      setMatches(window.innerWidth >= breakpoints[breakpoint]);
    };

    window.addEventListener("resize", updateMatch);
    updateMatch(); // Initial check

    return () => window.removeEventListener("resize", updateMatch);
  }, [breakpoint]);

  return matches;
};
export default useResponsive;
