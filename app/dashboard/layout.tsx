"use client"
import React from 'react';
import { DashNavbar } from '@/components/DashNavbar';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <DashNavbar></DashNavbar>
    {children}
    </>
  )
}

export default layout