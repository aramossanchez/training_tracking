"use client";
import { useGetDates } from '@/hook/useGetDates';
import React from 'react';

interface CalendarForSelectDayProps {
  year: number;
  month: number;
  selectDay: (date: string) => string;
  closeCalendar: (state: boolean) => void;
}

export default function CalendarForSelectDay({
  year,
  month,
  selectDay,
  closeCalendar,
}: CalendarForSelectDayProps) {

  const DAYS = [
    "L",
    "M",
    "X",
    "J",
    "V",
    "S",
    "D",
  ];

  const { allDaysOfTheMonth } = useGetDates({
    selectedYear: year,
    selectedMonth: month
  });

  const firstDay = (index: number, dayOfTheWeek: number) => {
    const checkedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;
    return index === 0 ? checkedDay : undefined;
  }

  const clickOnDay = (date: string) => {
    selectDay(date);
    closeCalendar(false);
  }

  return (
    <div className='w-[250px] bg-background border-2 border-primaryColor rounded-lg'>
      <div className='w-full flex items-center justify-between px-1'>
        <p className='text-center'>{allDaysOfTheMonth.month}</p>
        <p className='text-center'>{year}</p>
      </div>
      <div className='grid grid-cols-7 border-2 border-primaryColor border-r-0 border-l-0'>
        {DAYS.map((day) => {
          return (
            <p
              key={`${day}-calendar-${allDaysOfTheMonth.month}-day`}
              className='text-center'
            >
              {day}
            </p>
          )
        })}
      </div>
      <div className='grid grid-cols-7'>
        {allDaysOfTheMonth.days.map((day, index) => {
          return (
            <div key={day.toDateString()} className="col-span-1 flex justify-center items-center" style={{ gridColumnStart: firstDay(index, day.getDay()) }}>
              <span
              id={day.getTime().toString()}
              className='text-center rounded-full border-2 border-transparent hover:border-primaryColor duration-500 ease-out cursor-pointer'
              onClick={() => clickOnDay(`${index < 9 ? `0${index + 1}` : index + 1} de ${allDaysOfTheMonth.month} - ${year}`)}
              >
                {index < 9 ? `0${index + 1}` : index + 1}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
