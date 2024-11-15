import Tab from '@/molecules/Tab'
import React from 'react'

export default function HeaderTemplate() {
  return (
    <header className='w-full min-w-screen max-w-screen pt-2 bg-background'>
      <div className='border-b-2 border-primaryColor flex gap-x-1'>
        <Tab text='Entrenamientos' url='/workouts' />
        <Tab text='Sesiones' url='session-creator' />
        <Tab text='Calendario' url='calendar' />
      </div>

    </header>
  )
}
