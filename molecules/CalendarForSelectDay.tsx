import { useGetDates } from '@/hook/useGetDates';
import React from 'react';

interface CalendarForSelectDayProps {
  year: number;
  month: number;
}

export default function CalendarForSelectDay({
  year,
  month,
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

  return (
    <div className='w-[250px]'>
      <div className='w-full flex items-center justify-between'>
      <p className='text-center'>{allDaysOfTheMonth.month}</p>
      <p className='text-center'>{year}</p>
      </div>
      <div className='grid grid-cols-7 border-2 border-primaryColor'>
        {DAYS.map((day) => {
          return (
            <p key={`${day}-calendar-${allDaysOfTheMonth.month}-day`} className='text-center'>{day}</p>
          )
        })}
      </div>
      <div className='grid grid-cols-7 border-2 border-primaryColor border-t-0'>
        {allDaysOfTheMonth.days.map((day, index) => {
          return (
            <div key={day.toDateString()} className="col-span-1 flex justify-center items-center" style={{ gridColumnStart: firstDay(index, day.getDay()) }}>
              <span id={day.getTime().toString()} className='text-center rounded-full border-2 border-transparent hover:border-primaryColor duration-500 ease-out cursor-pointer'>{index < 9 ? `0${index + 1}` : index + 1}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
