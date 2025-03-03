import CircleButton from '@/atoms/CircleButton'
import AddIcon from '@/atoms/icons/AddIcon'
import SaveIcon from '@/atoms/icons/SaveIcon'
import SearchIcon from '@/atoms/icons/SearchIcon';
import { useRoutines } from '@/hooks/useRoutines';
import { useWorkouts } from '@/hooks/useWorkouts';
import CalendarForSelectDay from '@/molecules/CalendarForSelectDay';
import { CreatingRoutine, Exercise, WorkoutType, WorkoutsList } from '@/types/types';
import React, { useState } from 'react'

export default function NewWorkout({ day }: { day: number }) {
  const { saved_workouts, storeWorkout } = useWorkouts();

  const checkWorkoutEmptyFields = () => {
    const workoutToCheck = structuredClone(newWorkout);
    const keys = Object.keys(workoutToCheck) as (keyof WorkoutType)[];

    for (const key of keys) {
      let isEmpty: boolean = true;
      if (Array.isArray(workoutToCheck[key])) {
        workoutToCheck[key].map((item) => {
          if (item.value !== "" && item.value !== "-") {
            isEmpty = false;
          }
        });
        if (isEmpty) {
          delete workoutToCheck[key];
        }
      }
    }
    return workoutToCheck;
  }

  const saveWorkout = () => {
    if (!saved_workouts() && newWorkout) {
      const workoutStructure: WorkoutsList = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      }
      const checkedWorkout = checkWorkoutEmptyFields();
      workoutStructure[day] = [checkedWorkout];
      storeWorkout(workoutStructure);
    } else {
      const checkedWorkout = checkWorkoutEmptyFields();
      const newWorkoutsList = saved_workouts();
      newWorkoutsList[day].push(checkedWorkout);
      storeWorkout(newWorkoutsList);
      // setNewWorkout(null);
    }
  }
  const { saved_routines } = useRoutines();
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();
  const actualDay = new Date().getDay();
  const [creatingNewRoutine, setNewRoutine] = useState<boolean>(false);
  const [selectingDay, setSelectingDay] = useState<boolean>(false);
  const initialWorkout = {
    id: crypto.randomUUID(),
    day: actualDay,
    month: 2,
    year: 2023,
    date: "",
    routine: [],
    sets: [],
    repetitions: [],
    weights: [],
    times: [],
    distances: []
  };
  const [newWorkout, setNewWorkout] = useState<WorkoutType>(initialWorkout);

  const createWorkoutRows = (routine: Exercise[]) => {
    const updatedValues = routine.map(() => ({
      id: crypto.randomUUID(),
      value: "-"
    }));
    return updatedValues;
  };

  const editNewWorkout = (field: string, value: string | Exercise[], id?: string) => {
    setNewWorkout((prevWorkout) => {
      const editingWorkout = structuredClone(prevWorkout);
      if (field === "routine") {
        console.log(value)
        editingWorkout.routine = value as Exercise[];
        editingWorkout.sets = createWorkoutRows(value as Exercise[]);
        editingWorkout.repetitions = createWorkoutRows(value as Exercise[]);
        editingWorkout.weights = createWorkoutRows(value as Exercise[]);
        editingWorkout.times = createWorkoutRows(value as Exercise[]);
        editingWorkout.distances = createWorkoutRows(value as Exercise[]);
      }
      if (id !== undefined) {
        const itemIndex = editingWorkout?.[field].findIndex((item) => item.id === id);
        editingWorkout[field][itemIndex].value = value;
      } else {
        editingWorkout[field] = value;
      }
      return editingWorkout;
    });
  }

  return (
    <>
      <CircleButton icon={<AddIcon size={30} />} onClick={() => setNewRoutine(true)} />
      {creatingNewRoutine &&
        <div className='flex flex-col border-2 border-primaryColor'>
          <div className='relative'>
            <p>Selecciona una fecha</p>
            <CircleButton icon={<SearchIcon size={30} />} onClick={() => setSelectingDay(true)} />
            {selectingDay &&
              <div className='absolute'>
                <CalendarForSelectDay
                  year={actualYear}
                  month={actualMonth}
                  selectDay={(e) => editNewWorkout("date", e)}
                  selectDayNumber={(e) => editNewWorkout("day", e)}
                  selectMonth={(e) => editNewWorkout("month", e)}
                  selectYear={(e) => editNewWorkout("year", e)}
                  closeCalendar={setSelectingDay}
                />
              </div>
            }
          </div>
          <p className='w-full text-center font-bold text-xl'>{newWorkout.date}</p>
          <select name="" id="" onChange={(e) => editNewWorkout("routine", JSON.parse(e.target.value).routine)}>
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
              {newWorkout.routine?.map((item) => {
                return (
                  <p key={`${item.id}-${newWorkout.id}-exercise-in-workout`} className='text-nowrap'>{item.name}</p>
                )
              })}
            </div>
            {newWorkout?.sets &&
              <div>
                <p className='font-semibold text-lg'>Series</p>
                {newWorkout.sets?.map((item) => {
                  return (
                    <input key={`${item.id}-set`} type="text" value={item.value} onChange={(e) => editNewWorkout("sets", e.target.value, item.id)} />
                  )
                })}
              </div>
            }
            {newWorkout?.repetitions &&
              <div>
                <p className='font-semibold text-lg'>Repeticiones</p>
                {newWorkout.repetitions?.map((item) => {
                  return (
                    <input key={`${item.id}-repetition`} type="text" value={item.value} onChange={(e) => editNewWorkout("repetitions", e.target.value, item.id)} />
                  )
                })}
              </div>
            }
            {newWorkout?.weights &&
              <div>
                <p className='font-semibold text-lg'>Peso</p>
                {newWorkout.weights?.map((item) => {
                  return (
                    <input key={`${item.id}-weight`} type="text" value={item.value} onChange={(e) => editNewWorkout("weights", e.target.value, item.id)} />
                  )
                })}
              </div>
            }
            {newWorkout?.times &&
              <div>
                <p className='font-semibold text-lg'>Tiempo</p>
                {newWorkout.times?.map((item) => {
                  return (
                    <input key={`${item.id}-time`} type="text" value={item.value} onChange={(e) => editNewWorkout("times", e.target.value, item.id)} />
                  )
                })}
              </div>
            }
            {newWorkout?.distances &&
              <div>
                <p className='font-semibold text-lg'>Distancia</p>
                {newWorkout.distances?.map((item) => {
                  return (
                    <input key={`${item.id}-distance`} type="text" value={item.value} onChange={(e) => editNewWorkout("distances", e.target.value, item.id)} />
                  )
                })}
              </div>
            }
          </div>
        </div>
      }
      <CircleButton icon={<SaveIcon size={30} />} onClick={() => saveWorkout()} />
    </>
  )
}
