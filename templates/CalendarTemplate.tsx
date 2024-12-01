import Calendar from '@/organisms/Calendar'
import React from 'react'

export default function CalendarTemplate() {
  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Calendario</h1>
      <Calendar />
    </main>
  )
}
