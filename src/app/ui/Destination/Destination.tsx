import { DestinationType } from '@/app/types/slider.types'
import Image from 'next/image';
import React from 'react'

const Destination = ({DestinationData, Destination}: {DestinationData: DestinationType[], Destination: {title: string; subtitle: string}}) => {
  return (
    <div id='about' className='w-[100%] flex flex-col items-start px-[20px] lg:px-[100px] border-t py-[30px] gap-[30px]' >
      <h1 className="text-[30px] font-[700]">{Destination?.title}</h1>
      <p className="text-[16px] text-gray-500 max-w-[500px] text-start">{Destination?.subtitle}</p>
      <div className='w-[100%]'>
        {
            DestinationData?.map((item,index)=> {
                return <div key={index} className='w-[100%] xl:w-[80%] flex gap-[20px] py-[40px] border-b items-start md:flex-row flex-col'>
                    <Image src={item?.img} alt={item?.title} width={300} height={200} className='rounded-[23px] md:w-[300px] w-[100%]'/>
                    <div className='flex flex-col justify-between'>
                        <div className='flex w-[100%] justify-between flex-wrap gap-[10px] mb-[20px] items-start'>
                            <div>
                                <h1 className='text-[20px] font-[700]'>{item?.title}</h1>
                                <p className='text-[16px] text-gray-500'>{item?.subtitle}</p>
                            </div>
                            <button className='hover:bg-white hover:text-violet-600 transition-all border border-[rgb(124 58 237)] px-[30px] whitespace-nowrap py-[12px] font-[500] bg-violet-600 text-white text-[14px] rounded-full'>{item?.button}</button>
                        </div>
                        <p className='text-[16px] text-gray-500'>{item?.desc}</p>
                    </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Destination
