"use client";

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "../icons";
import { contentList, imgProperties } from "../utils";

const HeroSection = () => {
  const isDesktopView = useResponsive("lg");

  const { width, height, img } = imgProperties(isDesktopView);

  const onClickHandler = () => {};

  return (
    <div className="flex flex-col lg:flex-row-reverse relative">
      <div
        className={twMerge(
          isDesktopView && "absolute top-[80px] right-[101px]"
        )}
      >
        <Image
          src={img}
          width={width}
          height={height}
          alt=""
          className={twMerge(isDesktopView && "object-cover")}
        />
      </div>

      <div className="flex flex-col lg:w-[516px] absolute top-[342px] lg:top-[166px] left-0 lg:left-[215px]">
        <div className="flex flex-col gap-y-[22px] lg:gap-y-4 px-5 pt-5 lg:p-0">
          <div
            className=" text-center lg:text-start font-extrabold lg:font-bold text-[25px] lg:text-[35px] "
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
            }}
          >
            <p className="text-white ">
              <span className="block lg:inline">Want to Turn Social Media</span>
              <span className="block lg:inline">
                {" "}
                Into a Profitable Career?
              </span>
            </p>

            <p className="text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
              Discover your way to success with Fametonic:
            </p>
          </div>
          <ul className="flex flex-col gap-y-2.5 lg:gap-y-[13px]">
            {contentList.map((content, index) => (
              <li
                key={index}
                className={twMerge(
                  "flex gap-x-2.5 text-[16px] leading-[22px] font-normal lg:font-semibold text-white items-center",
                  index === 0 && "font-medium"
                )}
              >
                <span>✨</span>
                <span>{content}</span>
              </li>
            ))}
          </ul>

          {!isDesktopView && (
            <div className="flex justify-center">
              <FooterSection isDesktopView={isDesktopView} />
            </div>
          )}
        </div>
        {isDesktopView && (
          <div className="flex flex-col items-start">
            <GetStartedSection onClickHandler={onClickHandler} />
            <FooterSection isDesktopView={isDesktopView} />
          </div>
        )}
      </div>

      {!isDesktopView && (
        <div className="absolute top-[785px] left-0 w-full">
          <GetStartedSection onClickHandler={onClickHandler} />
        </div>
      )}
    </div>
  );
};

export default HeroSection;

const GetStartedSection = ({
  onClickHandler,
}: {
  onClickHandler: () => void;
}) => {
  return (
    <div
      className="flex flex-col gap-y-2.5 px-5 py-10 lg:pt-[30px] lg:px-0 lg:pb-0 w-full lg:w-[313px] text-white"
      onClick={onClickHandler}
    >
      <button className="px-10 py-2 flex gap-x-2.5 justify-center items-center rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9]">
        <span className="text-[20px] font-bold">GET STARTED</span>
        <ChevronRightIcon />
      </button>
      <p className="text-xs text-center">
        1-minute quiz for personalized Insights
      </p>
    </div>
  );
};

const FooterSection = ({ isDesktopView }: { isDesktopView: boolean }) => {
  return (
    <div className="flex flex-col gap-y-[19px] lg:gap-y-3 justify-center lg:justify-start  font-medium text-[#ABABAB] lg:pt-[30px] text-center lg:text-start w-[281px] lg:w-full">
      <p className="text-[12px]">
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </p>
      <p
        className="text-[10px] h-[14px] lg:h-auto"
        style={{
          ...(!isDesktopView && {
            fontFamily: "font-nunito",
          }),
        }}
      >
        Fametonic {new Date().getFullYear()} ©All Rights Reserved.
      </p>
    </div>
  );
};
