import TrainingIcon from '@/atoms/TrainingIcon'
import Tab from '@/molecules/Tab'
import Image from 'next/image'
import React from 'react'

export default function NavbarTemplate() {
  return (
    <nav className='h-screen w-fit bg-backgroundSoft py-4 space-y-10 rounded-br-3xl rounded-tr-3xl shadow-2xl shadow-shadowColor z-50'>
      <div className='flex items-center gap-x-2 px-8'>
        <Image
          alt='Logo'
          src={"/images/logo.webp"}
          width={40}
          height={40}
          className='rounded-full'
        />
        <p className='font-bold text-3xl'>Regisfit</p>
      </div>
      <div className='flex flex-col divide-y-[1px] divide-borderColor'>
        <Tab text='Entrenamientos' url='/workouts' icon={<TrainingIcon />} />
        <Tab text='Calendario' url='calendar' />
        <Tab text='Rutinas' url='routine-creator' />
      </div>

    </nav>
  )
}
