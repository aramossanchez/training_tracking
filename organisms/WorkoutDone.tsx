import { MONTHS } from '@/constants/constants';
import React from 'react';

interface WorkoutDoneProps {
  date: Date;
  routine: string[];
  sets?: string[];
  repetitions?: string[],
  weights?: string[],
  times?: string[]
  distances?: string[]
}

export default function WorkoutDone({
  date,
  routine,
  sets,
  repetitions,
  weights,
  times,
  distances,
}: WorkoutDoneProps) {
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className='flex flex-col border-2 border-primaryColor'>
      <p className='w-full text-center font-bold text-xl'>{day} de {month} - {year}</p>
      <div className='flex items-start gap-x-4'>
        <div>
          <p className='font-semibold text-lg'>Rutina</p>
          {routine?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-exercise`}>{item}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Series</p>
          {sets?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-set`}>{item}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Repeticiones</p>
          {repetitions?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-repetition`}>{item}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Peso</p>
          {weights?.map((item, index) => {
            return (
              <p className='text-nowrap' key={`${item}-${date}-${index}-weight`}>{item}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Tiempo</p>
          {times?.map((item, index) => {
            return (
              <p className='text-nowrap' key={`${item}-${date}-${index}-time`}>{item}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Distancia</p>
          {distances?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-distance`}>{item}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
