"use client"
import { ReservationType } from "@/app/types/slider.types";
import axios from "axios";
import React, { useState } from "react";

const Reservation = ({
  ReservationData,
}: {
  ReservationData: ReservationType;
}) => {
  const [status, setStatus] = useState('');
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [guests, setGuests] = useState("")
  const [date, setDate] = useState("")
  const [destination, setDestination] = useState("")
  const [visaSupport, setVisaSupport] = useState("")
  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    let message = {
      name,
      number,
      guests,
      visaSupport,
      date,
      destination
    }
    setStatus('Sending...');
  const token = "6760426179:AAFDNf2L7dlpw_AMViU2xF4tMoYa5p90L_k";
  const chatId = "5575104582";
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
      });
      console.log(response)
    } catch (error) {
      console.log(error);
      
    }
  };
  const id = process.env.TELEGRAM_CHAT_ID
  console.log(id);
  return (
    <div className="w-[100%] flex justify-center pb-[50px]">
      <div className="w-[90%] sm:w-[80%] p-[20px] sm:p-[50px] flex flex-col items-center bg-gray-100 gap-[20px] rounded-b-[23px]">
        <h1 className="text-[30px] font-[700]">{ReservationData?.title}</h1>
        <form onSubmit={sendMessage} className="w-[100%] flex justify-center flex-col items-center gap-[30px]">
          <div className=" flex gap-[20px] w-[100%] flex-col md:flex-row">
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.name}
              </label>
              <input
                type="text"
                className="w-[100%] h-[46px] px-[20px] border rounded-full"
                placeholder="Ex. John Smith"
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex gap-[20px] w-[100%] flex-col md:flex-row">
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.guests}
              </label>
              <select
                className="w-[100%] h-[46px] px-[20px] border rounded-full" onChange={(e)=>setGuests(e.target.value)}>
                    <option value="Ex. 3 or 4 or 5">Ex. 3 or 4 or 5</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                </select>
            </div>
            <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.date}
              </label>
              <input
                type="date"
                className="w-[100%] h-[46px] px-[20px] border rounded-full text-gray-400"
                onChange={(e)=>setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] w-[100%]">
              <label className="text-[16px] text-gray-400">
                {ReservationData?.destination}
              </label>
              <select
                className="w-[100%] h-[46px] px-[20px] border rounded-full" onChange={(e)=>setDestination(e.target.value)}>
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
                className="w-[100%] h-[46px] px-[20px] border rounded-full" onChange={(e)=>setVisaSupport(e.target.value)}>
                    <option value="">Country</option>
                    {
                        ReservationData?.countries?.map((item,index)=> {
                            return <option value={item} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
            <button type="submit" className="hover:bg-white hover:text-violet-600 transition-all border border-[rgb(124 58 237)] w-[100%] h-[46px] bg-violet-600 rounded-full text-white text-[14px] font-[500]">{ReservationData?.btn}</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
