"use client";
import { useRoutines } from '@/hooks/useRoutines';
import NewRoutine from '@/molecules/NewRoutine';
import RoutineCreated from '@/molecules/RoutineCreated';
import { CreatingRoutine } from '@/types/types';
import React from 'react';

export default function RoutinesTemplate() {
  const { saved_routines } = useRoutines();

  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Rutinas</h1>
      <NewRoutine />
      <div className='col-span-full'>
        <h2>Rutinas creadas</h2>
        <div className='flex gap-x-10'>
          {saved_routines().length > 0 ?
            saved_routines()?.map((routine: CreatingRoutine) => {
              return (
                <RoutineCreated key={`${routine?.id}`} routine={routine} />
              )
            })
            :
            <p>Aún no has creado ninguna rutina.</p>
          }
        </div>
      </div>
    </main>
  )
}
