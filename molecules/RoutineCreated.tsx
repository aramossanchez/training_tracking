import CircleButton from '@/atoms/CircleButton'
import EditIcon from '@/atoms/icons/EditIcon'
import TrashIcon from '@/atoms/icons/TrashIcon'
import { CreatingRoutine } from '@/types/types'
import React from 'react'

interface RoutineCreatedProps {
  routine: CreatingRoutine
}

export default function RoutineCreated({
  routine,
}: RoutineCreatedProps) {
  return (
    <div className='border-2 border-primaryColor'>
      <CircleButton icon={<EditIcon />} onClick={() => console.log()} />
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
}
