"use client";
import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Sharm from "../../../assets/sharm.jpg";
import { SliderType } from "@/app/types/slider.types";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGlobe } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import 'swiper/css';

const HeaderSlider = ({ data }: { data: SliderType[] }) => {
  console.log(data);
  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='h-[100vh]'
    >
      {data?.map((item, index) => {
        return (
            <SwiperSlide  className="min-h-[100vh] pt-[70px]" key={index}>
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
                className="px-[30px] py-[12px] bg-violet-600 rounded-full text-white text-[14px] font-[500] hover:bg-white hover:text-violet-600 transition-all"
              >
                {item?.go_button}
              </Link>
              <div className="md:px-[60px] px-[30px] py-[30px] bg-white w-[90%] md:w-[80%] lg:rounded-full rounded-[23px] gap-[5px] flex items-center justify-between flex-wrap mt-[20px]">
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
                <Link href={""} className="hover:bg-white hover:text-violet-600 transition-all border border-[rgb(124 58 237)] px-[30px] py-[12px] bg-violet-600 rounded-full text-white text-[14px] font-[500]">{item?.learn_more}</Link>
              </div>
            </div>

            </SwiperSlide>
        );
      })}
      </Swiper>
  );
};

export default HeaderSlider