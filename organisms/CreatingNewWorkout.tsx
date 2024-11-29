import CircleButton from '@/atoms/CircleButton'
import AddIcon from '@/atoms/icons/AddIcon'
import SaveIcon from '@/atoms/icons/SaveIcon'
import { useRoutines } from '@/hooks/useRoutines';
import { CreatingRoutine } from '@/types/types';
import React, { useState } from 'react'

export default function CreatingNewWorkout() {
  const { saved_routines } = useRoutines();
  const [selectedRoutine, setSelectedRoutine] = useState([]);
  const [creatingNewRoutine, setCreatingNewRoutine] = useState<boolean>(false);
  const initialWorkout = {
    id: crypto.randomUUID(),
    day: 12,
    month: "Mayo",
    year: 2024,
    routine: selectedRoutine?.routine,
    sets: selectedRoutine?.routine?.map(() => {
      return {
        id: crypto.randomUUID(),
        value: "-"
      }
    }),
    repetitions: selectedRoutine?.routine?.map(() => {
      return {
        id: crypto.randomUUID(),
        value: "-"
      }
    }),
    weights: selectedRoutine?.routine?.map(() => {
      return {
        id: crypto.randomUUID(),
        value: "-"
      }
    }),
    times: selectedRoutine?.routine?.map(() => {
      return {
        id: crypto.randomUUID(),
        value: "-"
      }
    }),
    distances: selectedRoutine?.routine?.map(() => {
      return {
        id: crypto.randomUUID(),
        value: "-"
      }
    })
  }
  const [newWorkout, setNewWorkout] = useState(initialWorkout);

  return (
    <>
      <CircleButton icon={<AddIcon size={30} />} onClick={() => setCreatingNewRoutine(true)} />
      {creatingNewRoutine &&
        <div className='flex flex-col border-2 border-primaryColor'>
          <p className='w-full text-center font-bold text-xl'>{newWorkout.day} de {newWorkout.month} - {newWorkout.year}</p>
          <select name="" id="" onChange={(e) => setSelectedRoutine(JSON.parse(e.target.value))}>
            <option>Selecciona una rutina</option>
            {saved_routines()?.map((routine: CreatingRoutine) => {
              return (
                <option key={routine.id} value={JSON.stringify(routine)}>{routine.name}</option>
              )
            })}
          </select>
          <div className='flex items-start gap-x-4'>
            <div>
              <p className='font-semibold text-lg'>Rutina</p>
              {initialWorkout.routine?.map((item: CreatingRoutine) => {
                return (
                  <p key={`${item.id}-${initialWorkout.id}-exercise-in-workout`} className='text-nowrap'>{item.name}</p>
                )
              })}
            </div>
            <div>
              <p className='font-semibold text-lg'>Series</p>
              {initialWorkout.sets?.map((item) => {
                return (
                  <p key={`${item.id}-set`}>{item.value}</p>
                )
              })}
            </div>
            <div>
              <p className='font-semibold text-lg'>Repeticiones</p>
              {initialWorkout.repetitions?.map((item) => {
                return (
                  <p key={`${item.id}-repetition`}>{item.value}</p>
                )
              })}
            </div>
            <div>
              <p className='font-semibold text-lg'>Peso</p>
              {initialWorkout.weights?.map((item) => {
                return (
                  <p className='text-nowrap' key={`${item.id}-weight`}>{item.value}</p>
                )
              })}
            </div>
            <div>
              <p className='font-semibold text-lg'>Tiempo</p>
              {initialWorkout.times?.map((item) => {
                return (
                  <p className='text-nowrap' key={`${item.id}-time`}>{item.value}</p>
                )
              })}
            </div>
            <div>
              <p className='font-semibold text-lg'>Distancia</p>
              {initialWorkout.distances?.map((item) => {
                return (
                  <p key={`${item.id}-distance`}>{item.value}</p>
                )
              })}
            </div>
          </div>
        </div>
      }
      <CircleButton icon={<SaveIcon size={30} />} onClick={() => console.log("saveButton")} />
    </>
  )
}
