export type naveMenuDataType = { id: string; label: string };

export const navMenuData: naveMenuDataType[] = [
  { id: "about-us", label: "About Us" },
  { id: "contact", label: "Contact" },
];

export const contentList: string[] = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content ",
  "Learn from expert-led courses designed for aspiring influencers",
];

export const imgProperties = (isDesktopView: boolean) => {
  const properties = {
    mobileView: {
      width: 390,
      height: 426,
      img: "/images/banner.png",
    },
    desktopView: {
      width: 666,
      height: 679,
      img: "/images/bannerDesktop.png",
    },
  };

  return isDesktopView ? properties.desktopView : properties.mobileView;
};

export const getScaledSize = (screenWidth: number) => {
  const maxWidth = 1440;
  const targetWidth = 666;
  const targetHeight = 679;

  const scale = Math.min(1, screenWidth / maxWidth);

  return {
    width: Math.round(targetWidth * scale),
    height: Math.round(targetHeight * scale),
  };
};

export const getNewLeftValue = (screenWidth: number) => {
  const scale = Math.max(0, Math.min(1, (1440 - screenWidth) / 1440));
  const newLeftValue = Math.max(10, 235 - scale * 225);

  return newLeftValue;
};
