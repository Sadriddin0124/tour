import { ContactsType } from '@/app/types/slider.types'
import React from 'react'
import ContactsImage from "@/assets/contacts.jpg"
import Image from 'next/image';
import Link from 'next/link';
const Contacts = ({ContactsData, Contacts}: {ContactsData: ContactsType[]; Contacts: {title: string, top: string, btn: string}}) => {
  return (
    <div id='contacts' className='w-[100%] min-h-[120vh] relative'>
      <Image src={ContactsImage} alt='Contacts' width={1000} height={1000} className='w-[100%] h-[100vh] absolute z-0'/>
      <div className='w-[100%] h-[70vh] flex flex-col justify-end items-center relative z-20 text-white gap-[50px]'>
        <h1 className='text-center text-[20px] font-[500] relative'>{Contacts?.top} <span className=' left-[35%] top-[60px] absolute w-[100px] h-[2px] bg-gray-400'></span></h1>
        <h1 className='text-center text-[50px] font-[700]'>{Contacts?.title}</h1>
        <button className='px-[30px] py-[12px] bg-white text-violet-600 rounded-full text-[14px] font-[500] hover:bg-violet-600 hover:text-white transition-all'>{Contacts?.btn}</button>
      </div>
        <div className='relative z-20 w-[100%] flex justify-center mt-[110px] gap-[25px] flex-wrap'>
            {
                ContactsData?.map((item,index)=> {
                    return <div key={index} className='w-[300px] min-h-[200px] p-[25px] bg-white shadow-lg rounded-[23px] flex justify-center items-center flex-col gap-[10px]'>
                        <div className='w-[60px] h-[60px] bg-gray-200 rounded-full flex justify-center items-center text-violet-600'>{item?.icon}</div>
                        <h1 className='text-[20px] font-[700] text-center'>{item?.title}</h1>
                        <Link href="#" className='text-[16px] font-[400] text-center text-violet-600'>{item?.desc}</Link>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Contacts
