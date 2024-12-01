import CircleButton from '@/atoms/CircleButton';
import EditIcon from '@/atoms/icons/EditIcon';
import { WorkoutType } from '@/types/types';
import React from 'react';

export default function WorkoutCreated({
  date,
  routine,
  sets,
  repetitions,
  weights,
  times,
  distances,
}: WorkoutType) {

  return (
    <div className='flex flex-col border-2 border-primaryColor'>
      <p className='w-full text-center font-bold text-xl'>{date}</p>
      <div className='flex items-start gap-x-4'>
        <div className='w-full text-nowrap'>
          <p className='font-semibold text-lg'>Rutina</p>
          {routine?.map((item) => {
            return (
              <p key={`${item.id}-${date}-exercise-in-workout`}>{item.name}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Series</p>
          {sets?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-set`}>{item.value}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Repeticiones</p>
          {repetitions?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-repetition`}>{item.value}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Peso</p>
          {weights?.map((item, index) => {
            return (
              <p className='text-nowrap' key={`${item}-${date}-${index}-weight`}>{item.value}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Tiempo</p>
          {times?.map((item, index) => {
            return (
              <p className='text-nowrap' key={`${item}-${date}-${index}-time`}>{item.value}</p>
            )
          })}
        </div>
        <div>
          <p className='font-semibold text-lg'>Distancia</p>
          {distances?.map((item, index) => {
            return (
              <p key={`${item}-${date}-${index}-distance`}>{item.value}</p>
            )
          })}
        </div>
        <CircleButton icon={<EditIcon size={30} />} onClick={() => console.log("edit")} />
      </div>
    </div>
  )
}
