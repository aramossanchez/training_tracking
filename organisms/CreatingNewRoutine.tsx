import CircleButton from '@/atoms/CircleButton';
import AddIcon from '@/atoms/icons/AddIcon';
import EraserIcon from '@/atoms/icons/EraserIcon';
import SaveIcon from '@/atoms/icons/SaveIcon';
import { useRoutines } from '@/hooks/useRoutines';
import { CreatingRoutine } from '@/types/types';
import React, { useState } from 'react'

export default function CreatingNewRoutine() {
  const initialRoutine = { id: Date.now(), name: "", routine: [{id: Date.now(), name: ""}] };

  const { saved_routines, storeRoutine } = useRoutines();
  const [newRoutine, setNewRoutine] = useState<CreatingRoutine | null>(initialRoutine);

  const editNewRoutine = (field: string, value: string, id?: number) => {
    const editingRoutine = structuredClone(newRoutine);
    if (id !== undefined) {
      const itemIndex = editingRoutine.routine.findIndex((item) => item.id === id);
      editingRoutine[field][itemIndex].name = value;
    } else {
      editingRoutine[field] = value;
    }
    setNewRoutine(editingRoutine);
  }

  const resetNewRoutine = () => {
    setNewRoutine(initialRoutine);
  }

  const addNewExerciseInRoutine = () => {
    const editingRoutine = structuredClone(newRoutine);
    const newExercise = {id: Date.now(), name: ""}
    editingRoutine.routine.push(newExercise);
    setNewRoutine(editingRoutine);
  }

  const saveRoutine = () => {
    if (!saved_routines && newRoutine) {
      storeRoutine(JSON.stringify([newRoutine]))
    } else {
      const newRoutinesList = JSON.parse(saved_routines as string);
      newRoutinesList.push(newRoutine);
      storeRoutine(JSON.stringify(newRoutinesList));
    }
    setNewRoutine(initialRoutine);
  }

  return (
    <div className='col-span-full'>
        <h2>Crear una nueva rutina</h2>
        <div className='flex gap-x-2 items-center'>
          <p>Nombre de la rutina:</p>
          <input type="text"
            value={newRoutine?.name}
            onChange={(e) => editNewRoutine('name', e.target.value)}
          />
        </div>
        <div>
          {newRoutine?.routine.map((item, index) => {
            return (
              <div key={`${item.id}-exercise`} className='flex gap-x-2 items-center'>
                <p>Nombre del ejercicio {index + 1}:</p>
                <input type="text" value={item.name} onChange={(e) => editNewRoutine("routine", e.target.value, item.id)} />
              </div>
            )
          })}
        </div>
        <CircleButton icon={<AddIcon />} onClick={() => addNewExerciseInRoutine()} />
        <CircleButton icon={<SaveIcon />} onClick={() => saveRoutine()} />
        <CircleButton icon={<EraserIcon />} onClick={() => resetNewRoutine()} />
      </div>
  )
}
