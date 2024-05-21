"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Sharm from "../../../assets/sharm.jpg";
import { SliderType } from "@/app/types/slider.types";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const HeaderSlider = ({ data }: { data: SliderType[] }) => {
  console.log(data);

  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        pagination: true,
        arrows: true,
        autoplay: true,
        interval: 3000,
        speed: 600,
      }}
      style={{ height: "92vh", width: "100vw" }}
    >
      {data?.map((item, index) => {
        return (
          <SplideSlide className="h-[92vh]" key={index}>
            <Image
              width={1000}
              height={600}
              src={item?.img}
              alt="Slide 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <div className="w-full h-full flex justify-center items-center flex-col relative z-20 gap-[40px]">
              <h1 className="md:text-[20px] text-[15px] font-[500] md:font-[700] text-white">
                {item?.title}
              </h1>
              <h1 className="md:text-[50px] text-[36px] font-[500] md:font-[700] text-white">
                {item?.name}
              </h1>
              <Link
                href="#contacts"
                className="px-[30px] py-[12px] bg-violet-600 rounded-full text-white text-[14px] font-[500]"
              >
                {item?.go_button}
              </Link>
              <div className="md:px-[60px] px-[30px] py-[30px] bg-white w-[90%] md:w-[80%] rounded-[23px] gap-[5px] flex items-center justify-between flex-wrap mt-[20px]">
                <div className="flex justify-center items-center gap-[20px]">
                    <div className="w-[60px] h-[60px] border border-[#7C3AED] rounded-full flex justify-center items-center text-violet-600">
                        <FaUser size={24}/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[15px] text-gray-500">{item?.population_name}</h1>
                        <h1 className="text-[20px] font-[700] text-violet-600">{item?.population_num}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                    <div className="w-[60px] h-[60px] border border-[#7C3AED] rounded-full flex justify-center items-center text-violet-600">
                        <FaGlobe size={24}/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[15px] text-gray-500">{item?.square_name}</h1>
                        <h1 className="text-[20px] font-[700] text-violet-600">{item?.square_num}</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                    <div className="w-[60px] h-[60px] border border-[#7C3AED] rounded-full flex justify-center items-center text-violet-600">
                        <HiHome size={24}/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[15px] text-gray-500">{item?.cost_name}</h1>
                        <h1 className="text-[20px] font-[700] text-violet-600">{item?.cost_num}</h1>
                    </div>
                </div>
                <Link href={""} className="px-[30px] py-[12px] bg-violet-600 rounded-full text-white text-[14px] font-[500]">{item?.learn_more}</Link>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default HeaderSlider;
