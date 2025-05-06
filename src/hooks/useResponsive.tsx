"use client";

import { useEffect, useState } from "react";

// tailwind breakpoint
const breakpoints: Record<string, number> = {
  xs: 520, //custom breakpoint
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useResponsive = (breakpoint: keyof typeof breakpoints) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const updateMatch = () => {
      const width = window.innerWidth;
      const match = width >= breakpoints[breakpoint];
      setMatches(match);
    };

    updateMatch(); // Run once after mount
    window.addEventListener("resize", updateMatch);

    return () => window.removeEventListener("resize", updateMatch);
  }, [breakpoint]);

  return matches;
};

export default useResponsive;
