import React from 'react'
import { libre_caslon_display } from '@/lib/fonts'
export const Title = ({title}:{title:string}) => {
  return (
    <div className={` ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8]  w-full h-32 text-7xl`}>
        {title}
    </div>
  )
}
