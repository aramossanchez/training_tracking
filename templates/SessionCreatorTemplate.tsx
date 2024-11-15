"use client";
import { CreatingSession } from '@/types/types';
import React, { useState } from 'react';

export default function SessionCreatorTemplate() {
  const [newSession, setNewSession] = useState<CreatingSession>({ name: "Día de espalda", session: ["Dominadas", "Remo", "Jalón al pecho"] });

  const saveSession = () => {

  }
  
  return (
    <main className='template-structure space-y-5'>
      <h1 className='col-span-full'>Sesiones</h1>
      <div className='col-span-full'>
        <h2>Crear una nueva sesión</h2>
        <div className='flex gap-x-2 items-center'>
          <p>Nombre de la sesión:</p>
          <p>{newSession?.name}</p>
        </div>
        {newSession?.session.map((item, index) => {
          return (
            <div key={`${item}-${index}`} className='flex gap-x-2 items-center'>
              <p>Nombre del ejercicio:</p>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
      <div className='col-span-full'>
        <h2>Sesiones creadas</h2>
        <p>Aún no has creado ninguna sesión.</p>
      </div>
    </main>
  )
}
