import { ReservationType } from "@/app/types/slider.types";
import React from "react";

const Reservation = ({
  ReservationData,
}: {
  ReservationData: ReservationType;
}) => {
  return (
    <div className="w-[100%] flex justify-center pb-[50px]">
      <div className="w-[90%] sm:w-[80%] p-[50px] flex flex-col items-center bg-gray-100 gap-[20px] rounded-b-[23px]">
        <h1 className="text-[30px] font-[700]">{ReservationData?.title}</h1>
        <form className="w-[100%] flex justify-center flex-col items-center gap-[30px]">
          <div className=" flex gap-[20px] w-[100%]">
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.name}
              </label>
              <input
                type="text"
                className="w-[100%] h-[46px] px-[20px] border rounded-full"
                placeholder="Ex. John Smith"
              />
            </div>
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.phone}
              </label>
              <input
                type="text"
                className="w-[100%] h-[46px] px-[20px] border rounded-full"
                placeholder="Ex. +99899 999 99 99"
              />
            </div>
          </div>
          <div className=" flex gap-[20px] w-[100%]">
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.guests}
              </label>
              <select
                className="w-[100%] h-[46px] px-[20px] border rounded-full">
                    <option value="Ex. 3 or 4 or 5">Ex. 3 or 4 or 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                </select>
            </div>
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.phone}
              </label>
              <input
                type="date"
                className="w-[100%] h-[46px] px-[20px] border rounded-full text-gray-400"
                placeholder="Ex. +99899 999 99 99"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.destination}
              </label>
              <select
                className="w-[100%] h-[46px] px-[20px] border rounded-full">
                    {
                        ReservationData?.cities?.map((item,index)=> {
                            return <option value={item} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.country}
              </label>
              <select
                className="w-[100%] h-[46px] px-[20px] border rounded-full">
                    <option value="">Country</option>
                    {
                        ReservationData?.countries?.map((item,index)=> {
                            return <option value={item} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
            <button className="w-[100%] h-[46px] bg-violet-600 rounded-full text-white text-[14px] font-[500]">{ReservationData?.btn}</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
