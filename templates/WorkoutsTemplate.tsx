"use client"
import { FULL_DAYS } from '@/constants/constants';
import { useWorkouts } from '@/hooks/useWorkouts';
import NewWorkout from '@/molecules/NewWorkout';
import WorkoutCreated from '@/molecules/WorkoutCreated';
import { CreatingWorkout } from '@/types/types';
import React from 'react'

export default function WorkoutsTemplate() {
  const { saved_workouts } = useWorkouts();

  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Entrenamientos</h1>
      <div className='w-full flex items-start justify-start'>
        <div className='space-y-10'>
          {FULL_DAYS.map((day, index) => {
            return (
              <div key={day} className='flex flex-row gap-x-10'>
                <div className='min-w-32 max-w-32 text-nowrap h-fit text-alternateForeground font-semibold rounded-md'>
                  <p className='text-left flex-nowrap px-2 text-xl bg-primaryColor'>{day}</p>
                </div>
                {saved_workouts() && Array.isArray(saved_workouts()[index]) &&
                  saved_workouts()[index].map((workout: CreatingWorkout, subindex: number) => {
                    return (
                      <WorkoutCreated
                        key={`${workout.date}-${subindex}-workout`}
                        date={workout.date}
                        routine={workout.routine}
                        sets={workout.sets}
                        repetitions={workout.repetitions}
                        weights={workout.weights}
                        times={workout.times}
                        distances={workout.distances}
                      />
                    )
                  })}
                <NewWorkout day={index} />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
