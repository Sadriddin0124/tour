"use client"
import { OffersTypes } from "@/app/types/slider.types";
import Image from "next/image";
import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = ({ OffersData, Offers }: { OffersData: OffersTypes[], Offers: {title: string; subtitle: string} }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="tours" className="py-[50px] flex flex-col items-center gap-[20px] bg-white" >
      <h1 className="text-[30px] font-[700]">{Offers?.title}</h1>
      <p className="text-[16px] text-gray-500 max-w-[700px] text-center">{Offers?.subtitle}</p>
      <div className="py-[20px] w-[100%] px-[30px] h-[80vh]  bg-white overflow-hidden">
      <Slider {...settings}>
        {OffersData?.map((item, index) => (
          <div key={index} className="relative w-[360px] min-h-[420px] mx-auto sm:left-[-40px]">
          <Image
            src={item?.img}
            alt={item?.city}
            width={300}
            height={380}
            className="w-[220px] h-[292px] rounded-l-3xl"
          />
          <div className="w-[270px] min-h-[360px] shadow-xl flex flex-col items-start rounded-[23px] absolute left-[30px] z-30 bg-white top-[30px] p-[30px]">
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
            <hr className="w-[100%] h-[2px] bg-gray-500 my-[25px]"/>
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
            <button className="w-[100%] px-[30px] py-[12px] text-[14px] bg-violet-600 text-white rounded-full mt-[25px]">
              {item?.button}
            </button>
          </div>
        </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CardSlider;
