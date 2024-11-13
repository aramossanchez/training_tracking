"use-client";
import React from 'react';

export default function Calendar() {
  const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const DAYS = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ]
  const allDaysOfTheYear = [];
  const selectedYear = 2024;
  for (let month = 0; month < 12; month++) {
    const daysCount = new Date(selectedYear, month + 1, 0).getDate();
    const dates = [];
    for (let day = 1; day <= daysCount; day++) {
      dates.push(new Date(selectedYear, month, day))
    }
    allDaysOfTheYear.push({
      month: MONTHS[month],
      days: dates
    });
  }
  console.log(allDaysOfTheYear);

  const firstDay = (index: number, dayOfTheWeek: number) => {
    const checkedDay = dayOfTheWeek === 0 ? 7 : dayOfTheWeek;
    return index === 0 ? checkedDay : undefined;
  }

  return (
    <section className='col-span-full grid grid-cols-12'>
      <div className='col-span-4'>
        {/* <h2 className='text-center'>{MONTHS[month]}</h2> */}
        <div className='grid grid-cols-7 border-2 border-primaryColor'>
          <p className='text-center'>Lunes</p>
          <p className='text-center'>Martes</p>
          <p className='text-center'>Miércoles</p>
          <p className='text-center'>Jueves</p>
          <p className='text-center'>Viernes</p>
          <p className='text-center'>Sábado</p>
          <p className='text-center'>Domingo</p>
        </div>
        {/* <div className='grid grid-cols-7'>
          {dates.map((day, index) => {
            return (
              <div key={day.toDateString()} className="space-x-2 flex justify-center" style={{ gridColumnStart: firstDay(index, day.getDay()) }}>
                <span>{index + 1}</span>
              </div>
            )
          })}
        </div> */}
      </div>
    </section>
  )
}
