"use client";

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "../icons";
import { contentList, getScaledSize, imgProperties } from "../utils";
import { useEffect, useState } from "react";
import { useResponsivePositioningValue } from "@/hooks/useResponsivePositioningValue";

const HeroSection = () => {
  const [isLgView, isXsView, descLeftValue, imgRightValue, imgTopValue] = [
    useResponsive("lg"),
    useResponsive("xs"),
    useResponsivePositioningValue(235),
    useResponsivePositioningValue(101),
    useResponsivePositioningValue(80, "increase"),
  ];

  const [size, setSize] = useState(
    typeof window !== "undefined"
      ? getScaledSize(window.innerWidth)
      : { width: 0, height: 0 }
  );

  useEffect(() => {
    const updateSize = () => {
      setSize(getScaledSize(window.innerWidth));
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (size.width === 0 || size.height === 0) return null;

  const { width, height, img } = imgProperties(isLgView);

  const onClickHandler = () => {};

  return (
    <div className="flex flex-col lg:flex-row-reverse relative">
      <div
        className={twMerge("flex justify-center lg:absolute")}
        style={{
          ...(isLgView && {
            right: `${imgRightValue}px`,
            top: `${imgTopValue}px`,
          }),
        }}
      >
        <Image
          src={img}
          width={isLgView ? size?.width : width}
          height={isLgView ? size?.height : height}
          alt=""
          className={twMerge(isLgView && "object-cover")}
        />
      </div>

      <div
        className="flex flex-col absolute top-[342px] lg:top-[166px]  left-1/2 -translate-x-1/2 w-full lg:left-auto lg:translate-x-0 lg:w-[516px]"
        style={{ ...(isLgView && { left: `${descLeftValue}px` }) }}
      >
        <div className="flex flex-col gap-y-[22px] lg:gap-y-4 px-5 pt-5 lg:p-0">
          <div
            className=" text-center lg:text-start font-extrabold lg:font-bold text-[25px] lg:text-[32px] xl:text-[35px] "
            style={{
              fontFamily: "var(--font-urbanist), sans-serif",
            }}
          >
            <p className="text-white ">
              <span className="block sm:inline">Want to Turn Social Media</span>
              <span className="block sm:inline">
                {" "}
                Into a Profitable Career?
              </span>
            </p>

            <p className="text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
              Discover your way to success with Fametonic:
            </p>
          </div>
          <ul className="flex flex-col items-start sm:items-center lg:items-start gap-y-2.5 lg:gap-y-[13px]">
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

          {!isLgView && (
            <div className="flex justify-center">
              <FooterSection isLgView={isLgView} />
            </div>
          )}
        </div>
        {isLgView && (
          <div className="flex flex-col items-start">
            <GetStartedSection onClickHandler={onClickHandler} />
            <FooterSection isLgView={isLgView} />
          </div>
        )}
      </div>

      {!isLgView && (
        <div
          className="absolute left-0 top-[785px] sm:top-[620px] w-full "
          style={{
            ...(isXsView && {
              top: "700px",
            }),
          }}
        >
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
      className="flex flex-col gap-y-2.5 px-5 py-10 sm:px-20 md:px-40 lg:pt-[30px] lg:px-0 lg:pb-0 w-full  lg:w-[313px] text-white"
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

const FooterSection = ({ isLgView }: { isLgView: boolean }) => {
  return (
    <div className="flex flex-col gap-y-[19px] lg:gap-y-3 justify-center lg:justify-start  font-medium text-[#ABABAB] lg:pt-[30px] text-center lg:text-start w-[281px] sm:w-full">
      <p className="text-[12px]">
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </p>
      <p
        className="text-[10px] h-[14px] lg:h-auto"
        style={{
          ...(!isLgView && {
            fontFamily: "font-nunito",
          }),
        }}
      >
        Fametonic {new Date().getFullYear()} ©All Rights Reserved.
      </p>
    </div>
  );
};
