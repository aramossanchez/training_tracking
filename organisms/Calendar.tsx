"use-client";
import { GetDates } from '@/services/getDates.service';
import MonthCalendar from '@/molecules/MonthCalendar';
import React from 'react';

export default function Calendar() {
  const year = new Date().getFullYear();
  const { allDaysOfTheYear } = GetDates({selectedYear: year});

  return (
    <section className='col-span-full grid grid-cols-12 space-y-10 gap-x-10'>
      <h1 className='text-center col-span-full'>{year}</h1>
      {allDaysOfTheYear.map((month) => {
        return (
          <MonthCalendar key={`${month.month}-month-module`} month={month} year={year} />
        )
      })}
    </section>
  )
}
