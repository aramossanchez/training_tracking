"use-client";
import { useGetAllDaysOfTheYear } from '@/hook/useGetAllDaysOfTheYear';
import MonthCalendar from '@/molecules/MonthCalendar';
import React from 'react';

export default function Calendar() {
  const year = 2024;

  const { allDaysOfTheYear } = useGetAllDaysOfTheYear({selectedYear: year})

  return (
    <section className='col-span-full grid grid-cols-12 space-y-10 gap-x-10'>
      <h1 className='text-center col-span-full'>{year}</h1>
      {allDaysOfTheYear.map((month) => {
        return (
          <MonthCalendar key={`${month.month}-month-module`} month={month} />
        )
      })}
    </section>
  )
}
