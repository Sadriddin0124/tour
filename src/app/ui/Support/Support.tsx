import { OffersTypes } from "@/app/types/slider.types";
import Image from "next/image";
import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const Support = ({ OffersData, Offers }: { OffersData: OffersTypes[], Offers: {title: string; subtitle: string} }) => {
  return (
    <div className="w-[100%] flex flex-col items-center py-[50px] gap-[20px]">
      <h1 className="text-[30px] font-[700]">{Offers?.title}</h1>
      <p className="text-[16px] text-gray-500 max-w-[700px] text-center">{Offers?.subtitle}</p>
      <div className="px-[20px] py-[50px] flex gap-[30px]">
      {OffersData?.map((item, index) => {
        return (
          <div key={index} className="relative w-[360px] min-h-[420px]">
            <Image
              src={item?.img}
              alt={item?.city}
              width={300}
              height={380}
              className="w-[220px] h-[146px] rounded-l-3xl"
            />
            <div className="w-[270px] min-h-[360px] shadow-xl flex flex-col items-start rounded-[23px] absolute right-0 z-30 bg-white top-[30px] p-[30px]">
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
        );
      })}
    </div>
    </div>
  );
};

export default Support;
