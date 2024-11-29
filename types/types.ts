interface Exercise {
  id: number,
  name: string,
}

export interface CreatingRoutine {
  id: number,
  name: string,
  routine: Exercise[],
}

export interface CreatingWorkout {
  routine: string[],
  day?: string,
  date: Date,
  sets?: string[],
  repetitions?: string[],
  weights?: string[],
  times?: string[],
  distances?: string[],
}

export type WorkoutsList = Record<number, CreatingWorkout[]>;