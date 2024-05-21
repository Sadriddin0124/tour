import Image from 'next/image'
import React from 'react'
import FooterImage from "@/assets/footer.jpg"
import { FooterType } from '@/app/types/slider.types'
const Footer = ({FooterData}: {FooterData: FooterType}) => {
  return (
    <div className='relative flex flex-col w-[100%]'>
      <Image src={FooterImage} alt='Footer' width={1000} height={1000} className='w-[100%] h-[232px] object-cover absolute'/>
      <div className='absolute w-[100%] h-[232px] bg-gradient-to-l from-violet-600 to-violet-600 opacity-80 p-[20px] flex justify-evenly items-center'>
        <div className='flex flex-col'>
            <h1 className='text-[40px] font-[700] text-white'>{FooterData?.title}</h1>
            <p className='text-white text-[20px] font-[600]'>{FooterData?.subtitle}</p>
        </div>
        <button className='py-[12px] px-[30px] bg-violet-600 rounded-full text-[14px] text-white border border-[#fff] hover:text-violet-600 hover:bg-white'>{FooterData?.btn}</button>
      </div>
      <p className='p-[30px] bg-violet-600 text-white text-center mt-[232px]'>{FooterData?.bottom}</p>
    </div>
  )
}

export default Footer
