"use client";
import useResponsive from "@/hooks/useResponsive";

const HeaderDiscountSection = () => {
  const isLgView = useResponsive("lg");
  return (
    <header
      className="p-5 lg:px-[100px] xl:px-[200px] sm:py-2.5 text-center h-[76px] sm:h-[46px] "
      style={{
        ...(isLgView
          ? { background: "linear-gradient(90deg, #fc004e 0%, #10cbe0 100%)" }
          : {
              background:
                "linear-gradient(90deg, #fc004e -2.16%, #10cbe0 115.27%)",
            }),
      }}
    >
      <span className="text-[#00E7F9] text-[16px] lg:text-[20px] xl:text-[22px] font-extrabold ">
        🚀FRESH BEGINNINGS SALE:{" "}
      </span>
      <span className="text-white text-[14px] lg:text-[20px] xl:text-[22px] font-bold ">
        Extra 25% OFF, Limited Spots - start your journey today!
      </span>
    </header>
  );
};

export default HeaderDiscountSection;
