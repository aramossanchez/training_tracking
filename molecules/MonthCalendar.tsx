import React from 'react';

interface MonthCalendarProps {
  month: { month: string, days: Date[] }
}

export default function MonthCalendar({
  month
}: MonthCalendarProps) {

  const DAYS = [
    "L",
    "M",
    "X",
    "J",
    "V",
    "S",
    "D",
  ];
  
  const firstDay = (index: number, dayOfTheWeek: number) => {
    const checkedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;
    return index === 0 ? checkedDay : undefined;
  }

  return (
    <div className='col-span-3'>
      <h2 className='text-center py-4'>{month.month}</h2>
      <div className='grid grid-cols-7 border-2 border-primaryColor py-2'>
        {DAYS.map((day) => {
          return (
            <p key={`${day}-calendar-${month.month}-day`} className='text-center important-text'>{day}</p>
          )
        })}
      </div>
      <div className='grid grid-cols-7 border-2 border-primaryColor border-t-0 py-2'>
          {month.days.map((day, index) => {
            return (
              <div key={day.toDateString()} className="my-1 col-span-1 h-10 flex justify-center items-center" style={{ gridColumnStart: firstDay(index, day.getDay()) }}>
                <span id={day.getTime().toString()} className='leading-[2.2rem] h-10 w-10 text-center rounded-full border-2 border-transparent hover:border-primaryColor duration-500 ease-out cursor-pointer'>{index + 1}</span>
              </div>
            )
          })}
        </div>
    </div>
  )
}
