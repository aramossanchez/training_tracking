"use client";
import MonthCalendar from '@/molecules/MonthCalendar'
import { GetDates } from '@/services/getDates.service';
import React from 'react'

export default function LandingStatisticsSection() {
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();

  const { allDaysOfTheMonth } = GetDates({ selectedYear: actualYear, selectedMonth: actualMonth });
  return (
    <section>
      <h2>Estadísticas de este mes</h2>
      <MonthCalendar year={actualYear} month={allDaysOfTheMonth} />
    </section>
  )
}
