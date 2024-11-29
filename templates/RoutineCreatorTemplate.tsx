"use client";
import CircleButton from '@/atoms/CircleButton';
import EditIcon from '@/atoms/icons/EditIcon';
import SaveIcon from '@/atoms/icons/SaveIcon';
import TrashIcon from '@/atoms/icons/TrashIcon';
import { useRoutines } from '@/hooks/useRoutines';
import CreatingNewRoutine from '@/organisms/CreatingNewRoutine';
import { CreatingRoutine } from '@/types/types';
import React, { useEffect, useState } from 'react';

export default function RoutineCreatorTemplate() {
  const { saved_routines, storeRoutine } = useRoutines();
  const [routinesList, setRoutinesList] = useState<CreatingRoutine[] | null>();

  // const saveRoutine = () => {
  //   if (!saved_routines && newRoutine) {
  //     storeRoutine(JSON.stringify([newRoutine]))
  //     setRoutinesList([newRoutine]);
  //   } else {
  //     const newRoutinesList = JSON.parse(saved_routines as string);
  //     newRoutinesList.push(newRoutine);
  //     storeRoutine(JSON.stringify(newRoutinesList));
  //     setRoutinesList(newRoutinesList);
  //   }
  //   setNewRoutine(null);
  // }

  useEffect(() => {
    if (localStorage && saved_routines) {
      setRoutinesList(JSON.parse(saved_routines));
    }
  }, [saved_routines]);

  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Rutinas</h1>
      <CreatingNewRoutine />
      <div className='col-span-full'>
        <h2>Rutinas creadas</h2>
        <div className='flex gap-x-10'>
          {routinesList?.map((routine, index) => {
            return (
              <div key={`${routine?.name}-${index}`} className='border-2 border-primaryColor'>
                <CircleButton icon={<EditIcon />} onClick={() => console.log()} />
                <CircleButton icon={<SaveIcon />} onClick={() => console.log()} />
                <CircleButton icon={<TrashIcon />} onClick={() => console.log()} />
                <p>{routine?.name}</p>
                <div>
                  {routine?.routine.map((item) => {
                    return (
                      <p key={`${item.id}-exercise-local-storage`}>{item.name}</p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <p>Aún no has creado ninguna rutina.</p>
      </div>
    </main>
  )
}
