"use client";
import CalendarIcon from '@/atoms/icons/CalendarIcon';
import RutineIcon from '@/atoms/icons/RutineIcon';
import TrainingIcon from '@/atoms/icons/TrainingIcon';
import { useNavbarState } from '@/context/navbarState';
import Tab from '@/molecules/Tab';
import Image from 'next/image';
import React from 'react';

export default function NavbarTemplate() {
  const { openedNavbar } = useNavbarState();
  const styleNavbar = openedNavbar ? "px-5" : "px-2"

  return (
    <div className="h-screen bg-backgroundSoft py-4 space-y-10 shadow-2xl shadow-shadowColor z-50">
      <div className={`${styleNavbar} flex items-center gap-x-8 duration-200`}>
        <div className='flex items-center gap-x-2'>
          <Image
            alt='Logo'
            src={"/images/logo.webp"}
            width={40}
            height={40}
            className='rounded-full'
          />
          {openedNavbar && <p className='font-bold text-3xl'>Regisfit</p>}
        </div>
      </div>
      <nav className='flex flex-col divide-y-[1px] divide-borderColor'>
        <Tab text='Entrenamientos' url='/workouts' icon={<TrainingIcon />} />
        <Tab text='Calendario' url='calendar' icon={<CalendarIcon />} />
        <Tab text='Rutinas' url='routine-creator' icon={<RutineIcon />} />
      </nav>

    </div>
  )
}
