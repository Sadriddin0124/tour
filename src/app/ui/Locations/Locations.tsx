"use client";
import { LocationsType } from "@/app/types/slider.types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaExpand } from "react-icons/fa";

const Locations = ({
  Locations,
  LocationsData,
}: {
  LocationsData: LocationsType[];
  Locations: { title: string; subtitle: string };
}) => {
  const [activeImage, setActiveImage] = useState(1);
  const screenSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [data, setData] = useState([])
  let filter = LocationsData?.filter((item,index)=> index < 3)
  const [width, setWidth] = useState(0)
  console.log(width);
  
  useEffect(() => {
    const handleResize = () => {
      screenSizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      let width = screenSizeRef.current.width
      setWidth(width)
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return (
    <div className="w-[100%] px-[10px] py-[40px] sm:px-[40px] flex justify-center items-center flex-col gap-[20px]">
      <h1 className="text-[30px] font-[700]">{Locations?.title}</h1>
      <p className="text-[16px] text-gray-500 max-w-[700px] text-center">
        {Locations?.subtitle}
      </p>
      <div className="w-[100%] flex justify-center gap-[10px] sm:gap-[20px] mt-[50px]">
        {width > 520 ? LocationsData?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                activeImage === item?.id ? "w-[200px] md:w-[400px]" : "w-[60px]"
              } transition-all cursor-pointer h-[400px] bg-slate-500 rounded-[30px] overflow-hidden relative`}
              onClick={()=>setActiveImage(item?.id)}
            >
              <Image
                src={item?.img}
                alt={item?.name}
                width={1000}
                height={1000}
                className="w-[100%] h-[100%] object-cover"
              />
              <div className={`${activeImage === item?.id ? "bottom-[15px] left-[15px]" : " bottom-[10px] left-[10px]"} transition-all absolute flex gap-[10px]`}>
                <button className=" w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center" onClick={()=>setActiveImage(item?.id)}>
                  <FaExpand size={20} className="text-violet-600" />
                </button>
                <div className={activeImage === item?.id ? "flex flex-col" : "hidden"}>
                  <h1 className="text-white text-[20px] font-[700]">{item?.name}</h1>
                  <p className="text-white text-[14px] font-[500]">{item?.population}</p>
                </div>
              </div>
            </div>
          );
        })
      : filter.map((item,index)=> {
        return (
          <div
            key={index}
            className={`${
              activeImage === item?.id ? "w-[160px] ms:w-[220px] md:w-[400px]" : "w-[60px]"
            } transition-all cursor-pointer h-[400px] bg-slate-500 rounded-[15px] md:rounded-[30px] overflow-hidden relative`}
            onClick={()=>setActiveImage(item?.id)}
          >
            <Image
              src={item?.img}
              alt={item?.name}
              width={1000}
              height={1000}
              className={`${activeImage === item?.id ? " scale-100" : "scale-110"} w-[100%] h-[100%] object-cover`}
            />
            <div className={`${activeImage === item?.id ? "bottom-[15px] left-[15px]" : " bottom-[10px] left-[10px]"} transition-all absolute flex gap-[10px]`}>
              <button className=" w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center" onClick={()=>setActiveImage(item?.id)}>
                <FaExpand size={20} className="text-violet-600" />
              </button>
              <div className={activeImage === item?.id ? "flex flex-col" : "hidden"}>
                <h1 className="text-white text-[20px] font-[700]">{item?.name}</h1>
                <p className="text-white text-[14px] font-[500]">{item?.population}</p>
              </div>
            </div>
          </div>
        );
      })
      }
      </div>
    </div>
  );
};

export default Locations;
