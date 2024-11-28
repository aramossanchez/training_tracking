"use client";
import CircleButton from '@/atoms/CircleButton';
import AddIcon from '@/atoms/icons/AddIcon';
import SaveIcon from '@/atoms/icons/SaveIcon';
import { FULL_DAYS } from '@/constants/constants';
import { useWorkouts } from '@/hooks/useWorkouts';
import WorkoutDone from '@/organisms/WorkoutDone';
import { CreatingWorkout, WorkoutsList } from '@/types/types';
import React, { useEffect, useState } from 'react'

export default function WorkoutsTemplate() {
  const { saved_workouts, storeWorkout } = useWorkouts();
  const [newWorkout, setNewWorkout] = useState<CreatingWorkout | null>(
    {
      date: new Date(),
      routine: ["Dominadas", "Flexiones", "TRX biceps row", "Burpix"],
      sets: ["4", "4", "4", "3"],
      repetitions: ["18 - 16 - 14", "23 - 21 - 19", "20 - 20 - 18", "10 - 10 - 10"],
      weights: ["Libre", "8 kgs", "Libre", "8 kgs"],
      times: ["-", "-", "-", "-"],
      distances: ["-", "-", "-", "-"],
    }
  )
  const [workoutsList, setWorkoutsList] = useState<Record<number, CreatingWorkout[]>>();

  const saveWorkout = (day: number) => {
    if (!saved_workouts && newWorkout) {
      const workoutStructure: WorkoutsList = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      }
      workoutStructure[day] = [newWorkout];
      storeWorkout(JSON.stringify(workoutStructure))
      setWorkoutsList(workoutStructure);
    } else {
      const newWorkoutsList = JSON.parse(saved_workouts as string);
      newWorkoutsList[day].push(newWorkout);
      storeWorkout(JSON.stringify(newWorkoutsList));
      setWorkoutsList(newWorkoutsList);
    }
    // setNewWorkout(null);
  }

  useEffect(() => {
    if (localStorage && saved_workouts) {
      setWorkoutsList(JSON.parse(saved_workouts));
    }
  }, [saved_workouts]);

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
                {workoutsList && Array.isArray(workoutsList[index]) && workoutsList[index].map((workout: CreatingWorkout, subindex: number) => {
                  return (
                    <WorkoutDone
                      key={`${workout.day}-${subindex}-workout`}
                      date={new Date()}
                      routine={workout.routine}
                      sets={workout.sets}
                      repetitions={workout.repetitions}
                      weights={workout.weights}
                      times={workout.times}
                      distances={workout.distances}
                    />
                  )
                })}
                <CircleButton icon={<AddIcon size={30}/>} onClick={() => console.log("addButton")}/>
                <CircleButton icon={<SaveIcon size={30}/>} onClick={() => console.log("saveButton")}/>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
