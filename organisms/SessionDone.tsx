import React from 'react'

export default function SessionDone() {
  return (
    <div className='flex flex-col px-2 border-t-2 border-b-2 border-primaryColor py-2'>
      <p className='w-full text-center'>10 de Octubre - 2024</p>
      <div className='flex items-start gap-x-4'>
        <div>
          <p>Sesión</p>
          <p>Dominadas</p>
          <p>Dominadas</p>
          <p>Dominadas</p>
          <p>Flexiones</p>
        </div>
        <div>
          <p>Series</p>
          <p>3</p>
          <p>3</p>
          <p>3</p>
          <p>2</p>
        </div>
        <div>
          <p>Repeticiones</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>
          <p>-</p>
        </div>
        <div>
          <p>Peso</p>
          <p>Libre</p>
          <p>Libre</p>
          <p>Libre</p>
          <p>8kgs</p>
        </div>
        <div>
          <p>Tiempo</p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <p>1:00</p>
        </div>
      </div>
    </div>
  )
}
