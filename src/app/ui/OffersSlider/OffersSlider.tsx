"use client";
import { OffersTypes } from "@/app/types/slider.types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCarRear } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import "@splidejs/splide/dist/css/splide.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const OffersSlider = ({
  OffersData,
  Offers,
}: {
  OffersData: OffersTypes[];
  Offers: { title: string; subtitle: string };
}) => {
  const screenSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const SlideChange = () => {
    screenSizeRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    let width = screenSizeRef.current.width;
    width < 1200 && width > 800
      ? setSlideNum(2)
      : width < 800
      ? setSlideNum(1)
      : setSlideNum(3);
  };
  const [slideNum, setSlideNum] = useState(3);
  return (
    <div className="w-[100%]  py-[50px] gap-[20px] px-[10px]">
      <h1 className="text-[30px] font-[700] w-[100%] text-center">
        {Offers?.title}
      </h1>
      <p className="text-[16px] text-gray-500  w-[100%] mt-[30px] text-center">
        {Offers?.subtitle}
      </p>
      <Swiper
        spaceBetween={1}
        loop={true}
        slidesPerView={slideNum}
        autoplay={true}
        onSlideChange={SlideChange}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        className="pl-[20px] w-[95%] h-[100vh]"
      >
        {OffersData?.map((item, index) => {
          return (
            <SwiperSlide
              className="min-h-[90vh] pt-[70px] slide__item"
              key={index}
            >
              <div
                key={index}
                className="relative w-[320px] sm:w-[370px] min-h-[420px] mx-auto sm:left-[-40px]"
              >
                <Image
                  src={item?.img}
                  alt={item?.city}
                  width={300}
                  height={380}
                  className="w-[220px] h-[292px] rounded-l-3xl"
                />
                <div className="w-[270px] min-h-[360px] shadow-xl flex flex-col items-start rounded-[23px] absolute left-[30px] md:left-[25%] z-30 bg-white top-[30px] p-[30px]">
                  <div className="w-[100%] flex justify-between">
                    <h1 className="text-[20px] font-[700]">{item?.city}</h1>
                    <h1 className="text-violet-600 text-[20px] font-[700]">
                      {item?.price}
                    </h1>
                  </div>
                  <div className="flex w-[100%] justify-between text-gray-500">
                    <p>{item?.subtitle1}</p>
                    <p>{item?.subtitle2}</p>
                  </div>
                  <hr className="w-[100%] h-[2px] bg-gray-500 my-[25px]" />
                  <h1 className="text-[16px] font-[500] mb-[10px]">
                    {item?.desc_title}
                  </h1>
                  <p className="flex items-center text-[14px] my-[5px] gap-[5px] text-gray-500">
                    <FaCarRear />
                    {item?.desc1}
                  </p>
                  <p className="flex items-center text-[14px] my-[5px] gap-[5px] text-gray-500">
                    <FaPlane />
                    {item?.desc2}
                  </p>
                  <p className="flex items-center text-[14px] my-[5px] gap-[5px] text-gray-500">
                    <FaBuilding />
                    {item?.desc3}
                  </p>
                  <button className="hover:bg-white hover:text-violet-600 transition-all border border-[rgb(124 58 237)] w-[100%] px-[30px] py-[12px] text-[14px] bg-violet-600 text-white rounded-full mt-[25px]">
                    {item?.button}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default OffersSlider;
