"use client";
import { useRoutines } from '@/hooks/useRoutines';
import { CreatingRoutine } from '@/types/types';
import React, { useEffect, useState } from 'react';

export default function RoutineCreatorTemplate() {
  const {saved_routines, storeRutine} = useRoutines();
  const [newRoutine, setNewRoutine] = useState<CreatingRoutine | null>({ name: "Día de espalda", routine: ["Dominadas", "Remo", "Jalón al pecho"] });
  const [routinesList, setRoutinesList] = useState<CreatingRoutine[] | null>();

  const saveRoutine = () => {
    if (!saved_routines && newRoutine) {
      storeRutine(JSON.stringify([newRoutine]))
      setRoutinesList([newRoutine]);
    } else {
      const newRoutinesList = JSON.parse(saved_routines as string);
      newRoutinesList.push(newRoutine);
      storeRutine(JSON.stringify(newRoutinesList));
      setRoutinesList(newRoutinesList);
    }
    setNewRoutine(null);
  }

  useEffect(() => {
    if (localStorage && saved_routines) {
        setRoutinesList(JSON.parse(saved_routines));
    }
  }, [saved_routines]);

  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Rutinas</h1>
      <div className='col-span-full'>
        <h2>Crear una nueva rutina</h2>
        <div className='flex gap-x-2 items-center'>
          <p>Nombre de la rutina:</p>
          <p>{newRoutine?.name}</p>
        </div>
        <div>
          {newRoutine?.routine.map((item, index) => {
            return (
              <div key={`${item}-${index}`} className='flex gap-x-2 items-center'>
                <p>Nombre del ejercicio:</p>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
        <button className='bg-primaryColor border-2 border-foreground py-2 px-4 rounded-lg font-semibold text-lg' onClick={() => saveRoutine()}>GUARDAR RUTINA</button>
      </div>
      <div className='col-span-full'>
        <h2>Rutinas creadas</h2>
        <div className='flex gap-x-10'>
          {routinesList?.map((routine, index) => {
            return (
              <div key={`${routine?.name}-${index}`} className='border-2 border-primaryColor'>
                <p>{routine?.name}</p>
                <div>
                  {routine?.routine.map((item, subindex) => {
                    return (
                      <p key={`${item}-exercise-${subindex}`}>{item}</p>
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
