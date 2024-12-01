export interface Exercise {
  id: string,
  name: string,
}

export interface CreatingRoutine {
  id: string,
  name: string,
  routine: Exercise[],
}

export interface DataWorkout {
  id: string,
  value: string
}

export interface CreatingWorkout {
  date: string,
  routine: Exercise[],
  sets?: DataWorkout[],
  repetitions?: DataWorkout[],
  weights?: DataWorkout[],
  times?: DataWorkout[],
  distances?: DataWorkout[],
}

export type WorkoutsList = Record<number, CreatingWorkout[]>;