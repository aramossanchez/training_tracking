export interface Exercise {
  id: string,
  name: string,
}

export interface CreatingRoutine {
  id: string,
  name: string,
  routine: Exercise[],
}

export interface CreatingWorkout {
  routine: Exercise[],
  day?: string,
  date: Date,
  sets?: string[],
  repetitions?: string[],
  weights?: string[],
  times?: string[],
  distances?: string[],
}

export type WorkoutsList = Record<number, CreatingWorkout[]>;