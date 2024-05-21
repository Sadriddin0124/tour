import { CountriesType } from '@/app/types/slider.types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

const Countries = ({CountriesData, Countries}: {CountriesData: CountriesType[], Countries: {title: string; subtitle: string}}) => {
  return (
    <div className='w-[100%] flex flex-col items-start px-[20px] lg:px-[100px] py-[30px] gap-[30px]' >
      <h1 className="text-[30px] font-[700]">{Countries?.title}</h1>
      <p className="text-[16px] text-gray-400 max-w-[500px] text-start">{Countries?.subtitle}</p>
      <div className='w-[100%]'>
        {
            CountriesData?.map((item,index)=> {
                return <div key={index} className='w-[100%] xl:w-[80%] flex gap-[20px] py-[40px] items-start flex-col md:flex-row'>
                    <Image src={item?.img} alt={item?.title} width={300} height={200} className='rounded-[23px] w-[100%] md:w-[300px]'/>
                    <div className='flex flex-col justify-between pb-[15px]'>
                        <div className='flex w-[100%] justify-between'>
                            <div>
                                <h1 className='text-[20px] font-[700]'>{item?.title}</h1>
                                <p className='text-[16px] text-gray-400'>{item?.subtitle}</p>
                            </div>
                            <button className='px-[30px] py-[12px] font-[500] bg-violet-600 text-white text-[14px] rounded-full'>{item?.button}</button>
                        </div>
                        <p className='text-[16px] text-gray-400 mt-[20px]'>{item?.desc}</p>
                        <div className='w-[100%] flex justify-between py-[15px] border-t mt-[15px] border-b'>
                            <div className='flex gap-[10px] items-center text-gray-400'>
                               <FaUser size={18}/>
                               <p>{item?.people}</p> 
                            </div>
                            <div className='flex gap-[10px] items-center text-gray-400'>
                               <FaGlobe size={18}/>
                               <p>{item?.square}</p> 
                            </div>
                            <div className='flex gap-[10px] items-center text-gray-400'>
                               <HiHome size={22}/>
                               <p>{item?.price}</p> 
                            </div>
                        </div>
                        <Link href={""} className='flex gap-[10px] items-center text-violet-600 mt-[15px] font-[600] text-[14px] transition-all hover:gap-[15px]'>{item?.footer} <FaArrowRightLong /></Link>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Countries
