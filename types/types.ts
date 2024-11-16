export interface CreatingRoutine {
  name: string,
  routine: string[],
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