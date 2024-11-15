import SessionDone from '@/organisms/SessionDone'
import React from 'react'

export default function WorkoutsTemplate() {
  const DAYS = [
    "Día 1",
    "Día 2",
    "Día 3",
    "Día 4",
    "Día 5",
    "Día 6",
    "Día 7",
  ]
  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Entrenamientos</h1>
      <div className='w-full flex items-start justify-start'>
        <div className='space-y-10'>
          {DAYS.map((day) => {
            return (
              <div key={day} className='flex flex-row items-stretch'>
                <div className='sticky w-full text-nowrap flex flex-col justify-center border-r-2 border-primaryColor'>
                  <span className='w-full text-center flex-nowrap px-2'>{day}</span>
                </div>
                <SessionDone />
                <SessionDone />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
