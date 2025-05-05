"use client";

import useResponsive from "@/hooks/useResponsive";
import { FameTonic, FameTonicMobileView } from "../icons";
import { navMenuData } from "../utils";

const HeaderNavbar = () => {
  const isDesktopView = useResponsive("lg");
  const onClickHandler = () => {};

  return (
    <nav className="relative">
      <div className="absolute top-4 lg:top-[35px] right-[28px] lg:right-0  w-[221px] p-0 lg:px-[211px] lg:w-full flex justify-between items-center lg:items-start z-10">
        {isDesktopView ? (
          <FameTonic width={173.122} />
        ) : (
          <FameTonicMobileView width={107.784} height={46.072} />
        )}

        {isDesktopView ? (
          <div className="flex gap-x-10 text-[#A9A9A9] text-[18px] font-semibold">
            {navMenuData.map((menu) => (
              <span className="" key={menu.id}>
                {menu.label}
              </span>
            ))}
          </div>
        ) : (
          <HamBurgerMenuButton onClickHandler={onClickHandler} />
        )}
      </div>
    </nav>
  );
};

export default HeaderNavbar;

const HamBurgerMenuButton = ({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) => {
  return (
    <button
      className=" flex flex-col gap-0.5 p-0 items-start shrink-0 w-5"
      onClick={onClickHandler}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="border-[2px] h-0 border-white w-5" />
      ))}
    </button>
  );
};
